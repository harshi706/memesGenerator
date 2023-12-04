import React from  "react"
export default function Card(props){
    return(
        <div class="cards">
        <img src={props.image}></img>
        <h3>{props.title}</h3>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
        <h3>{props.location}</h3>
        </div>
    )
}