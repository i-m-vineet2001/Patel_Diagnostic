import subprocess
import os
import ollama

MODEL_NAME = "qwen2.5-coder"
MAX_ATTEMPTS = 3


def run_build_or_test():
    """Runs your build command (or test suite) and returns stdout/stderr and exit code."""
    print("🚀 Running project build/test check...")
    # Using npm run build as a baseline, or change to pytest / npm test
    result = subprocess.run(["npm", "run", "build"], capture_output=True, text=True)
    return result.returncode, result.stdout + "\n" + result.stderr


def ask_agent_for_fix(error_logs: str) -> str:
    """Sends error logs to local Ollama model to get a fix."""
    print("🤖 Agent is analyzing logs and crafting a fix...")

    prompt = f"""
    You are an autonomous self-healing coding agent for a React, Vite, and Tailwind CSS project.
    The following build error or log was produced by the project:
    
    {error_logs}
    
    Analyze the error, identify the root cause, and provide the exact updated file content or code patch required to fix it. 
    Keep your response focused and provide valid code.
    """

    response = ollama.chat(
        model=MODEL_NAME, messages=[{"role": "user", "content": prompt}]
    )
    return response.get("message", {}).get("content", "")


def self_heal_loop():
    attempt = 1

    while attempt <= MAX_ATTEMPTS:
        print(f"\n--- Attempt {attempt} of {MAX_ATTEMPTS} ---")
        exit_code, logs = run_build_or_test()

        if exit_code == 0:
            print("✨ Success! The project built/tested cleanly without errors.")
            return

        print(f"❌ Build failed with exit code {exit_code}. Capturing logs...")
        print(logs[-500:])  # Print last 500 chars of error

        # Get AI fix suggestion
        fix_suggestion = ask_agent_for_fix(logs)
        print("\n--- AI Agent Recommendation ---")
        print(fix_suggestion[:400] + "...\n")

        # In a fully automated setup, you can parse code blocks from 'fix_suggestion'
        # and write them directly using Python file operations.

        user_input = input("Apply suggested insights/fixes and retry? (y/n): ")
        if user_input.lower() != "y":
            print("Stopping agent loop.")
            break

        attempt += 1

    print("⚠️ Reached maximum attempts or manual stop. Review changes manually.")


if __name__ == "__main__":
    self_heal_loop()
