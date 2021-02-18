# Rather simple automated test for my personal website
# To be setup as part of the build process
#
# TODO: remove hardcoded links to prod version of site, more tests
import unittest
from selenium import webdriver

class HomeTest(unittest.TestCase):
    def test_front_page(self):
        self.driver.get("https://chuck.findlayis.me")

        print("Checking website title")
        self.assertEqual(self.driver.title, "Chuck Findlay", "Home page title incorrect, is the web server erroring out?")

    def test_contact_link(self):
        self.driver.get("https://chuck.findlayis.me")
        link = self.driver.find_element_by_link_text('Contact')
        
        link.click()
        
        # TODO: find if active CSS tag is present on Contact page link now

    def setUp(self):
        self.driver = webdriver.Firefox()

    def tearDown(self):
        self.driver.quit()
        print("Browser closed")

if __name__ == "__main__":
	unittest.main()