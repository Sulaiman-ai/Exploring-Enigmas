// Imports
import React, { useState } from "react";
import axios from "axios";

// Search Bar Function
function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [hotelList, sethotelList] = useState(["0"]);

  const handleSubmit = async (event) => {
    const key = event.keyCode;

    if (key === 13) {
      // console.log(searchInput)
      try {
        const { data } = await axios.get(
          "https://hotels4.p.rapidapi.com/locations/v3/search",
          {
            params: { q: searchInput },
            headers: {
              "X-RapidAPI-Key":
                "2550ddfad2msh03f58448c04a3a7p1fd4a2jsn0d1046483dd6",
              "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
            },
          }
        );
        const { sr } = data;
        const hotels = sr.filter((category) => category.type === "HOTEL");
        console.log(hotels);
        sethotelList(hotels);
      } catch (error) {
        console.error(error);
      }
    }
  };

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
      <button className="fas fa-search search-icon"></button>
      <input
        type="search"
        placeholder="Search"
        className="search"
        onKeyDown={handleSubmit}
        onChange={handleChange}
        value={searchInput}
      />
      <>
        {hotelList.length === 0 ? (

          <div className="result-wrapper">
          <ul>
            <li>No hotel found</li>
          </ul>
          </div>
        ) : (
          
      <>
            {hotelList.map((hotel) => (
              hotel.regionNames?.fullName === undefined || hotel.regionNames?.fullName === null || hotel.regionNames?.fullName === "" ? null :
            <div className="result-wrapper">
            <ul>
              <li key={hotel.hotelId}>{hotel.regionNames?.fullName}</li>
            </ul>
          </div>

            ))}

          
      </>
        )}
      </>
    </div>
  );
}

// Handler function that reads changes in the search bar

export default SearchBar;
