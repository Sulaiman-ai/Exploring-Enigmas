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
  const [mapCenter, setCenter] = useState({lat: 0, lon: 0});
  const [mapBoundingBox, setBoundingBox] = useState([]);
  const [placePoints, setPoints] = useState([]);
  console.log('map bbox', mapBoundingBox);

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
    console.log('latArr', latArr);
    const lonArr = places.map(p => p.lon);
    console.log('lonArr', lonArr);
    const lat_min = Math.min(...latArr);
    const lat_max = Math.max(...latArr);
    const lon_min = Math.min(...lonArr);
    const lon_max = Math.max(...lonArr);
    return [[lat_min,lon_min], [lat_max, lon_max]]
    // return places.map((place)=>{
      // return [place.lat, place.lon]
    // })
  }

  const getMarkerPoints = (places) => {
    let points = places.map((places)=>([places.lat, places.lon]));
    return points;
  }


  return (
    <div className="search-wrapper">
      <MapsSearchBar placeholder="Search" handleChange={e=>setSearchTerm(e.target.value)}/>
      <MapsSearchBar placeholder="Location" handleChange={e=>setLocationSearch(e.target.value)}/>
      <p>{searchTerm}</p>
      <p>{locationSearch}</p>
      <p>{mapCenter.lat}</p>
      <p>{mapCenter.lon}</p>
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
        <MyMap center = {mapCenter} bbox = {mapBoundingBox} marker_points = {placePoints}/>
      </div>
    </div>
  );
}

// Handler function that reads changes in the search bar

export default MapSearch;
