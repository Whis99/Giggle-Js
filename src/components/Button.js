import React from "react";
import '../Button.css'
 
const Button = (props) => {
    return <button onClick={props.callApi}>
        {/* Tell me a joke. */}
        {props.btnLabel}
    </button>;
}
 
// Export Button
export default Button;