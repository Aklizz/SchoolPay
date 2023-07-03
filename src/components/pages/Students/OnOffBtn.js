import React, { useState } from "react";
import {BsToggleOn, BsToggleOff} from 'react-icons/bs';
const OnOffBtn = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick =() => {
        setIsOn(!isOn);
    };
    return(
        <button onClick={handleClick} style={{border: "none", fontSize: "1.5em", background:"none", margin:"0px"}}>
            <div>{ isOn ? <BsToggleOn/> : <BsToggleOff/>}</div>
        </button>
    )
}
export default OnOffBtn;