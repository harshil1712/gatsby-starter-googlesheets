import React from "react"

const Card = (props) =>(
    <div
        style={{
            border:'1px solid #eaeaea',
            boxShadow:'2px 2px 5px grey',
            padding:'10px',
            marginBottom:'10px',
            borderRadius:'10px'
        }}
    >
        <h1>{props.title}</h1>
        <p style={{color:'grey'}}>{props.date}</p>
        <p>{props.content}</p>
    </div>
)

export default Card
