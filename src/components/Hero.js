import SearchBar from './searchBar';

function Hero() {
    return(
        <header>
            <section className="hero-banner">
                <h1 className="hero-h1">Build a bespoke travel itinerary for your next trip now</h1>
                <h2 className="hero-h2">Build and plan your itineraries in our free travel app designed for holidays and road trips</h2>
                <SearchBar />
            </section>
        </header>
    )
}

export default Hero;