import React from 'react'

const TimeStyles = {
  fontSize: '80px',
  fontFamily: 'retroWave',
  margin: '20px 0'

}

interface Props {
  minutes: number
  seconds: number
}

export const Time = ({ minutes, seconds }: Props) => {
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes
  return (
    <h1 style={TimeStyles}>
      <pre>
        {displayMinutes} : {displaySeconds}
      </pre>
    </h1>
  )
}
