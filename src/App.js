import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer';
import Day1 from './components/Pages/ItineraryPage/Day1';
import Day2 from './components/Pages/ItineraryPage/Day2';
import Day3 from './components/Pages/ItineraryPage/Day3';
import Day4 from './components/Pages/ItineraryPage/Day4';
import Day5 from './components/Pages/ItineraryPage/Day5';
import Day6 from './components/Pages/ItineraryPage/Day6';
import Day7 from './components/Pages/ItineraryPage/Day7';

import Itinerary from './components/Pages/ItineraryPage/Itinerary';
import MapSearch from './components/searchMaps';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day-one" element={<Day1 />} />
        <Route path="/day-two" element={<Day2 />} />
        <Route path="/day-three" element={<Day3 />} />
        <Route path="/day-four" element={<Day4 />} />
        <Route path="/day-five" element={<Day5 />} />
        <Route path="/day-six" element={<Day6 />} />
        <Route path="/day-seven" element={<Day7 />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/maps" element={<MapSearch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;