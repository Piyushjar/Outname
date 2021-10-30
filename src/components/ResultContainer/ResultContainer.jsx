import React from "react";
import NameCard from "../NameCard/NameCard";
import './ResultContainer.css';

const ResultContainer=({suggestedNames})=>{

    const suggestions = suggestedNames.map((suggestedNames)=>{
        return(
            <NameCard key={suggestedNames} suggestedNames={suggestedNames}/>
        )
    })

    return(
        <div className="result-container">
            {suggestions}
        </div>
    )
}
export default ResultContainer;