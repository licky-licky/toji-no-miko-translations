import json, os
from mdutils.mdutils import MdUtils
from mdutils.tools.TextUtils import TextUtils
from mdutils.tools.Header import Header
from natsort import natsorted

translations_paste_key = 'LdyviZ8Z'

character_names = [
    'Etou_Kanami',
    'Juujou_Hiyori',
    'Yanase_Mai',
    'Itomi_Sayaka',
    'Mashiko_Kaoru',
    'Kohagura_Ellen',
    'Asakura_Mihono'
    'Setouchi_Chie',
    'Musumi_Kiyoka',
    'Shichinosato_Kofuki',
    'Kitora_Mirja',
    'Yamashiro_Yui',
    'Origami_Yukari',
    'Shidou_Maki',
    'Konohana_Suzuka',
    'Satsuki_Yomi',
    'Tsubakuro_Yume',
    'Ban_Tsugumi',
    'Fujiwara_Minato',
    'Hiiragi_Kagari',
    'Inago_Akira',
    'Inami_Suu',
    'Iwakura_Sanae',
    'Nitta_Hirona',
    'christmas'
]

def part_titles(x):
    return {
        '2': 'Part 2: Complication',
        '3': 'Part 3: Turmoil',
        '4': 'Part 4: Bonds',
        '5': 'Part 5: Fog at First Light'
    }.get(x, 'Part')  

def get_events():
    with open('result.json', 'r') as res, open('titles.json') as tit:
        results = json.load(res)
        titles = json.load(tit)
        data = ''
        events_line = 0
        events = []
        event_titles = []
        for r in results:
            if r['paste_key'] == translations_paste_key:
                data = r['data']
        if data:
            for num, line in enumerate(data.splitlines(), 1):
                if '[---EVENTS---]' in line:
                    events_line = num

        if events_line:
            list_of_lines = data.splitlines()
            for evt in list_of_lines[events_line+3:]:
                if evt and evt[0] == 'h':
                    events.append(evt.replace('https://pastebin.com/', ''))
            
            for e in events:
                for t in titles:
                    if t['paste_key'] == e:
                        event_titles.append(t['title'].replace('/', '_').replace(' ', '_').replace('#','No.') + '.md')

        return event_titles

def get_episodes():
     with open('result.json', 'r') as res, open('titles.json') as tit:
        results = json.load(res) 
        titles = json.load(tit)
        data = ''
        episodes_line = 0
        events_line = 0
        episodes = []
        episode_titles = []
        for r in results:
            if r['paste_key'] == translations_paste_key:
                data = r['data']
        if data:
            for num, line in enumerate(data.splitlines(), 1):
                if '[---TOJI EPISODES---]' in line:
                    episodes_line = num
                if '[---EVENTS---]' in line:
                    events_line = num

        if episodes_line:
            list_of_lines = data.splitlines()
            for evt in list_of_lines[episodes_line+4:events_line]:
                if evt and evt[0] == 'h':
                    episodes.append(evt.replace('https://pastebin.com/', ''))
            
            for e in episodes:
                for t in titles:
                    if t['paste_key'] == e:
                        episode_titles.append(t['title'].replace('/', '_').replace(' ', '_').replace('#','No.') + '.md')

        return episode_titles

def generate_toc():
    toc = '[Home](/)\n'
    toc += '> :Collapse label=Main Story\n'
    toc += '> \n'
    toc += '> > :Collapse label=Part 1: Formation\n'
    toc += '> > \n'

    part1 = []
    other_parts = []    # part numbers
    chapters = []       # chapters of parts
    episodes = []       # character episodes
    others = []         # everything else 
    for md in os.listdir('./docs/md/docs'):
        if (md[0].isnumeric() and md[2] == '-') and ('Darkness_Looming' not in md and 'Time_Limit' not in md) or 'Prologue' in md :
            part1.append(md)
        elif md[0].isnumeric():
            other_parts.append(md[0])
            chapters.append(md)
        elif 'episode' in md or 'misogi' in md or any(name in md for name in character_names):
            episodes.append(md)
        else:
            others.append(md)

    part1.sort()
    part1 = part1[-1:] + part1[:-1]
    for chp in part1:
       fn = chp.replace('.md', '')
       title = fn.replace('_', ' ').replace('~', '\~')
       toc += f'> > [{title}](/docs/{fn})\n'
    
    other_parts = list(set(other_parts))
    other_parts.sort()
    for part in other_parts:
        part_chapters = [x for x in chapters if x[0] == part]
        part_chapters = natsorted(part_chapters)
        if part == '4':
            part_chapters.append('Chain_Story_Archives_Part_2.5.md')
        toc += '>\n'
        toc += f'> > :Collapse label={part_titles(part)}\n'
        toc += '> >\n'
        for chp in part_chapters:
            if (chp[3] != '.' and chp[4] != '.') or ((chp[3] == '.' or chp[4] == '.') and not any(x[2] == chp[2] and x[3] != chp[3] for x in part_chapters)):
                fn = chp.replace('.md', '')
                title = fn.replace('_', ' ').replace('~', '\~')
                toc += f'> > [{title}](/docs/{fn})\n'
    
    toc += '\n> :Collapse label=Episodes\n> \n'
    episodes_in_paste = get_episodes()
    for ep in episodes_in_paste + list(set(episodes) - set(episodes_in_paste)):
        fn = ep.replace('.md', '')
        title = fn.replace('_', ' ').replace('~', '\~')
        toc += f'> [{title}](/docs/{fn})\n'

    toc += '\n> :Collapse label=Events\n> \n'
    for o in get_events():
        fn = o.replace('.md', '')
        title = fn.replace('_', ' ').replace('~', '\~')
        toc += f'> [{title}](/docs/{fn})\n'

    with open('./docs/md/_toc.md', 'w') as toc_file:
        toc_file.write(toc)


def generate_file(title, data):
    if title == '2 - The Darkness Looming over the World' or 'Time Limit' in title:
        title = '2-' + title.replace(' - ', ' ')
    mdFile = MdUtils(file_name='./docs/md/docs/' + title.replace('/', '_').replace(' ', '_').replace('#','No.') + '.md', title=title.replace('~', '\~'))
    for line in data.splitlines():
        line = line.replace('~', '\~')
        line = line.replace('!', '\!')
        line = line.replace('!?', '!\?')
        line = line.replace('!"', '!\\"')
        line = line.replace('***', '\*\*\*')
        line = line.replace('!?)', '\!\?\)')
        line = line.replace('!)', '!\)')
        line = line.replace('!?)', '\!\?\)')
        line = line.replace('~.', '~\.')
        line = line.replace('?)', '?\)')
        line = line.replace('~)', '~\)')

        if line and (('[' == line[0] and ('Q' != line[1] and not line[2].isnumeric() and '[R]' not in line and ']:' in line)) or (line[0].isnumeric() and (':' in line or '-' in line))):
            mdFile.write(Header.atx_level_2(line))
        elif ':' in line and 'http' not in line:
            pos = line.find(':')
            try:
                if pos <= 110 and len(line) >= pos+2 and not line[pos+1].isnumeric():
                    bold_name = TextUtils.bold(line[0:pos+1])
                    mdFile.write(bold_name + line[pos+1:])
                    mdFile.new_line()
                else:
                    mdFile.write(line)
                    mdFile.new_line()
            except:
                print(line)
        elif 'https://www.youtube' in line or 'https://youtu.be/' in line:
            if 'youtube' in line:
                id = line.replace('https://www.youtube.com/watch?v=', '')
            else:
                id = line.replace('https://youtu.be/', '')
            mdFile.write(f'[<iframe width="640" height="480" src="https://www.youtube.com/embed/{id}"></iframe>](:Iframe)')
            mdFile.new_line()
        elif line:
            mdFile.write(line + "\n\n")
            mdFile.new_line()
        else:
            mdFile.write(line)
    
    mdFile.write('> :ToCPrevNext')
    mdFile.create_md_file()
    
if __name__ == '__main__':

    with open('result.json', 'r') as res, open('titles.json') as tit:
        results = json.load(res)
        titles = json.load(tit)
        for r in results:
            for t in titles:
                if r['paste_key'] == t['paste_key']:
                    # print(t['title'], r['hits'])
                    generate_file(t['title'], r['data'])


    generate_toc()

