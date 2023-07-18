import React from "react";
import '../Button.css'
import '../App.css'
 
const Display = (props) => {
    return <div className="Joke-display">
        <p className="Joke-text">{props.joke}</p>
    </div>;
}
 
// Display jokes
export default Display;