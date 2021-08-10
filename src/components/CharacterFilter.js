import React, { useState, useRef, useEffect } from 'react'
import styles from './CharacterFilter.module.scss'
import onClickOutside from "react-onclickoutside";
import useBaseUrl from '@docusaurus/useBaseUrl'
import { getFromSessionStorage, saveToSessionStorage } from '../utils';

function CharacterFilter({chars, setFilteredChars}) {
    const numOfChars = Object.keys(chars).length
    const [selected, setSelected] = useState(new Array(numOfChars).fill(false))
    const [show, setShow] = useState(false)
    let characters = []
    let values = []

    for (const [key, value] of Object.entries(chars)) {
        characters.push(key)
        values.push(value)
    }

    useEffect(() => {
        const savedCharacters = getFromSessionStorage('chars')        
        if (savedCharacters) {
            setSelected(savedCharacters)
            let filteredCharacters = []
            savedCharacters.forEach((val, idx) => {
                if (val) filteredCharacters.push(characters[idx])
            })
            setFilteredChars(filteredCharacters)
        }
    }, [])

    const showCharFilter = () => setShow(!show)

    const clearAllSelection = () => {
        setSelected(new Array(numOfChars).fill(false))
        setFilteredChars([])
        sessionStorage.removeItem('chars')
    }

    const handleOnChange = (position) => {
        let filteredCharacters = []
        const updatedSelectedState = selected.map((item, index) => {
            return index === position ? !item : item
        })
        setSelected(updatedSelectedState)
        updatedSelectedState.forEach((val, idx) => {
            if (val) filteredCharacters.push(characters[idx])
        })
        setFilteredChars(filteredCharacters)
        saveToSessionStorage('chars', updatedSelectedState)
    }
    CharacterFilter.handleClickOutside = () => setShow(false)
    return (
        <div className={styles.charSelector}>
            <button onClick={showCharFilter} className={styles.charShow}><span>Select Characters</span><span><img src={useBaseUrl(show ? '/img/expand_less_black_24dp.svg' : '/img/expand_more_black_24dp.svg')}/></span></button>
            {show && (<div className={styles.container}>
                <div className={styles.input}>
                    <div className={styles.buttonContainer}>
                        <button onClick={clearAllSelection}>Clear All</button>
                        <button onClick={showCharFilter}>Close</button>
                    </div>
                    <div className={styles.checkboxContainer}>
                        {characters.map((ch, idx) => {
                            return (<div key={idx}>
                                <input type="checkbox" id={`checkbox-${idx}`} name={ch} value={ch || ''} checked={selected[idx]} onChange={() => handleOnChange(idx)} />
                                <label htmlFor={`checkbox-${idx}`}>{ch}</label>
                                <span>{values[idx]}</span>
                            </div>)
                        })}
                    </div>
                </div> </div>)
            }
        </div>
    )

}

const clickOutsideConfig = {
    handleClickOutside: () => CharacterFilter.handleClickOutside
};

export default onClickOutside(CharacterFilter, clickOutsideConfig)