# 1. Imports the Playwright library so Python can control the web browser
from playwright.sync_api import sync_playwright

# 2. Defines a standard Python function block to hold our automation steps
def run_web_bot():
    print("Launching automated browser...")
    
    # 3. Starts the Playwright process engine and cleans it up when done
    with sync_playwright() as p:
        
        # 4. Launches a physical, visible instance of Chrome on your screen
        browser = p.chromium.launch(headless=False)
        
        # 5. Opens a clean, brand-new browser tab inside the Chrome window
        page = browser.new_page()
        
        print("Navigating to Wikipedia...")
        # 6. Directs the active browser tab to load the Wikipedia homepage
        page.goto("https://wikipedia.org")
        
        print("Typing search query...")
        # 7. Finds the exact HTML search box element on the web page
        search_box = page.locator("input[name='search']")
        
        # 8. Automatically types the word 'Automation' into that search box
        search_box.fill("Automation")
        
        print("Pressing Enter...")
        # 9. Simulates a physical keyboard press of the Enter key to search
        search_box.press("Enter")
        
        # 10. Pauses the script execution for 3 seconds so the page can load
        page.wait_for_timeout(3000)
        
        print("Saving screenshot...")
        # 11. Snaps a picture of the webpage and saves it to your folder
        page.screenshot(path="wikipedia_result.png")
        
        # # 12. Closes the Chrome window completely to free up computer memory
        # browser.close()
        print("Done!")

# 13. Tells Python to run this code only if you execute this file directly
if __name__ == "__main__":
    # 14. Triggers and starts the function we created at the top
    run_web_bot()
