import {Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Itinerary from './components/Pages/ItineraryPage/Itinerary';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </>
  );
}

export default App;