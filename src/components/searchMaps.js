// Imports
import React, { useState } from "react";
import MapsSearchBar from "./APISearch";
import axios from "axios";
import { search } from "../apis/search";
import MyMap from "./MapDisplay";
import { SearchResultsCard } from "./SearchResultsCards";
import Hero from './Hero';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

// Search Bar Function
function MapSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [result, setResult] = useState([]);
  const [mapCenter, setCenter] = useState({ lat: 0, lon: 0 });
  const [mapBoundingBox, setBoundingBox] = useState([]);
  const [placePoints, setPoints] = useState([]);

  const handleSubmit = async (event) => {
    const [placesList, areaCoordinates] = await search(searchTerm, locationSearch);
    setResult(placesList);
    setPoints(getMarkerPoints(placesList));
    setCenter({
      lat: parseFloat(areaCoordinates.lat),
      lon: parseFloat(areaCoordinates.lon),
    });
    setBoundingBox(calculateBBox(placesList));
  };

  const calculateBBox = (places) => {
    const latArr = places.map(p => p.lat);
    const lonArr = places.map(p => p.lon);
    const lat_min = Math.min(...latArr);
    const lat_max = Math.max(...latArr);
    const lon_min = Math.min(...lonArr);
    const lon_max = Math.max(...lonArr);
    return [[lat_min, lon_min], [lat_max, lon_max]]
    // return places.map((place)=>{
    // return [place.lat, place.lon]
    // })
  }

  const getMarkerPoints = (places) => {
    let points = places.map((places) => ({ name: places.display_name, address: places.address, point: [places.lat, places.lon] }));
    return points;
  }


  return (
    <>
      <header className="search-banner">
        <h1 className="banner-h1">Search for a point of interest...</h1>
      </header>
      <h2 className="search-h2">Search for a point of interest in your chosen city to see a list of places to visit!</h2>
      <div className="search-wrapper">
        <div className="search-div">
          <p className="search-page-para">Enter a point of interest: </p>
          <MapsSearchBar placeholder="e.g. bakery, museum" handleChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="search-div">
          <p className="search-page-para">Enter your location: </p>
          <MapsSearchBar placeholder="e.g. London, Paris" handleChange={e => setLocationSearch(e.target.value)} />
        </div>
        {/* <p>{searchTerm}</p>
      <p>{locationSearch}</p>
      <p>{mapCenter.lat}</p>
      <p>{mapCenter.lon}</p> */}
      <div className="search-btn-div">
        <button className="search-btn" onClick={handleSubmit}>Search</button>
        <p>Results will appear on the map below</p>
      </div>
        
        <div className="result-wrapper">
          {result.map((e, i) => {
            return <SearchResultsCard title={e.display_name} address={e.address} />
            // return <SearchResultsCard title={e.display_name.split(',')[0]} 
            // address={e.display_name.split(',').slice(1).map(word => word.trim()).join(',')}/>
            // <>
            // <p key={i}>{e.display_name.split(',')[0]}</p>
            // {/* <p key={i}>{e.address.split(',')[0]}</p> */}
            // <p key={i*10}>Website: {e.extratags.website}</p>
            // </>
          })}
        </div>
        <div className="map">
          <MyMap center={mapCenter} bbox={mapBoundingBox} marker_points={placePoints} />
        </div>
      </div>
    </>

  );
}

// Handler function that reads changes in the search bar

export default MapSearch;
