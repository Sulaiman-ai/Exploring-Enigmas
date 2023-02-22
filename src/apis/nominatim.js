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

function createOSMIDSearchURL(osm_type, osm_ID){
    let type_code = "";
    switch (osm_type){
        case "node":
            type_code = "N";
            break;
        case "way":
            type_code = "W";
            break;
        case "relation":
            type_code = "R";
            break;
    };
    // return `${NOMINATIM_BASE_URL}/details?osmtype=${type_code}&osmid=${osm_ID}&format=json&addressdetails=1`
    return `${NOMINATIM_BASE_URL}lookup?osm_ids=${type_code}${osm_ID}&format=json&extratags=1`
}

export async function searchByOSMID(osm_type, osm_ID){
    const url = createOSMIDSearchURL(osm_type, osm_ID);
    // console.log('url', url)
    const response = await fetch(url);
    const data = await response.json();
    // console.log('osmid search', data);
    const return_data = (({display_name, address, extratags, lat, lon}) => ({display_name,address,extratags, lat, lon}))(data[0]);
    return_data.address = return_data.display_name.split(',').slice(1).map(word => word.trim()).join(', ');
    return_data.display_name = return_data.display_name.split(',')[0];
    // console.log('return data', return_data);
    return return_data;
    // return (({display_name, address, extratags, lat, lon}) => ({display_name,address,extratags, lat, lon}))(data[0]);
}

// console.log(await searchNominatim(params));

// console.log(formatNOMURL(NOMINATIM_BASE_URL, params));

// export default {formatNOMURL, searchNominatim};