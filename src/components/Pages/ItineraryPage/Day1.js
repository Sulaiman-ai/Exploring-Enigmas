import Banner from './Banner';
import DayButton from './DayButton';
import { useState } from 'react';
import useLocalStorage from './LocalStorageHook';
import TimeSlot from './ItinerarySlot';

function Day1(props) {
    // const [key, setKey] = useState('000');
    // const [text, setText] = useLocalStorage(key, 'Lunch');

    // const handleChange = (event) =>{
    //     setText(event.target.value);
    // }

    // const handleKeyChange = (event) => {
    //     setKey(event.target.key)
    // }

    return (
        <div>
            <Banner />
            <DayButton />
            <h2 className="day-heading"> Day One </h2>
            {new Array(24).fill('').map((e,i)=>{
                console.log(`${i}:00`);
                // setKey(`${i}:00`)

                return <TimeSlot index={`${i}:00`}/>

                // return <div key={`row-${i}:00`} className="planner-row">
                //     <div className="time">{`${i}:00`}</div>
                //     <textarea key={`${i}:00`} className="text-box"></textarea>
                //     <button className="save-btn">Save</button>
                // </div>
})}
            {/* <div className="planner-row">
                <div className="time">00:00</div>
                <textarea className="text-box" value={text} onChange={handleChange}></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">01:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">02:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">03:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">04:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">05:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">06:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">07:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">08:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">09:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">10:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">11:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">12:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">13:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">14:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">15:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">16:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">17:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">18:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">19:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">20:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">21:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">22:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div>
            <div className="planner-row">
                <div className="time">23:00</div>
                <textarea className="text-box"></textarea>
                <button className="save-btn">Save</button>
            </div> */}

        </div>

    )
}

export default Day1;