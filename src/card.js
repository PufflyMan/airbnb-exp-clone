import React from "react";
import img from './images/image12.png';
import imgstar from './images/star1.png';

export default function Card(props) {
    return (
        <div className="card">
            <img src={img} className="img"/>
            <div className="card-stats">
                <img src={imgstar} className="img-star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
            
        </div>
    )
}