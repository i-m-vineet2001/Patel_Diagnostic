import subprocess
import ollama

# Configure your preferred local coding model
MODEL_NAME = "qwen2.5-coder"


def get_git_diff() -> str:
    """Retrieve the current git diff of the project."""
    try:
        # Runs 'git diff' to check modified files
        result = subprocess.run(
            ["git", "diff"], capture_output=True, text=True, check=True
        )
        diff_output = result.stdout.strip()

        if not diff_output:
            # If no unstaged changes, check staged changes
            result_staged = subprocess.run(
                ["git", "diff", "--cached"], capture_output=True, text=True, check=True
            )
            diff_output = result_staged.stdout.strip()

        return diff_output
    except subprocess.CalledProcessError as e:
        print("Error running git commands:", e)
        return ""


def review_code():
    print(f"🔍 Fetching git changes...")
    diff_data = get_git_diff()

    if not diff_data:
        print("✨ No modified files or git diffs found. Make some changes first!")
        return

    print(f"🤖 Sending diff to local Ollama model ({MODEL_NAME})...\n")

    # Expanded prompt with path conflicts, version checks, and corner cases
    prompt = f"""
    You are an expert senior code reviewer for a React, Vite, and Tailwind CSS project using path aliases (`@/*` mapping to `src/*`).
    Please review the following git diff with rigorous scrutiny and perform the following corner checks:
    1. **Path & Import Conflicts**: Check for broken import paths, incorrect relative paths (e.g., using `../../` instead of `@/`), or alias misconfigurations.
    2. **Version & Compatibility**: Check for breaking changes, mismatched package APIs, or version incompatibilities with React 18, Vite 8, or Lucide/Radix UI dependencies.
    3. **Edge Cases & Corner Checks**: Look for null/undefined handling, missing prop types/defaults, race conditions, or unhandled state transitions.
    4. **Best Practices**: Verify Tailwind CSS/Shadcn UI class merging (using `clsx` and `tailwind-merge`) and performance bottlenecks.
    
    Provide concise feedback, pinpoint potential failure modes, and supply code snippets for recommended fixes.

    Git Diff:
    {diff_data}
    """

    try:
        response = ollama.chat(
            model=MODEL_NAME, messages=[{"role": "user", "content": prompt}]
        )

        print("=" * 60)
        print("🤖 LOCAL AGENT COMPREHENSIVE REVIEW REPORT:")
        print("=" * 60)
        print(response.get("message", {}).get("content", "No response generated."))
        print("=" * 60)

    except Exception as e:
        print(
            f"❌ Failed to connect to Ollama. Make sure 'ollama serve' is running. Error: {e}"
        )


if __name__ == "__main__":
    review_code()
