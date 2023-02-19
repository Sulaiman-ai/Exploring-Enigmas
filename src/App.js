import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer';
import Itinerary from './components/Pages/ItineraryPage/Itinerary';
import MapSearch from './components/searchMaps';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/maps" element={<MapSearch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;