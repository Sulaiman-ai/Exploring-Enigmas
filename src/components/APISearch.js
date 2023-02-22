// Imports
import React, { useState } from "react";

// Search Bar Function
function MapsSearchBar(props) {
//   const [searchInput, setSearchInput] = useState("");
//   const [hotelList, sethotelList] = useState([]);

//   const handleSubmit = async (event) => {
//     const key = event.keyCode;

//     if (key === 13) {
//       // console.log(searchInput)
//       try {
//         const { data } = await axios.get(
//           "https://hotels4.p.rapidapi.com/locations/v3/search",
//           {
//             params: { q: searchInput },
//             headers: {
//               "X-RapidAPI-Key":
//                 "e7ba25ecc0msh5d2a22f5c1f3025p11bef4jsn0feeeaeaef60",
//               "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
//             },
//           }
//         );
//         const { sr } = data;
//         const hotels = sr.filter((category) => category.type === "HOTEL");
//         console.log(hotels);
//         sethotelList(hotels);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const handleChange = (event) => {
//     event.preventDefault();

//     setSearchInput(event.target.value);
//   };

  return (
    <div className="search-page-wrapper">
      <input
        type="search"
        placeholder={props.placeholder}
        // onKeyDown={handleSubmit}
        onChange={props.handleChange}
        // value={searchInput}
      />
    </div>
  );
}

// Handler function that reads changes in the search bar

export default MapsSearchBar;
