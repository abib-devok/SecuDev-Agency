from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Homepage
    page.goto("http://localhost:3000/fr")
    page.wait_for_selector('h1:has-text("Sécurité et Développement")')
    page.screenshot(path="jules-scratch/verification/homepage.png")

    # Contact Page
    page.goto("http://localhost:3000/fr/contact")
    page.wait_for_selector('h2:has-text("Contactez-nous")')
    page.screenshot(path="jules-scratch/verification/contact.png")

    # Blog Page
    page.goto("http://localhost:3000/fr/blog")
    page.wait_for_selector('h2:has-text("Notre Blog")')
    page.screenshot(path="jules-scratch/verification/blog.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
