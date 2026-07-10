# 1. Imports the Playwright library so Python can control the web browser
from playwright.sync_api import sync_playwright

def run_web_bot():
    print("Launching automated browser...")
    # 2. Starts the Playwright process engine and cleans it up when done
    with sync_playwright() as p:
        # 3. Launches a physical, visible instance of Chrome on your screen
        browser = p.chromium.launch(headless=False)
        # 4. Opens a clean, brand-new browser tab inside the Chrome window
        page = browser.new_page()
        
        print("Navigating to Wikipedia...")
        # 5. Directs the active browser tab to load the Wikipedia homepage
        page.goto("https://wikipedia.org")
        
        # 6. Finds the exact HTML search box element on the web page
        search_box = page.locator("input[name='search']")
        # 7. Automatically types the word 'Automation' into that search box
        search_box.fill("Automation")
        # 8. Simulates a physical keyboard press of the Enter key to search
        search_box.press("Enter")
        
        # 9. Pauses the script execution for 3 seconds so the page can load
        page.wait_for_timeout(3000)
        
        print("Scraping webpage text data...")
        # 10. Finds the primary main heading HTML element on the new webpage
        heading_element = page.locator("h1#firstHeading")
        
        # 11. Extracts the actual inner text content hidden inside that element
        page_heading = heading_element.inner_text()
        
        # 12. Prints the scraped heading data directly to your terminal window
        print(f"Success! The page heading text is: '{page_heading}'")
        
        # 13. Closes the Chrome window completely to free up computer memory
        browser.close()

if __name__ == "__main__":
    run_web_bot()
