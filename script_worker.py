import logging

# Configuration remains the same
logging.basicConfig(filename='app.log', level=logging.INFO, 
                    format='%(asctime)s - %(levelname)s - %(message)s')

def perform_risky_task():
    try:
        print("Attempting to divide a number by zero...")
        # This will trigger a math error instantly
        result = 10 / 0 
    except Exception as error_message:
        # This logs the specific failure into app.log
        logging.error(f"Automation failed! Error type: {error_message}")

if __name__ == "__main__":
    perform_risky_task()
