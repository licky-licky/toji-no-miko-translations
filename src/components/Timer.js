import React, { useEffect, useState } from "react";

export const isOver = () => new Date('2021-10-29T12:00:00+09:00') - new Date().getTime() <= 0

export default function Timer() {
  const calculateTimeLeft = () => {
    const difference = new Date('2021-10-29T12:00:00+09:00') - new Date().getTime()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const timerComponests = []

  for (const interval of Object.keys(timeLeft)) {
    timerComponests.push(
      <span>{timeLeft[interval]} {interval}{" "}</span>
    )
  }

  return (
    <>{timerComponests.length ? timerComponests : <span>It's over!</span>}</>
  )
}
