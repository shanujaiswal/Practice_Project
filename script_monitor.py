import os

LOG_FILE = "app.log"

def read_logs():
    # Check if file exists, then print contents
    if os.path.exists(LOG_FILE):
        with open(LOG_FILE, "r") as file:
            logs = file.read()
            print("--- Reading Logs From Another Script ---")
            print(logs if logs else "[Log file is currently empty]")
    else:
        print(f"Error: {LOG_FILE} missing.")

if __name__ == "__main__":
    read_logs()
