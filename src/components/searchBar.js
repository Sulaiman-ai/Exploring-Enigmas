// Imports
import React, { useState } from "react";

// Search Bar Function
const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");
};

// Handler function that reads changes in the search bar

const handleChange = (event) => {
  event.preventDefault();
  setSearchInput(event.target.value);
};

if (searchInput.length > 0) {
  console.log(searchInput);
} else {
  console.log("Please enter a value!");
}

return (
  <div>
    <input
      type="search"
      placeholder="Search"
      onChange={handleChange}
      value={searchInput}
    />
  </div>
);
