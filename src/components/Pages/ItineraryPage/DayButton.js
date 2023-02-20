import {Link} from 'react-router-dom';

function showComponent() {

}

function buttonClicked(e){
        if (e.target.innerText === "Day 1") {
            showComponent();
        } else {
            console.log('other button clicked')
        }
}

function DayButton() {

    return (
        <>
            <div  className="day-btns">
                <Link to="/day-one" className="day-btn">Day 1</Link>
                <Link to="/day-two" className="day-btn">Day 2</Link>
                <Link to="/day-three" className="day-btn">Day 3</Link>
                <Link to="/day-four" className="day-btn">Day 4</Link>
                <Link to="/day-five" className="day-btn">Day 5</Link>
                <Link to="/day-six" className="day-btn">Day 6</Link>
                <Link to="/day-seven" className="day-btn">Day 7</Link>
            </div>   
        </>
           
    )
}

export default DayButton;