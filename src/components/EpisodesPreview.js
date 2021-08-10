import React from 'react'
import Event from './Event'
import Link from '@docusaurus/Link';
import styles from './EpisodesPreview.module.css'

// TODO import the first n elements from the array in the events/episodes arrays
const events = [
    ["Tojitomo_General_Election_-Pledge_Story-_Their_Choice", "choice", "", "Tojitomo General Election -Pledge Story- Their Choice", 2021],
    ["Let's_Vacation_A_Tropical_Resort_Festival", 'vacation', 'vacation 2021', "Let's Vacation! A Tropical Resort Festival!", 2021],
    ["Tojitomo_Police_Duty", 'police', 'police', 'Tojitomo Police Duty', 2021],
]

const episodes = [
    ["Asakura_Mihono_Episodes", "thumb_mihono", "", "Asakura Mihono Episodes",],
    ["Setouchi_Chie_Episodes", "thumb_chie", "", "Setouchi Chie Episodes",],
    ["Shichinosato_Kofuki_Episodes", "thumb_kofuki", "", "Shichinosato Kofuki Episodes",],
    ["Musumi_Kiyoka_Episodes", "thumb_kiyoka", "", "Musumi Kiyoka Episodes",],
    ["Kitora_Mirja_Episodes", "thumb_miruya", "", "Kitora Mirja Episodes",],
    ["Yamashiro_Yui_Episodes", "thumb_yui", "", "Yamashiro Yui Episodes",],
]

export default function EpisodesPreview() {
    return (
        <>
        <div className="main">
        <h1 className={styles.title}>Episodes</h1>  
        <div className={styles.features}>
            <Event events={episodes} newestFirst={true} type={"episodes"}/>
        </div>
        <Link 
            className={"button button--secondary button--lg"}
            to="/episodes">More...
        </Link>
        </div>
        <div className="main">
        <h1 className={styles.title}>Events</h1>  
        <div className={styles.features}>   
         {/* <div className="container2"> */}
        {/* <div className="row"> */}
            <Event events={events} newestFirst={true} type={"events"}/></div>
            
        {/* </div> */}
        <Link 
            className={"button button--secondary button--lg"}
            to="/events">More...
        </Link>
        </div>
        </>
    )    
}