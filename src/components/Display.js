import React from "react";
import '../Button.css'
 
const Display = (props) => {
    return <div>
        <p>{props.joke}</p>
    </div>;
}
 
// Display jokes
export default Display;