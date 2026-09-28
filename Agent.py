#!/usr/bin/env python3
"""
Local project agent (Ollama) - hardened version.

Usage:
    python agent.py                      # work in the current folder
    python agent.py path/to/project      # work in another folder
    python agent.py --auto               # auto-approve safe edits/commands
    python agent.py --model qwen2.5-coder:14b

Env vars: AGENT_MODEL, AGENT_NUM_CTX
Requires: pip install -U ollama   (tool_name support needs a recent version)
"""

import argparse
import difflib
import fnmatch
import inspect
import json
import os
import platform
import re
import shutil
import subprocess
import sys
import time

import ollama

# ----------------------------------------------------------------------------
# Config
# ----------------------------------------------------------------------------
MODEL_NAME = os.environ.get("AGENT_MODEL", "qwen2.5-coder")
NUM_CTX = int(
    os.environ.get("AGENT_NUM_CTX", "16384")
)  # Ollama default is tiny; raise it
MAX_STEPS = 15  # max tool-call rounds per user request
MAX_HISTORY = 40  # messages kept (plus system prompt)
MAX_TOOL_OUTPUT = 12000  # chars of a tool result sent back to the model
MAX_READ_CHARS = 10000  # chars returned by a single read_file call
MAX_FILE_BYTES = 2_000_000
SKIP_DIRS = {
    "node_modules",
    "venv",
    ".venv",
    "env",
    ".git",
    "dist",
    "build",
    ".next",
    "__pycache__",
    ".idea",
    ".vscode",
    ".pytest_cache",
    ".mypy_cache",
    ".agent_backups",
}
PROTECTED_DIRS = {".git", ".agent_backups"}  # the agent may never write here
BACKUP_DIR_NAME = ".agent_backups"

PROJECT_ROOT = os.path.realpath(os.getcwd())
AUTO_APPROVE = False
UNDO_STACK = []  # (full_path, backup_path_or_None)

# Commands that are refused outright.
BLOCKED_PATTERNS = [
    r"\brm\s+-[a-z]*[rf][a-z]*\s+(/|~|\*|\.{1,2}(\s|$))",
    r"\bmkfs\b",
    r"\bdd\s+if=",
    r"\b(shutdown|reboot|halt|poweroff)\b",
    r":\(\)\s*\{",
    r"\bformat\s+[a-z]:",
    r"\bdel\s+(/[a-z]\s+)*\*",
    r"\brmdir\s+/s",
    r"\b(curl|wget)\b.*\|\s*(ba)?sh",
    r">\s*/dev/sd",
]
# Commands that always need a human "yes", even in --auto mode.
RISKY_PATTERNS = [
    r"\bgit\s+(reset\s+--hard|clean|push|checkout\s+\.|restore)",
    r"\brm\b",
    r"\bdel\b",
    r"\bmv\b",
    r"\bmove\b",
    r"\bsudo\b",
    r"\bchmod\b|\bchown\b",
    r"\bpip\s+(un)?install",
    r"\bnpm\s+(i|install|uninstall)\b",
]
# Read-only commands that run without asking (no shell operators allowed).
SAFE_READONLY = re.compile(
    r"^(git\s+(status|diff|log|branch|show)\b[^;&|<>`$]*|ls\b[^;&|<>`$]*|"
    r"dir\b[^;&|<>`$]*|pwd|whoami)$",
    re.IGNORECASE,
)


# ----------------------------------------------------------------------------
# Helpers
# ----------------------------------------------------------------------------
def truncate(text: str, limit: int = MAX_TOOL_OUTPUT, keep_tail: bool = False) -> str:
    if len(text) <= limit:
        return text
    cut = len(text) - limit
    if keep_tail:
        return f"[... {cut} chars cut ...]\n" + text[-limit:]
    return text[:limit] + f"\n[... {cut} more chars truncated ...]"


def resolve_path(path: str) -> str:
    """Resolve a path and make sure it stays inside the project folder."""
    full = os.path.realpath(os.path.join(PROJECT_ROOT, path or "."))
    try:
        inside = os.path.commonpath(
            [os.path.normcase(PROJECT_ROOT), os.path.normcase(full)]
        ) == os.path.normcase(PROJECT_ROOT)
    except ValueError:  # different drives on Windows
        inside = False
    if not inside:
        raise PermissionError(f"'{path}' is outside the project folder")
    return full


def rel(full: str) -> str:
    return os.path.relpath(full, PROJECT_ROOT).replace(os.sep, "/")


def assert_writable(full: str) -> None:
    parts = set(rel(full).split("/"))
    if parts & PROTECTED_DIRS:
        raise PermissionError(
            f"writing inside {sorted(parts & PROTECTED_DIRS)[0]} is not allowed"
        )


def is_binary(full: str) -> bool:
    try:
        with open(full, "rb") as f:
            return b"\0" in f.read(8192)
    except OSError:
        return True


def to_text(x) -> str:
    if x is None:
        return ""
    return x.decode("utf-8", errors="replace") if isinstance(x, bytes) else x


def confirm(prompt: str, force: bool = False) -> bool:
    """Ask the human. y = yes, n = no, a = yes to everything (except risky commands)."""
    global AUTO_APPROVE
    if AUTO_APPROVE and not force:
        return True
    while True:
        ans = input(f"{prompt} [y/n/a=always] ").strip().lower()
        if ans in ("y", "yes"):
            return True
        if ans in ("n", "no", ""):
            return False
        if ans in ("a", "always"):
            AUTO_APPROVE = True
            return True


def show_diff(old: str, new: str, name: str) -> None:
    diff = list(
        difflib.unified_diff(
            old.splitlines(), new.splitlines(), f"a/{name}", f"b/{name}", lineterm=""
        )
    )
    if not diff:
        print("(no textual changes)")
        return
    for line in diff[:80]:
        print(line)
    if len(diff) > 80:
        print(f"... ({len(diff) - 80} more diff lines)")


def check_syntax(full: str, content: str) -> str:
    ext = os.path.splitext(full)[1].lower()
    try:
        if ext == ".py":
            compile(content, full, "exec")
        elif ext == ".json":
            json.loads(content)
    except SyntaxError as e:
        return f"WARNING: Python syntax error after write (line {e.lineno}): {e.msg}. Fix it."
    except ValueError as e:
        return f"WARNING: file is not valid after write: {e}. Fix it."
    return ""


def make_backup(full: str) -> str:
    folder = os.path.join(PROJECT_ROOT, BACKUP_DIR_NAME)
    os.makedirs(folder, exist_ok=True)
    dest = os.path.join(
        folder, f"{int(time.time() * 1000)}_{rel(full).replace('/', '__')}"
    )
    shutil.copy2(full, dest)
    return dest


def _save(full: str, new_content: str, old_content) -> str:
    """Shared write path: diff -> confirm -> backup -> write -> syntax check."""
    name = rel(full)
    print(
        f"\n📝 Proposed change: {name}" + (" (new file)" if old_content is None else "")
    )
    show_diff(old_content or "", new_content, name)
    if not confirm(f"Apply change to {name}?"):
        return (
            "User DENIED this change. Do not retry the same edit; "
            "ask the user what they want instead."
        )
    backup = make_backup(full) if old_content is not None else None
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8", newline="") as f:
        f.write(new_content)
    UNDO_STACK.append((full, backup))
    msg = f"Successfully wrote {name} ({len(new_content.splitlines())} lines)."
    warn = check_syntax(full, new_content)
    return msg + ("\n" + warn if warn else "")


def undo_last() -> str:
    if not UNDO_STACK:
        return "Nothing to undo."
    full, backup = UNDO_STACK.pop()
    try:
        if backup is None:
            os.remove(full)
            return f"Removed newly created file {rel(full)}"
        shutil.copy2(backup, full)
        return f"Restored {rel(full)} to its previous version"
    except Exception as e:
        return f"Undo failed: {e}"


# ----------------------------------------------------------------------------
# Tools (docstrings are read by Ollama to describe each tool to the model)
# ----------------------------------------------------------------------------
def list_directory(path: str = ".", max_depth: int = 3) -> str:
    """List files in a project folder to understand the structure. Skips node_modules, .git, venv, etc.

    Args:
        path: Folder relative to the project root. Default is the project root.
        max_depth: How many folder levels to show (1-10). Default 3.
    """
    try:
        base = resolve_path(path)
        if not os.path.isdir(base):
            return f"Error: '{path}' is not a directory."
        max_depth = max(1, min(int(max_depth), 10))
        found = []
        for root, dirs, files in os.walk(base):
            depth = 0 if root == base else os.path.relpath(root, base).count(os.sep) + 1
            dirs[:] = sorted(d for d in dirs if d not in SKIP_DIRS)
            if depth + 1 >= max_depth:
                dirs[:] = []
            for fname in sorted(files):
                found.append(rel(os.path.join(root, fname)))
        if not found:
            return "(no files found)"
        shown = found[:200]
        out = "\n".join(shown)
        if len(found) > 200:
            out += f"\n[... {len(found) - 200} more files not shown; pass a subfolder as path]"
        return out
    except Exception as e:
        return f"Error listing directory: {e}"


def read_file(file_path: str, start_line: int = 1, end_line: int = 0) -> str:
    """Read a text file from the project. For big files read a line range.

    Args:
        file_path: Path relative to the project root.
        start_line: First line to read (1-based). Default 1.
        end_line: Last line to read (inclusive). 0 means until the end of the file.
    """
    try:
        full = resolve_path(file_path)
        if not os.path.exists(full):
            return f"Error: '{file_path}' does not exist. Use list_directory to find the right path."
        if os.path.isdir(full):
            return f"Error: '{file_path}' is a directory. Use list_directory instead."
        if os.path.getsize(full) > MAX_FILE_BYTES:
            return f"Error: file is larger than {MAX_FILE_BYTES // 1000} KB; too big to read."
        if is_binary(full):
            return "Error: this is a binary file and cannot be read as text."
        with open(full, "r", encoding="utf-8", errors="replace", newline="") as f:
            lines = f.read().splitlines(keepends=True)
        total = len(lines)
        if total == 0:
            return f"[{rel(full)} is empty]"
        start = max(1, int(start_line))
        end = total if int(end_line) <= 0 else min(int(end_line), total)
        if start > total:
            return f"Error: start_line {start} is past the end of the file ({total} lines)."
        if end < start:
            return "Error: end_line must be >= start_line."
        text = "".join(lines[start - 1 : end]).replace("\r\n", "\n")
        note = ""
        if len(text) > MAX_READ_CHARS:
            text = text[:MAX_READ_CHARS].rsplit("\n", 1)[0]
            end = start + text.count("\n")
            note = f"\n[truncated - call read_file again with start_line={end + 1} to continue]"
        return f"[{rel(full)} | lines {start}-{end} of {total}]\n{text}{note}"
    except Exception as e:
        return f"Error reading file: {e}"


def search_in_files(pattern: str, path: str = ".", file_glob: str = "*") -> str:
    """Search for a regex pattern (case-insensitive) across project files. Returns file:line: text.

    Args:
        pattern: Regular expression or plain text to look for.
        path: File or folder to search in, relative to the project root.
        file_glob: Only search files matching this glob, e.g. '*.py' or '*.jsx'.
    """
    try:
        rx = re.compile(pattern, re.IGNORECASE)
    except re.error as e:
        return (
            f"Error: invalid regex ({e}). Escape special characters with a backslash."
        )
    try:
        base = resolve_path(path)
        if os.path.isfile(base):
            candidates = [base]
        else:
            candidates = []
            for root, dirs, files in os.walk(base):
                dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
                candidates += [
                    os.path.join(root, f)
                    for f in sorted(files)
                    if fnmatch.fnmatch(f, file_glob)
                ]
        matches, limit = [], 50
        for fp in candidates:
            if os.path.getsize(fp) > MAX_FILE_BYTES or is_binary(fp):
                continue
            with open(fp, "r", encoding="utf-8", errors="replace") as f:
                for i, line in enumerate(f, 1):
                    if rx.search(line):
                        matches.append(f"{rel(fp)}:{i}: {line.strip()[:200]}")
                        if len(matches) >= limit:
                            return (
                                "\n".join(matches)
                                + f"\n[stopped at {limit} matches; narrow your search]"
                            )
        return "\n".join(matches) if matches else "No matches found."
    except Exception as e:
        return f"Error searching: {e}"


def edit_file(file_path: str, old_text: str, new_text: str) -> str:
    """Replace ONE exact piece of text in an existing file. Preferred for small, precise changes.
    old_text must match the file exactly (including spaces/indentation) and appear only once;
    include a few surrounding lines to make it unique.

    Args:
        file_path: Path relative to the project root.
        old_text: The exact existing text to replace.
        new_text: The text to put in its place.
    """
    try:
        full = resolve_path(file_path)
        assert_writable(full)
        if not os.path.isfile(full):
            return f"Error: '{file_path}' does not exist. Use write_file to create a new file."
        if is_binary(full):
            return "Error: binary file; cannot edit."
        with open(full, "r", encoding="utf-8", newline="") as f:
            content = f.read()
        old = old_text.replace("\r\n", "\n")
        new = new_text.replace("\r\n", "\n")
        if "\r\n" in content:  # keep the file's Windows line endings
            old, new = old.replace("\n", "\r\n"), new.replace("\n", "\r\n")
        if not old:
            return "Error: old_text is empty."
        if old == new:
            return "No change: old_text and new_text are identical."
        count = content.count(old)
        if count == 0:
            return (
                "Error: old_text was not found. Whitespace must match exactly. "
                "Call read_file for the current content and copy the text precisely."
            )
        if count > 1:
            return (
                f"Error: old_text matches {count} places. "
                "Include more surrounding lines so it matches exactly once."
            )
        return _save(full, content.replace(old, new, 1), content)
    except UnicodeDecodeError:
        return "Error: file is not valid UTF-8."
    except Exception as e:
        return f"Error editing file: {e}"


def write_file(file_path: str, content: str) -> str:
    """Create a new file or completely overwrite an existing one. For small changes to an
    existing file use edit_file instead. Always provide the COMPLETE file content.

    Args:
        file_path: Path relative to the project root.
        content: The full new content of the file.
    """
    try:
        full = resolve_path(file_path)
        assert_writable(full)
        if os.path.isdir(full):
            return f"Error: '{file_path}' is a directory."
        old = None
        if os.path.isfile(full):
            if is_binary(full):
                return "Error: refusing to overwrite a binary file."
            with open(full, "r", encoding="utf-8", errors="replace", newline="") as f:
                old = f.read()
            if "\r\n" in old and "\r\n" not in content:
                content = content.replace("\n", "\r\n")
            if old == content:
                return "No change: file already has this exact content."
        return _save(full, content, old)
    except Exception as e:
        return f"Error writing file: {e}"


def run_command(command: str, timeout: int = 60) -> str:
    """Run a shell command inside the project folder (tests, build, git status, linters).
    Interactive or never-ending commands (dev servers, prompts) are not supported.

    Args:
        command: The shell command to run.
        timeout: Seconds before the command is stopped (1-300). Default 60.
    """
    command = (command or "").strip()
    if not command:
        return "Error: empty command."
    for pat in BLOCKED_PATTERNS:
        if re.search(pat, command, re.IGNORECASE):
            return "Error: this command is blocked for safety. Ask the user to run it manually."
    risky = any(re.search(p, command, re.IGNORECASE) for p in RISKY_PATTERNS)
    if not SAFE_READONLY.match(command):
        print(f"\n⚡ Command: {command}" + ("   (risky)" if risky else ""))
        if not confirm("Run this command?", force=risky):
            return "User DENIED this command. Do not retry it; ask the user what to do."
    timeout = max(1, min(int(timeout), 300))
    try:
        r = subprocess.run(
            command,
            shell=True,
            cwd=PROJECT_ROOT,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=timeout,
            stdin=subprocess.DEVNULL,
        )
    except subprocess.TimeoutExpired as e:
        partial = truncate(to_text(e.stdout) + to_text(e.stderr), 3000, keep_tail=True)
        return f"Error: command timed out after {timeout}s and was stopped.\n{partial}".strip()
    out = (r.stdout or "") + (("\n" + r.stderr) if r.stderr else "")
    out = truncate(out.strip(), 8000, keep_tail=True) or "(no output)"
    return f"exit_code: {r.returncode}\n{out}"


def ask_user(question: str) -> str:
    """Ask the human a clarifying question when the request is ambiguous or a choice is risky.
    Use this instead of guessing.

    Args:
        question: A short, specific question.
    """
    print(f"\n❓ Agent asks: {question}")
    return input("👤 Your answer: ").strip() or "(no answer given)"


TOOLS = [
    list_directory,
    read_file,
    search_in_files,
    edit_file,
    write_file,
    run_command,
    ask_user,
]
TOOL_MAP = {fn.__name__: fn for fn in TOOLS}


# ----------------------------------------------------------------------------
# Tool-call plumbing
# ----------------------------------------------------------------------------
def _coerce(value, annotation):
    try:
        if annotation is int and not isinstance(value, int):
            return int(float(value))
        if annotation is str and not isinstance(value, str):
            return json.dumps(value) if isinstance(value, (dict, list)) else str(value)
    except (ValueError, TypeError):
        pass
    return value


def as_args(raw) -> dict:
    if isinstance(raw, dict):
        return raw
    if isinstance(raw, str):
        try:
            parsed = json.loads(raw)
            return parsed if isinstance(parsed, dict) else {}
        except json.JSONDecodeError:
            return {}
    return {}


def call_tool(name: str, args: dict) -> str:
    fn = TOOL_MAP.get(name)
    if fn is None:
        return f"Error: unknown tool '{name}'. Available tools: {', '.join(TOOL_MAP)}"
    sig = inspect.signature(fn)
    clean = {
        k: _coerce(v, sig.parameters[k].annotation)
        for k, v in args.items()
        if k in sig.parameters
    }
    try:
        sig.bind(**clean)
    except TypeError as e:
        return f"Error: bad arguments for {name}{sig}: {e}"
    try:
        return str(fn(**clean))
    except Exception as e:  # never let a tool crash the agent
        return f"Error: {type(e).__name__}: {e}"


def parse_text_tool_calls(content: str):
    """Small models sometimes print the tool call as JSON text instead of a real tool call."""
    if not content:
        return []
    text = re.sub(r"</?tool_call>|```(?:json)?", "", content).strip()
    candidates = [text]
    s, e = text.find("{"), text.rfind("}")
    if s != -1 and e > s:
        candidates.append(text[s : e + 1])
    for cand in candidates:
        try:
            obj = json.loads(cand)
        except json.JSONDecodeError:
            continue
        calls = []
        for o in obj if isinstance(obj, list) else [obj]:
            if isinstance(o, dict) and o.get("name") in TOOL_MAP:
                calls.append(
                    (
                        o["name"],
                        as_args(o.get("arguments") or o.get("parameters") or {}),
                    )
                )
        if calls:
            return calls
    return []


def trim_history(messages: list) -> None:
    if len(messages) <= MAX_HISTORY + 1:
        return
    tail = messages[-MAX_HISTORY:]
    while tail and tail[0]["role"] != "user":  # never start on an orphaned tool result
        tail.pop(0)
    if tail:
        messages[:] = [messages[0]] + tail


def build_system_prompt() -> str:
    return (
        "You are a careful autonomous coding agent working inside one project folder.\n"
        f"Project root: {PROJECT_ROOT}\nOS: {platform.system()} (shell commands run in this OS's shell)\n\n"
        "Rules:\n"
        "1. Explore before acting: use list_directory and search_in_files, then read_file the files you will change.\n"
        "2. Never invent file names, function names or file contents. If unsure, look it up with a tool.\n"
        "3. For changes to existing files use edit_file (small exact replacements). Use write_file only for new files "
        "or full rewrites, and then send the COMPLETE file.\n"
        "4. After changing code, verify it: run the tests/build/linter with run_command when one exists.\n"
        "5. If a tool returns an error, read it, fix your approach, and try a different call. Do not repeat the same failing call.\n"
        "6. If the request is ambiguous, or several valid options exist, or an action is risky, call ask_user instead of guessing.\n"
        "7. If the user DENIES an action, do not retry it.\n"
        "8. Finish with a short, factual summary: what you changed (file names), what you verified, and anything left to do. "
        "Do not claim something works unless a tool result showed it."
    )


# ----------------------------------------------------------------------------
# Agent turn
# ----------------------------------------------------------------------------
def run_turn(messages: list) -> None:
    recent = []
    for _ in range(MAX_STEPS):
        trim_history(messages)
        try:
            response = ollama.chat(
                model=MODEL_NAME,
                messages=messages,
                tools=TOOLS,
                options={"temperature": 0, "num_ctx": NUM_CTX},
            )
        except ollama.ResponseError as e:
            print(f"❌ Ollama error: {e}")
            if "tools" in str(e).lower():
                print(
                    f"   Model '{MODEL_NAME}' may not support tool calling. Try another model."
                )
            return
        except Exception as e:
            print(
                f"❌ Cannot reach Ollama ({e}). Is it running? Start it with: ollama serve"
            )
            return

        msg = response["message"]
        content = (msg.get("content") or "").strip()
        calls = [
            (c["function"]["name"], as_args(c["function"]["arguments"]))
            for c in (msg.get("tool_calls") or [])
        ]
        if not calls:
            calls = parse_text_tool_calls(content)
            if calls:
                content = ""

        assistant = {"role": "assistant", "content": content}
        if calls:
            assistant["tool_calls"] = [
                {"function": {"name": n, "arguments": a}} for n, a in calls
            ]
        messages.append(assistant)

        if content:
            print(f"\n🤖 Agent: {content}")
        if not calls:
            if not content:
                print("\n🤖 Agent: (empty reply - try rephrasing your request)")
            return

        for name, args in calls:
            sig = name + json.dumps(args, sort_keys=True)
            recent.append(sig)
            print(f"\n🛠️  {name}({truncate(json.dumps(args, ensure_ascii=False), 200)})")
            if recent[-3:] == [sig] * 3:
                result = (
                    "Error: you made this exact call 3 times in a row. "
                    "Change your approach or use ask_user."
                )
            else:
                result = call_tool(name, args)
            print("   ↳ " + truncate(result, 300).replace("\n", "\n     "))
            messages.append(
                {"role": "tool", "tool_name": name, "content": truncate(result)}
            )
    print(
        f"\n⚠️  Stopped after {MAX_STEPS} steps. Type 'continue' if you want it to keep going."
    )


def check_ollama() -> bool:
    try:
        ollama.show(MODEL_NAME)
        return True
    except ollama.ResponseError:
        print(f"❌ Model '{MODEL_NAME}' not found. Run: ollama pull {MODEL_NAME}")
    except Exception as e:
        print(f"❌ Cannot reach Ollama ({e}). Start it with: ollama serve")
    return False


HELP = """Commands:
  /help     show this help
  /undo     undo the agent's last file change
  /auto     toggle auto-approve (risky commands still ask)
  /clear    forget the conversation
  /exit     quit"""


def main() -> None:
    global MODEL_NAME, PROJECT_ROOT, AUTO_APPROVE
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    parser = argparse.ArgumentParser(description="Local project coding agent")
    parser.add_argument("project", nargs="?", default=".", help="project folder")
    parser.add_argument("--model", default=MODEL_NAME)
    parser.add_argument(
        "--auto", action="store_true", help="auto-approve edits and safe commands"
    )
    args = parser.parse_args()

    root = os.path.realpath(args.project)
    if not os.path.isdir(root):
        sys.exit(f"Project folder not found: {root}")
    PROJECT_ROOT, MODEL_NAME, AUTO_APPROVE = root, args.model, args.auto
    os.chdir(root)

    print("=" * 60)
    print("🤖 LOCAL PROJECT AGENT")
    print("=" * 60)
    print(f"Model: {MODEL_NAME} | Context: {NUM_CTX} | Project: {PROJECT_ROOT}")
    print("Type /help for commands.\n")
    if not check_ollama():
        sys.exit(1)

    system = {"role": "system", "content": build_system_prompt()}
    messages = [system]

    while True:
        try:
            user_input = input("\n👤 You: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n👋 Goodbye!")
            break
        if not user_input:
            continue
        cmd = user_input.lower()
        if cmd in ("exit", "quit", "/exit", "/quit"):
            print("👋 Goodbye!")
            break
        if cmd == "/help":
            print(HELP)
            continue
        if cmd == "/undo":
            print(undo_last())
            continue
        if cmd == "/auto":
            AUTO_APPROVE = not AUTO_APPROVE
            print(f"Auto-approve is now {'ON' if AUTO_APPROVE else 'OFF'}")
            continue
        if cmd == "/clear":
            messages[:] = [system]
            print("Conversation cleared.")
            continue

        mark = len(messages)
        messages.append({"role": "user", "content": user_input})
        try:
            run_turn(messages)
        except KeyboardInterrupt:
            del messages[mark:]  # drop the half-finished turn so history stays valid
            print("\n⛔ Cancelled.")
        except Exception as e:
            del messages[mark:]
            print(f"❌ Unexpected error: {type(e).__name__}: {e}")


if __name__ == "__main__":
    main()
