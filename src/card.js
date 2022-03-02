import React from "react";
import imgstar from './images/star1.png';
import data from "./data";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="img"/>
            <div className="card-stats">
                <img src={imgstar} className="img-star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.review}) • </span>
                <span className="gray">{props.location}</span>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
            {
                
            }
        </div>
    )
}