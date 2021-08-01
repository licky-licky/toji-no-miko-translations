import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../pages/events/index.module.css'

export default function Event({ events, newestFirst = true , type}) {
	const cardStyle = styles.card2 + type == "episodes" ? ' ' + styles.card3 : ''
	// TODO: refactor code duplication
	const typeSwitch = (type, imageFileName) => {
		switch (type) {
			case "events":
				return `/img/events/${imageFileName}.png`
			case "episodes":
				return `/img/episodes/${imageFileName}.png`
			default:
				break
		}
	}
	const orderedEvents = newestFirst ? events : events.slice().reverse()
	let keyValue
	if (typeof events === 'undefined')
		keyValue = events[0][0]
	else
		keyValue = newestFirst
	return (
		<div className={styles.grid} key={keyValue}>
			{orderedEvents.map(c => (
				<a href={type == "episodes" ? useBaseUrl(`/docs/episodes/${c[0]}`) : useBaseUrl(`/docs/${c[0]}`)} 
				className={`${styles.card2} ${type == "episodes" ? styles.card3 : ''}`} key={c[2]}>
					<img
						src={useBaseUrl(typeSwitch(type ?? 'events', c[1]))}
						alt={c[2] ? c[2] : c[3]}
						loading="lazy"
					/>
					<h3>{c[3]}</h3>
				</a>
			))}
		</div>
	)
}

