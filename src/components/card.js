import React from "react"

const Card = (props) =>(
    <div>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
        <p>{props.content}</p>
    </div>
)

export default Card
