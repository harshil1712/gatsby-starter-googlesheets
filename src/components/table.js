import React from "react"

const Table = (props) =>(
            <tr>
                <th>{props.no}</th>
                <th>{props.name}</th>
                <th>{props.house}</th>
            </tr>
)

export default Table