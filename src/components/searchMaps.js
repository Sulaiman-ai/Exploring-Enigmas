// Imports
import React, { useState } from "react";
import MapsSearchBar from "./APISearch";
import axios from "axios";
import { search } from "../apis/search";

// Search Bar Function
function MapSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = async (event) => {
    const name = await search(searchTerm, locationSearch);
    setResult(name);
  };


  return (
    <div className="search-wrapper">
      <MapsSearchBar placeholder="Search" handleChange={e=>setSearchTerm(e.target.value)}/>
      <MapsSearchBar placeholder="Location" handleChange={e=>setLocationSearch(e.target.value)}/>
      <p>{searchTerm}</p>
      <p>{locationSearch}</p>
      <button onClick={handleSubmit}>Search</button>
      <div className="result-wrapper">
        {result.map((e, i)=>(
          <p key={i}>{e.properties.name}</p>
        ))}
      </div>
    </div>
  );
}

// Handler function that reads changes in the search bar

export default MapSearch;
