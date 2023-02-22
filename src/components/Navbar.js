import {Link} from 'react-router-dom';
import logo from '../logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="nav-logo"/>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/day-one">Itinerary</Link>
                <Link to="/maps">Search Maps</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default Navbar;