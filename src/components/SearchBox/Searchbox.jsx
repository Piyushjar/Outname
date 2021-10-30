import React from "react";
import './Searchbox.css';

const SearchBox=(props)=>{
    return(
        <div className="search-container">
        <input onChange={(event)=>props.onInputChange(event.target.value)} className="search-input" placeholder="Search Here"></input>
        </div>
    )
}

export default SearchBox;