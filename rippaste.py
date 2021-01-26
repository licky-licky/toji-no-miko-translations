import requests 
import json
import argparse
from simple_pastebin_client.api import PasteBinApiClient


'''
    user_pastes_data should actually get the (non truncated) titles to but for some reason
    (probably because of changes in pastebin's frontend) the title field is empty
    so get_titles saves the (truncated) titles in an another file and they get paired
    using the paste_key with the actual test
'''

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
    parser = argparse.ArgumentParser(description='')
    parser.add_argument('-t', '--titles', action='store_true', help='get the titles of the pastes')
    parser.add_argument('-d', '--data', action='store_true', help='get the text of the pastes')
    args = parser.parse_args()
    
    if args.titles:
        get_titles()
    if args.data:
        get_text()