import requests # see https://2.python-requests.org/en/master/
import json
from simple_pastebin_client.api import PasteBinApiClient

# u = PasteBinApiClient.user_pastes_data('canadaharma', page=2)
v = PasteBinApiClient.user_pastes('canadaharma', page=2)
# print(u)

with open('titles_2', 'w') as f:
    json.dump(v, f)

quit()

with open("result", 'w') as text_file:
    res = []
    for paste in u:
        new = { key.decode() if type(key) is bytes else key: val.decode() if type(val) is bytes else val for key, val in paste.items() }
        res.append(new)
    json.dump(res, text_file)

# key = 'WLj2ODKxwFsLz0w_YRwJuqnCqiqbHKhg'
# text = "a text"
# t_title = "a_paste_title"

# login_data = {
#     'api_dev_key': key,
#     'api_user_name': 'your_acc_username',
#     'api_user_password': 'your_acc_password'
# }

# data = {
#     'api_option': 'paste',
#     'api_dev_key':key,
#     'api_paste_code':text,
#     'api_paste_name':t_title,
#     'api_paste_expire_date': 'see_https://pastebin.com/api',
#     'api_user_key': None,
#     'api_paste_format': 'see_https://pastebin.com/api'
# }

# login = requests.post("https://pastebin.com/api/api_login.php", data=login_data)
# print("Login status: ", login.status_code if login.status_code != 200 else "OK/200")
# print("User token: ", login.text)
# data['api_user_key'] = login.text

# r = requests.post("https://pastebin.com/api/api_post.php", data=data)
# print("Paste send: ", r.status_code if r.status_code != 200 else "OK/200")
# print("Paste URL: ", r.text)
