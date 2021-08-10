import json, os, re
from glob import glob
from pathlib import Path
from collections import Counter

file_dir = os.path.abspath(__file__)
root_dir = Path(file_dir).parent.parent.absolute()
filter_chars = ['Announcement', 'Shopkeeper', 'Everyone', 'Announcer',
                'Students', 'Both', 'Child', 'Angtelina', 'Spectators',
                'Scream', 'Dealer', 'Landlady', 'NAnoha', 'Suuu', 'Itsuski',
                'Yunna', 'Operator', 'Attendant', 'Organizer', 'Detective', 'Priest',
                'Heroes', 'Culpit', 'Weatherman', 'Karou', 'Honoko', 'Voice', 'Other', 'Tojis',
                'Children', 'Police', 'Culprit', 'Referee', 'Aradama']

def main() -> str:
    events = []
    characters = {}
    is_a_real_character = lambda x: x not in filter_chars
    for f in glob(str(root_dir) + '/docs/*.md'):
        with open(f, 'r') as event_file:
            event_text =  ''.join(event_file.readlines())
            result = re.findall(r'((?<=\*\*)[A-Z]\w+:(?=\*\*))', event_text)
            appearing_characters = list(set([char.strip(':') for char in result]))
            appearing_characters = list(filter(is_a_real_character, appearing_characters))
            events.append({ 'name': Path(f).stem, 'chars' : appearing_characters})
    for event in events:
        chars = event['chars']
        characters =  {k: characters.get(k, 0) + dict(Counter(chars)).get(k, 0) for k in characters | dict(Counter(chars))}
    characters = dict(sorted(characters.items(), key=lambda item: item[1], reverse=True))
    output = { 'events': events, 'characters': characters }
    return json.dumps(output)

if __name__ == '__main__':
    with open('appearances.json', 'w') as outfile:
        outfile.write(main())    
