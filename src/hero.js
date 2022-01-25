import React from "react";
import logo2 from './images/group-77.png';

export default function Hero() {
    return (
        <div id="hero">
            <img id="hero-img" src={logo2} />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}