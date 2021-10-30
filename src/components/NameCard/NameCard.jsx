import React from "react";
import './NameCard.css';


const NameCard=({suggestedNames})=>{
    return(
        
    <div className="result-name-card">
        <p className="result-name">{suggestedNames}</p>
    </div>      
    )
}

export default NameCard;