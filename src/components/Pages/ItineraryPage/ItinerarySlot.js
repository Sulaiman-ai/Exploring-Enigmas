import { useState } from "react";
import useLocalStorage from "./LocalStorageHook";

function TimeSlot({index:key}){
    // console.log('key',key)
    const [storage, setStorage] = useLocalStorage(key, '');
    const [text, setText] = useState(storage);

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    const saveChange = (event) => {
        setStorage(text);
    }

    return (
        <div key={`row-${key}`} className="planner-row">
            <div className="time">{`${key}`}</div>
            <textarea key={`${key}`} value={text} className="text-box" onChange={handleChange}></textarea>
            <button className="save-btn" onClick={saveChange}>Save</button>
        </div>
)}

export default TimeSlot;