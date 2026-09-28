import os
import ollama

MODEL_NAME = "qwen2.5-coder"


def read_target_file(file_path: str) -> str:
    """Read the contents of a specific file."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        print(f"❌ Error reading file {file_path}: {e}")
        return ""


def audit_specific_file(file_path: str):
    print(f"🔍 Reading file: {file_path}...")
    file_content = read_target_file(file_path)

    if not file_content:
        print(f"✨ File is empty or could not be found.")
        return

    print(
        f"🤖 Sending file content to local Ollama model ({MODEL_NAME}) for deep auditing...\n"
    )

    prompt = f"""
    You are an expert senior code reviewer for a React, Vite, Tailwind CSS, and Shadcn UI project.
    Please perform a deep, rigorous code audit of the following file (`{file_path}`).
    Look for:
    1. **Logic & Functional Bugs**: Broken event handlers, state management issues, missing form validation, or unhandled async errors.
    2. **UI/UX & Tailwind Best Practices**: Incorrect class merging, accessibility issues, or layout bugs.
    3. **Path & Import Errors**: Broken imports or incorrect path aliases (ensure `@/` is used correctly).
    4. **Corner Cases**: Null/undefined prop checks, missing fallback states, or race conditions.
    
    Provide precise feedback, identify failure modes, and supply corrected code snippets for any issues found.

    File Content:
    {file_content}
    """

    try:
        response = ollama.chat(
            model=MODEL_NAME, messages=[{"role": "user", "content": prompt}]
        )

        print("=" * 60)
        print(f"🤖 DEEP FILE AUDIT REPORT FOR: {file_path}")
        print("=" * 60)
        print(response.get("message", {}).get("content", "No response generated."))
        print("=" * 60)

    except Exception as e:
        print(
            f"❌ Failed to connect to Ollama. Make sure 'ollama serve' is running. Error: {e}"
        )


if __name__ == "__main__":
    # Target your Login page directly
    target = "src/pages/Login.jsx"
    if os.path.exists(target):
        audit_specific_file(target)
    else:
        print(f"❌ Could not find {target}. Check your file path.")
