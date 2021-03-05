import React, { useState, useEffect } from 'react'
import { Time } from './Time'


const bruh = new Audio('https://orangefreesounds.com/wp-content/uploads/2018/02/Bruh-sound-effect.mp3?_=1')

const TimerStyles = {
  display: 'column' as 'column',
}

interface Props {
  quickTime: number
}

const Timer = (props: Props) => {
  let resetMinutes: number = props.quickTime || 10
  let resetSeconds: number = 0
  const [minutes, setMinutes] = useState(resetMinutes)
  const [seconds, setSeconds] = useState(resetSeconds)
  const [counting, setCounting] = useState(false)

  console.log(props.quickTime);

  useEffect(() => {
    setMinutes(resetMinutes)
  }, [resetMinutes])
  

  const incrementMinutes = () => {
    setMinutes(minutes + 1)
    
    
  }

  const decrementMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1)
    }
  }

  const incrementSeconds = () => {
    setSeconds(seconds + 5)
    if (seconds === 55) {
      setSeconds(0)
    }
  }

  const decrementSeconds = () => {
    if (seconds > 0) {
      setSeconds(seconds - 5)
    } else {
      setSeconds(55)
    }
  }

  const startTimer = () => {
    setCounting(!counting)
  }

  const resetTimer = () => {
    setCounting(false)
    setTimeout(() => {
      console.log('resetTimer')
      setSeconds(resetSeconds)
      setMinutes(resetMinutes)
    }, 0)
  }

  useEffect(() => {
    console.log('change effect')

    if (counting) {
      let countS = seconds
      let countM = minutes
      const interval = setInterval(() => {
        console.log(countS)
        console.log(countM)

        if (countM === 0 && countS === 1) {
          clearInterval(interval)
          bruh.play()
        }
        if (countS === 0) {
          countS = 59
          countM--

          setSeconds(countS)
          setMinutes(countM)
        } else {
          countS--
          setSeconds(countS)
        }
      }, 1000)

      return () => {
        clearInterval(interval)
        setSeconds(countS)
        setMinutes(countM)
      }
    }
  }, [counting])

  const playPauseButton = counting ? 'pause' : 'play'

  return (
    <div style={TimerStyles}>
      <div className="timer__increment flex-center">
        <button className="button timer__buttons" onClick={incrementMinutes}>+</button>
        <button className="button timer__buttons" onClick={incrementSeconds}>+</button>
      </div>
      <Time minutes={minutes} seconds={seconds} />
      <div className="timer__decrement flex-center">
        <button className="button timer__buttons" onClick={decrementMinutes}>-</button>
        <button className="button timer__buttons" onClick={decrementSeconds}>-</button>
      </div>
      <div className="timer__options flex-center">
        <button className="button option__buttons" onClick={startTimer}>{playPauseButton}</button>
        <button className="button option__buttons" onClick={resetTimer}>reset</button>
      </div>

    </div>
  )
}

export default Timer
