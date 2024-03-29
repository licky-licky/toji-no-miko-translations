import json, os, re
from mdutils.mdutils import MdUtils
from mdutils.tools.TextUtils import TextUtils
from mdutils.tools.Header import Header
from natsort import natsorted

translations_paste_key = 'LdyviZ8Z'

character_names = [
    'Asakura_Mihono',
    'Setouchi_Chie',
    'Shichinosato_Kofuki',
    'Musumi_Kiyoka',
    'Kitora_Mirja',
    'Yamashiro_Yui',
    'Etou_Kanami',
    'Juujou_Hiyori',
    'Yanase_Mai',
    'Itomi_Sayaka',
    'Mashiko_Kaoru',
    'Kohagura_Ellen',    
    'Origami_Yukari',
    'Shidou_Maki',
    'Konohana_Suzuka',
    'Satsuki_Yomi',
    'Tsubakuro_Yume',
    'Hiiragi_Kagari',
    'Fujiwara_Minato',
    'Ban_Tsugumi',
    'Iwakura_Sanae',
    'Inago_Akira',
    'Inami_Suu',
    'Nitta_Hirona',
]

def part_titles(x):
    return {
        '2': 'Part 2: Complication',
        '3': 'Part 3: Turmoil',
        '4': 'Part 4: Bonds',
        '5': 'Part 5: Fog at First Light',
        '6': 'Part 6: Beacon'
    }.get(x, 'Part')  

def get_events():
    with open('result.json', 'r') as res:
        results = json.load(res)
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
                for r in results:
                    if r['paste_key'] == e:
                        event_titles.append(r['title'].replace('/', '_').replace(' ', '_').replace('#','No.') + '.md')

        return event_titles

def get_episodes():
    with open('result.json', 'r') as res:
        results = json.load(res) 
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
                for r in results:
                    if r['paste_key'] == e:
                        episode_titles.append(r['title'].replace('/', '_').replace(' ', '_').replace('#','No.') + '.md')

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
        # elif any(name in md for name in character_names):
            # episodes.append(md)
        else:
            others.append(md)

    for name in character_names:
        episodes.append(name + '_Episodes')

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
    # episodes_in_paste = get_episodes()
    # all_episodes = episodes_in_paste + list(set(episodes) - set(episodes_in_paste))
    # for i in range(len(episodes)):
    #     if episodes[i] == 'Christmas_Mihono.md':
    #         episodes.insert(i+1, 'Joint_Raid_Event_No.13:_Another_Mihono.md')
    #         break

    for ep in episodes:
        fn = ep.replace('.md', '')
        title = fn.replace('_', ' ').replace('~', '\~').replace('Adblocker detected! Please consider disabling it...', '')
        toc += f'> [{title}](/docs/{fn.replace("Adblocker_detected!_Please_consider_disabling_it...", "")})\n'

    toc += '\n> :Collapse label=Events\n> \n'
    events = get_events()
    for o in events:
        fn = o.replace('.md', '')
        title = fn.replace('_', ' ').replace('~', '\~').replace('Adblocker detected! Please consider disabling it...', '')
        toc += f'> [{title}](/docs/{fn.replace("Adblocker_detected!_Please_consider_disabling_it...", "")})\n'

    # * Not needed. Probably.
    # toc += '\n> :Collapse label=Unsorted\n> \n'
    # all_others = list(set(others) - set(all_episodes + events))
    # for o in all_others:
    #     fn = o.replace('.md', '')
    #     title = fn.replace('_', ' ').replace('~', '\~')
    #     toc += f'> [{title}](/docs/{fn})\n'

    toc += '\n[Other Translations](/other)\n'

    with open('./docs/md/_toc.md', 'w') as toc_file:
        toc_file.write(toc)


def generate_file(title, data):
    if '2 - The Darkness Looming over the World' in title or 'Time Limit' in title:
        title = '2-' + title.replace(' - ', ' ')

    mdFile = MdUtils(file_name='./docs/md/docs/next/' + 
                                title.replace('/', '_').replace(' ', '_').replace('#','No.').replace('?', '_').replace(
                                'Adblocker detected! Please consider disabling it...', ''
                                ).replace('Adblocker_detected!_Please_consider_disabling_it...', '')
                                 + '.md', title=title.replace('~', '\~').replace(
                                'Adblocker detected! Please consider disabling it...', ''))
    
    for line in data.splitlines():
        if 'https://' not in line:
            if len(line) > 5 and line[-2:] == '?　': 
                line = line.replace('?　', "?")
            if len(line) > 5 and line[-2:] == '!　': 
                line = line.replace('!　', "!")
            line = re.sub(r"([~\!\)\.\]])", r"\\\1", line)
            line = line.replace('***', '\*\*\*')

        if line and (('[' == line[0] and ('Q' != line[1] and not line[2].isnumeric() and '[R]' not in line and (']:' in line or (']' in line and ':' in line)))) or ((line[0].isnumeric() or line[1].isnumeric())and (':' in line or '-' in line))):
            mdFile.write(Header.atx_level_2(line))
        elif ':' in line and 'http' not in line:
            pos = line.find(':')
            if pos <= 110 and len(line) >= pos+2 and not line[pos+1].isnumeric():
                bold_name = TextUtils.bold(line[0:pos+1])
                mdFile.write(bold_name + line[pos+1:])
                mdFile.new_line()
            else:
                mdFile.write(line)
                mdFile.new_line()
        elif 'https://www.youtube' in line or 'https://youtu.be/' in line:
            if 'youtube' in line:
                id = line.replace('https://www.youtube.com/watch?v=', '')
            else:
                id = line.replace('https://youtu.be/', '')
            mdFile.write(f'<div class="videoWrapper"><iframe width="640" height="480" loading="lazy" src="https://www.youtube.com/embed/{id}"></iframe></div>')
            mdFile.new_line()
        elif line:
            mdFile.write(line + "\n\n")
            mdFile.new_line()
        else:
            mdFile.write(line)
    
    # mdFile.write('> :ToCPrevNext')
    mdFile.create_md_file()
    
if __name__ == '__main__':

    with open('result.json', 'r') as res:
        results = json.load(res)
        for r in results:
            generate_file(r['title'], r['data'])

    generate_toc()

