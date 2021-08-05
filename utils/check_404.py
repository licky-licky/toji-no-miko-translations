from bs4 import BeautifulSoup
import urllib.request
import requests

html_page = urllib.request.urlopen("https://swordpolishing.github.io/tnm-translations/events/")
soup = BeautifulSoup(html_page, "html.parser")
bad_links = 0 
for link in soup.findAll('a'):
    href = link.get('href')
    if 'docs/' in href and 'Part 1' not in href:
        full_link = ('https://swordpolishing.github.io' + href).replace(' ', '')
        response = requests.get(full_link)
        if response.status_code == 404:
            print(f'{href}: {response.status_code}')
            bad_links += 1
        
print(f'\ntotal: {bad_links}')