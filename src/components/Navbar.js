import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <a className="nav-logo">Exploring Enigmas</a>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/itinerary">Itinerary</Link>
            </nav>
        </div>
    )
}

export default Navbar;