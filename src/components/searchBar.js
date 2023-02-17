// Imports
import React, { useState } from "react";
import axios from "axios";

// Search Bar Function
function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

const handleSubmit = async (event) => {
  const key = event.keyCode

  if(key===13) {
    console.log(searchInput)

    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
      params: {q: 'new york', locale: 'en_US', langid: '1033', siteid: '300000001'},
      headers: {
        'X-RapidAPI-Key': 'e7ba25ecc0msh5d2a22f5c1f3025p11bef4jsn0feeeaeaef60',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
} 

  const handleChange = (event) => {
    event.preventDefault();

    setSearchInput(event.target.value);
  };

  // if (searchInput.length > 0) {
  //   console.log(searchInput);
  // } else {
  //   console.log("Please enter a value!");
  // }

  return (
    <div className="search-wrapper">
      <input
        type="search"
        placeholder="Search"
        onKeyDown={handleSubmit}
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}

// Handler function that reads changes in the search bar

export default SearchBar;
