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
    extratags: 1
}

params.city = 'london';

export function formatNOMURL(baseURL, params){
    const searchString = Object.keys(params).map((key, i, arr)=>{
        let term = (params[key]) ? `${key}=${params[key]}${(i===arr.length-1) ? '' : `&`}` : ``;
        return term;
    }).join(',')
    .replace(/\,/g, '');
    return `${baseURL}search?${searchString}`;
    // return `${baseURL}search?city=${params.city}&format=${params.format}&addressdetails=1&extratags=1`;
}

function createURL(searchTerm){
    return `${NOMINATIM_BASE_URL}/search?q=${searchTerm}&format=json&addressdetails=1`;
}

export async function nominatimSearchLocation(locationSearch){
    const url = createURL(locationSearch);
    const response = await fetch(url);
    const locations = await response.json();
    // const cities = data.filter(place => place.type=="city")
    // console.log(cities);
    return locations[0];
}

// console.log(await searchNominatim(params));

// console.log(formatNOMURL(NOMINATIM_BASE_URL, params));

// export default {formatNOMURL, searchNominatim};