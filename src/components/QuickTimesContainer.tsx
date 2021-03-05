import React from 'react'

const QuickTimesContainerStyles = {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: 'center',
    padding: '20px 30px',
    
}

const ButtonStyle = {
    margin: "10px 0"
}

const times = [5, 10, 15, 20, 25, 30, 45]

interface Props {
    getQuickTime: any
}

export const QuickTimesContainer = (props: Props) => {
    console.log(props)

    const buttons = times.map(time => <button style={ButtonStyle} className='button top-left-radius' onClick={() => props.getQuickTime(time)}><span>{time}:00</span></button>)
    return (
        <div style={QuickTimesContainerStyles}>
            <h2 style={{marginBottom: '30px', fontSize: '40px'}} className="title__styles">Quick Time Select</h2>
            {buttons}
        </div>
    )
}
