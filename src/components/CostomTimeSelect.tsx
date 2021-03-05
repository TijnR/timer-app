import React from 'react'

const CostomTimeSelectStyles = {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: 'center',
    padding: '20px 30px',
}

interface Props {
    
}

export const CostomTimeSelect = (props: Props) => {
    return (
        <div style={CostomTimeSelectStyles}>
            <h2 style={{fontSize: '40px'}} className="title__styles">Costom Time Select</h2>

            <h4>|| In progress ||</h4>
        </div>
    )
}
