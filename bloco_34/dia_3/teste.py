from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"

response = requests.get(URL_BASE)
selector = Selector(text=response.text)

description = selector.css("#product_description ~ p::text").get()
print(description)

suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
print(description)
