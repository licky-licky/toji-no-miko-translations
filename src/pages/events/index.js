import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Event from '../../components/Event';
import styles from './index.module.css';

const years = [2021, 2020, 2019, 2018]
const events = [
    ["Tojitomo_General_Election_-Pledge_Story-_Their_Choice", "choice", "choice", "Tojitomo General Election -Pledge Story- Their Choice", 2021],
    ["Let's_Vacation_A_Tropical_Resort_Festival", 'vacation', 'vacation 2021', "Let's Go On a Vacation! Nankoku Resort Festival!", 2021],
    ["Tojitomo_Police_Duty", 'police', 'police', 'Heart-Pounding and Exciting!? TojiTomo Police Mission', 2021],
    ["Yume's_Homecoming", 'yume_home', 'YH', "Yume's Homecoming", 2021],
    ['Star_Ocean_-Encounter_With_the_Toji-', 'encounter', 'ENC', 'Encounter with the Toji', 2021],
    [
        "Happy_New_Year_The_Tojis'_New_Year's_and_Prayers_[mystery]",
        'newyear2021',
        'nyc2021-1',
        "Happy New Year! The Tojis' New Year's and Prayers [mystery]",
        2021
    ],
    [
        "Happy_New_Year_The_Tojis'_New_Year's_and_Prayers_[past]",
        'newyear2021',
        'nyc2021-2',
        "Happy New Year! The Tojis' New Year's and Prayers [past]",
        2021
    ],
    [
        'Security_Police_Mission_on_a_Holy_Night:_-Guard_the_Party_Venue-',
        'xmas2020',
        'xmas2020',
        'Security Police Mission on a Holy Night: -Guard the Party Venue-',
        2020
    ],
    ['Nanoha_DOPPELGANGER', 'nanoha', 'manoha', 'Nanoha DOPPELGANGER', 2020],
    [
        'Treasure_Hunt_A_Gift_From_the_Pirates',
        'pirate',
        'pirate',
        'Treasure Hunt: A Gift From the Pirates',
        2020
    ],
    ['Summer_Memories', 'memories', 'memories', 'Summer Memories', 2020],
    [
        'Mystery_TRPG_The_Steam_Shrouded_Murder_Case',
        'trpg',
        'trpg',
        'Mystery TRPG: The Steam Shrouded Murder Case',
        2020
    ],
    [
        'Entwining_Bonds:_Honest_Heart_x_Acrobatics', 'bonds2' , 'Entwining Bonds 2', 'Entwining Bonds: Honest Heart x Acrobatics', 2020
    ],
    [
        'Escape_From_the_Locker_Room', 'locker', 'locker room', 'Escape From the Locker Room', 2020
    ],
    [
        'Miss_Five_Traditions_Charity_Mission', 'charity', 'charity mission', 'Miss Five Traditions Charity Mission', 2020
    ],
    [
        'Mahouka:_Dream_Visitors', 'mahouka', 'mahouka', 'Mahouka: Dream Visitors', 2020
    ],
    ['North_and_South_Swordsman_Record', 'north_south', 'north and south swordsman', 'North and South Swordsman Record', 2020],
    ['Yakisoba_Journey_to_the_West', 'tothewest', 'Yakisoba Journey to the West', 'Yakisoba Journey to the West', 2020],
    ['Human_Egg', 'egg', 'what\'s a human egg anyway?', 'Enjoy the Easter Game! Human Egg', 2020],
    ["Aradama_on_the_Counterattack", "aradama", "Aradama on the Counterattack", "Aradama on the Counterattack", 2020],
    ["Entwining_Bonds:_Fierce_Genius_x_Strange_Genius", "bonds1", "Entwining Bonds 1", "Entwining Bonds: Fierce Genius x Strange Genius", 2020],
    ["Miss_Five_Traditions_Contest", "contest", "Miss Five Traditions Contest", "Miss Five Traditions Contest", 2020],
    ["Rumored_Urban_Legend_Watching", "urban", "urban legends", "Rumored Urban Legend Watching", 2020],
    ["A_Certain_Superpowered_Parallel_World", "railgun", "railgun event", "A Certain Superpowered Parallel World", 2020],
    ["Toji_no_Miko_Idol_Project", "idol", "idols", "Toji no Miko Idol Project", 2020],
    ["Chain_Story_Archives_Part_0.5.1", "chain", "chain", "Chain Story Archives Part 0.5.1", 2020],
    ["Coming_Year,_Going_Year:_A_Trip_for_Two", "newyear2020", "newyear2020", "Coming Year, Going Year: A Trip for Two", 2020],
    ["Yume's_Great_Xmas_Operation_-_Christmas_Eve_Surprise_Party", "xmas2019", "xmas2019", "Yume's Great Xmas Operation - Christmas Eve Surprise Party", 2019],
    ["Debug_Mission_Capriccio", "debug", "debug", "Debug Mission Capriccio", 2019],
    ["One_Strange_Night's_Monster_Parade", "halloween2019", "halloween2019", "One Strange Night's Monster Parade", 2019],
    ["UDON_Chapter", "udon", "udon", "Yuuki Yuuna wa Yuusha de Aru -Udon Chapter-", 2019],
    ["Okatana_with_Flowers_Shining_in_Full_Bloom_Chapter", "mankai", "mankai", "Yuuki Yuuna wa Yuusha de Aru -Okatana_with_Flowers_Shining_in_Full_Bloom_Chapter-", 2019],
    ["Full_Summer_Beach_Lounge_Rescue_Team", "rescue", "rescue", "Full Summer Beach Lounge Rescue Team!", 2019],
    ["Smash_Through_Sports_Chanbara_Joint_Training", "chanbara", "chanbara", "Smash Through! Sports Chanbara Joint Training", 2019],
    ["On_a_Nice_Cool_Evening_Yukata_at_the_Summer_Festival", "yukata", "yukata", "On a Nice Cool Evening! Yukata at the Summer Festival", 2019],
    ["Mad_Tea_Party", "tea", "tea", "Mad Tea Party", 2019],
    ["Escape_from_Wonderland", "wonderland", "wonderland", "Escape from Wonderland", 2019],
    ["There's_an_Anomaly_in_the_Seasonal_Rain_Front", "rain", "rain", "There's an Anomaly in the Seasonal Rain Front!", 2019],
    ["Eternal_Vacation", "eternal", "eternal", "Eternal Vacation", 2019],
    ["The_Case_of_the_Disappearing_Wedding_Rings", "ring", "ring", "The Case of the Disappearing Wedding Rings", 2019],
    ["Let's_All_BBQ_in_the_Great_Outdoors", "bbq", "bbq", "Let's All BBQ in the Great Outdoors!", 2019],
    ["Revue_The_Mystery_of_the_Reappearing_Aradama", "revue2", "revue2", "Revue: The Mystery of the Reappearing Aradama", 2019],
    ["Revue_Stage_Girls_and_Toji_no_Miko", "revue1", "revue1", "Revue: Stage Girls and Toji no Miko", 2019],
    ["Chinese_Pandas_Bringing_Good_Fortune", "panda", "panda", "Chinese Pandas Bringing Good Fortune", 2019],
    ["Out_of_Season_Cherry_Blossom_Front", "blossom", "blossom", "Out of Season Cherry Blossom Front", 2019],
    ["Toji_Notes:_-The_Heroes_of_Twenty_Years_Ago-", "notes", "notes", "Toji Notes: -The Heroes of Twenty Years Ago-", 2019],
    ["Toji_Edo_Detective_Story", "edo", "edo", "Toji Edo Detective Story", 2019],
    ["Crystal_Recovery_Afterparty_in_an_Uproar", "crystal", "crystal", "Crystal Recovery! Afterparty in an Uproar!", 2019],
    ["Battle_Girls_Party_Toji_Raffle_Festival", "raffle", "raffle", "Battle Girls Party! Toji Raffle Festival", 2019],
    ["Take_Back_Everyone's_Feelings_Chocolate_Recovery_Mission", "chocolate", "chocolate", "Take Back Everyone's Feelings! Chocolate Recovery Mission", 2019],
    ["Sweet_Valentines_Chocolate_Panic", "valentine", "valentine", "Sweet Valentines Chocolate Panic!", 2019],
    ["Heart_Pounding_Mission_in_a_Steamy_Hot_Spring", "hotspring", "hotspring", "Heart Pounding Mission in a Steamy Hot Spring", 2019],
    ["A_Giant_Yeti_Encounter_in_a_Snowy_Mountain_Forest", "yeti", "yeti", "A Giant Yeti Encounter in a Snowy Mountain Forest!", 2019],
    ["For_Better_Fortune_The_Fortune_Slip_Recovery_Operation", "fortune", "fortune", "For Better Fortune! The Fortune Slip Recovery Operation", 2019],
    ["Pair_vs_Pair_The_New_Year's_Karuta_Competition", "pair", "pair", "Pair vs Pair! The New Year's Karuta Competition", 2019],
    ["Hit_or_Stand__Toji_Style_Game_Training", "game", "game", "Hit or Stand? Toji Style Game Training", 2018],
    ["Take_Back_a_Twinkling_Christmas_Eve", "xmas2018-2", "xmas2018-2", "Take Back a Twinkling Christmas Eve!", 2018],
    ["A_Big_Brawl_The_Christmas_Royale", "xmas2018-1", "xmas2018-1", "A Big Brawl! The Christmas Royale", 2018],
    ["Grand_Opening_The_Five_Traditions_Unified_School_Festival", "festival", "festival", "Grand Opening! The Five Traditions Unified School Festival", 2018],
    ["Fall's_Main_Event_Great_Leaf_Viewing_Operation", "leaf", "leaf", "Fall's Main Event! Great Leaf Viewing Operation", 2018],
    ["Complete_Your_Day_Off_Mission", "dayoff", "dayoff", "Complete Your Day Off Mission!", 2018],
    ["Spending_Time_at_the_Amusement_Park,_the_Toji_Way", "amusement", "amusement", "Spending Time at the Amusement Park, the Toji Way", 2018],
    ["Great_Halloween_Surprise_Operation", "halloween2018op", "halloween2018op", "Great Halloween Surprise Operation", 2018],
    ["Welcome_to_the_Halloween_Party", "halloween2018", "halloween2018", "Welcome to the Halloween Party!", 2018],
    ["Assemble_Toji_Cheer_Squad", "cheer", "cheer", "Assemble! Toji Cheer Squad", 2018],
    ["Toji_and_the_Dungeon", "danmachi", "danmachi", "Toji and the Dungeon", 2018],
    ["Steady_as_She_Goes_Maritime_Special_Task_Team", "shipgirls", "shipgirls", "Steady as She Goes! Maritime Special Task Team!", 2018],
    ["Toji_Summer_Vacation_-Fierce_Battle_Arc-", "fierce", "fierce", "Toji Summer Vacation -Fierce Battle Arc-", 2018],
    ["Toji_Summer_Vacation_-Hard_Struggle_Arc-", "struggle", "struggle", "Toji Summer Vacation -Hard Struggle Arc-", 2018],
    ["Yuuki_Yuuna_is_a_Hero_~Toji_and_Hero_Chapter~", "toji_and_hero", "toji_and_hero", "Yuuki Yuuna wa Yuusha de Aru ~Toji and Hero Chapter~", 2018],
    ["Battle_for_the_First_in_the_Pool", "pool", "pool", "Battle for the First in the Pool!", 2018],
    ["June_Bride_Symphony", "bride2018", "bride2018", "June Bride Symphony", 2018],
    ["Ninja_War_Under_the_Moonlight", "ninja", "ninja", "Ninja War Under the Moonlight", 2018],
    ["Elite_Guard_Memoirs:_Cherry_Blossom_Arc", "eliteguard2", "eliteguard2", "Elite Guard Memoirs: Cherry Blossom Arc", 2018],
    ["Spring_in_Full_Bloom_Combined_Off-Campus_Learning", "spring", "spring", "Spring in Full Bloom! Combined Off-Campus Learning", 2018],
    ["Elite_Guard_Memoirs:_Hakone_Arc", "eliteguard1", "eliteguard1", "Elite Guard Memoirs: Hakone Arc", 2018],
    ["Team_vs_Team_in_the_White_Day_Wars", "white_day", "white_day", "Team vs Team in the White Day Wars", 2018],
]

function Events() {
    const [orderNewestFirst, setOrderNewestFirst] = useState(true)
    const [filteredEvents, setFilteredEvents] = useState(events)
    const [currentYears, setCurrentYears] = useState([...years])
    const orderedYears = orderNewestFirst ? years : years.slice().reverse()
    const showNewer = () => {
        setOrderNewestFirst(true)
    }
    const showOlder = () => {
        setOrderNewestFirst(false)
    }
    const filterYears = () => {
        let filteredYears = []
        filteredEvents.forEach(event => {
            if (!filteredYears.includes(event[4])) {
                filteredYears.push(event[4])
            }
        });
        console.log(filteredEvents);
        return orderNewestFirst ? filteredYears : filteredYears.slice().reverse()
    }    
    const filterEvents = (filterData) => setFilteredEvents(events.filter(event => {
        console.log(filterYears());
        if (filterData === '' || typeof filterData === 'undefined' || filterData === null)
            return event
        else if (event[3].toLowerCase().includes(filterData.toLowerCase()))
            return event
    }))
    return (
        <Layout
            title={'Events'}>
            <main className={styles.main}>
				<h1 className={styles.title}>Events</h1>
                <div className={styles.filterBar}>
                    <div className={"barContainer"}>
                        <input type="text" id="filter" className={styles.searchBar} placeholder="Filter events" onChange={event => {filterEvents(event.target.value)}}></input>
                    </div>
                    <div className={styles.dropdown}>
                        <ul>
                            <li><button className={orderNewestFirst ? styles.selectedButton : ''} onClick={showNewer}>Newest first</button></li>
                            <li><button className={!orderNewestFirst ? styles.selectedButton : ''} onClick={showOlder}>Oldest first</button></li>
                        </ul> 
                    </div>
                </div>
                {filterYears().map(year => {
                    const yearEvents = filteredEvents.filter(event => event[4] === year)
                    return (
                        <>
                        <h2>{year}</h2>
                        <Event events={yearEvents} newestFirst={orderNewestFirst}/>
                        </>
                    )
                })}
			</main>
        </Layout>
    )
}

export default Events;