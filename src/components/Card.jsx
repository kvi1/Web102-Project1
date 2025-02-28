import React from 'react'
import './component.css'


const Card = (props) => {
    return(
        <div className = "card">
            <img src = {props.image}/>
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <a href = {props.link} target = "_blank" >
            <button>View Location</button>
            </a>
            
        </div>

    )
}
export default Card;
