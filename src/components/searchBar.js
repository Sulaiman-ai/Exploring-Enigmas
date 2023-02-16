// Imports
import React, { useState } from "react";

// Search Bar Function
function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

const handleSubmit = async (event) => {
  const key = event.keyCode

  if(key===13) {
    console.log(searchInput)
  }
  // await fetch
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
