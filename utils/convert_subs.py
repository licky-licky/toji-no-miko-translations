# 1. youtube-dl --write-sub --skip-download "https://www.youtube.com/watch?v=Te4_93_uAB8"
# 2. remove first 3 lines
# 3. add path/title/etc.

from mdutils.mdutils import MdUtils
from mdutils.tools.TextUtils import TextUtils

def main():
    with open('', 'r') as subs:
        mdFile = MdUtils(file_name='Entwining_Bonds_Shameless_x_Honorable.md', title='Entwined Bonds: Shameless x Honorable')
        for line in subs.read().splitlines():
            if ':' in line and not line[0].isdigit():
                pos = line.find(':')
                if pos <= 110 and len(line) >= pos+2 and not line[pos+1].isnumeric():
                    bold_name = TextUtils.bold(line[0:pos+1])
                    mdFile.write(bold_name + line[pos+1:])
                    mdFile.new_line()
        mdFile.create_md_file()

if __name__ == '__main__':
    main()