import React from "react";
import headimage from "./name.jpg";
import "./Header.css";

const Header=(props)=>{
    return(
        <div className="head-container">
            <img src={headimage} className={`head-image ${props.headerChange ? 'head-image-expanded' : 'head-image-contracted'}`} alt="headimage"/>
            <h1 className={`head-text ${props.headerChange ? 'head-text-expanded' : 'head-text-contracted'}`}>{props.headtitle}</h1>
        </div>
    )
}

export default Header;