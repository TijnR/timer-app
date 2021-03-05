import React from 'react'
import Title from './Title'
import Timer from './Timer'

const TimerContainerStyles = {
  display: 'flex',
  flexDirection: 'column' as 'column',
}

interface Props {
  quickTime: number
}

function TimerContainer(props: Props) {
  return (
    <div style={TimerContainerStyles}>
      <Title />
      <Timer quickTime={props.quickTime}/>
    </div>
  )
}

export default TimerContainer
