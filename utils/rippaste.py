import requests 
import json
import argparse
from simple_pastebin_client.api import PasteBinApiClient


def get_titles():
    v = PasteBinApiClient.user_pastes('canadaharma', do_all=True)

    with open('titles.json', 'w') as f:
        json.dump(v, f)


def get_text():
    u = PasteBinApiClient.user_pastes_data('canadaharma', do_all=True)

    with open("result.json", 'w') as text_file:
        res = []
        for paste in u:
            new = { key.decode() if type(key) is bytes else key: val.decode() if type(val) is bytes else val for key, val in paste.items() }
            res.append(new)
        json.dump(res, text_file)

if __name__ == '__main__':  
    get_text()