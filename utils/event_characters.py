import json, os, re
from glob import glob
from pathlib import Path

file_dir = os.path.abspath(__file__)
ROOT_DIR = Path(file_dir).parent.parent.absolute()

def main() -> str:
    output = []

    for f in glob(str(ROOT_DIR) + '/docs/*.md'):
        with open(f, 'r') as event_file:
            event_text =  ''.join(event_file.readlines())
            result = re.findall(r'((?<=\*\*)[A-Z]\w+:(?=\*\*))', event_text)
            appearing_characters = list(set([char.strip(':') for char in result]))
            output.append({ Path(f).stem : appearing_characters})

    return json.dumps(output)

if __name__ == '__main__':
    with open('appearances.json', 'w') as outfile:
        outfile.write(main())    
