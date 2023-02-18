import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer';
import Itinerary from './components/Pages/ItineraryPage/Itinerary';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;