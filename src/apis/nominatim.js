// import fetch from 'node-fetch';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/";
// const url = "https://nominatim.openstreetmap.org/?addressdetails=1&extratags=1&q=bakery+in+berlin+wedding&format=json&limit=1";
const params = {
    street: '',
    city: '',
    country: '',
    state: '',
    country: '',
    postalcode: '',
    query: '',
    format: 'json',
    addressdetails: 1,
}

params.city = 'london';

export function formatNOMURL(baseURL, params){
    searchString = Object.keys(params).map((key)=>{
        return (params[key]) ? `${key}=${params[key]}&` : ``;
    })
    console.log(searchString);
    return `${baseURL}search?city=${params.city}&format=${params.format}&addressdetails=1&extratags=1`;
}

export async function searchNominatim(baseURL, params){
    const url = formatNOMURL(baseURL, params);
    const response = await fetch(url);
    const data = await response.json();
    const cities = data.filter(place => place.type=="city")
    // console.log(cities);
    return cities;
}

searchNominatim(NOMINATIM_BASE_URL, params);
console.log("hello")

// export default {formatNOMURL, searchNominatim};