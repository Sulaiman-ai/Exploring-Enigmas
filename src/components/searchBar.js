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
