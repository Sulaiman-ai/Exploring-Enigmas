// Imports
import React, { useState } from "react";
import MapsSearchBar from "./APISearch";
import axios from "axios";
import { search } from "../apis/search";
import MyMap from "./MapDisplay";

// Search Bar Function
function MapSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [result, setResult] = useState([]);
  const [mapCoordinates, setCoordinates] = useState({lat: 0, lon: 0});

  const handleSubmit = async (event) => {
    const [placesList, lat, lon] = await search(searchTerm, locationSearch);
    setResult(placesList);
    setCoordinates({
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    });
  };


  return (
    <div className="search-wrapper">
      <MapsSearchBar placeholder="Search" handleChange={e=>setSearchTerm(e.target.value)}/>
      <MapsSearchBar placeholder="Location" handleChange={e=>setLocationSearch(e.target.value)}/>
      <p>{searchTerm}</p>
      <p>{locationSearch}</p>
      <p>{mapCoordinates.lat}</p>
      <p>{mapCoordinates.lon}</p>
      <button onClick={handleSubmit}>Search</button>
      <div className="result-wrapper">
        {result.map((e, i)=>(
          <>
          <p key={i}>{e.display_name.split(',')[0]}</p>
          {/* <p key={i}>{e.address.split(',')[0]}</p> */}
          <p key={i*10}>Website: {e.extratags.website}</p>
          </>
        ))}
      </div>
      <div className="map">
        <MyMap lat={mapCoordinates.lat} lon ={mapCoordinates.lon}/>
      </div>
    </div>
  );
}

// Handler function that reads changes in the search bar

export default MapSearch;
