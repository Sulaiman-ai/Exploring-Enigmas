// import {searchOTM} from './opentripmap.js';
import {nominatimSearchLocation} from './nominatim.js';
import { searchOTM } from './opentripmap.js';

// const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/";
// const OTM_URL = "https://api.opentripmap.com/0.1/";
// const OTM_APIKEY = "5ae2e3f221c38a28845f05b67ee7c6c2f1b59b43d2892ec295c256a8";

// const name = 'bakeries';
// const city = 'london';

// const nom_params = {
//     city: '',
//     format: 'json',
//     addressdetails: 1,
// }
// nom_params.city = 'london';

// const OTMparams = {
//     searchby: '',
//     lang: 'en',
//     lat: '',
//     long: '',
//     bounding_box: {
//         lat_min: '',
//         lat_max: '',
//         lon_min: '',
//         lon_max: ''
//     },
//     kinds: '',
//     name: '',
// }

// OTMparams.searchby = 'bbox';
// OTMparams.bounding_box = {
//     lat_min: '51.2867601',
//     lat_max: '51.6918741',
//     lon_min: '-0.5103751',
//     lon_max: '0.3340155'
// }
// params.kinds = 'bakeries';

export async function search(name, location_name){
    const location = await nominatimSearchLocation(location_name);
    console.log('location', location)
    let bounding_box = {
        lat_min: location.boundingbox[0],
        lat_max: location.boundingbox[1],
        lon_min: location.boundingbox[2],
        lon_max: location.boundingbox[3]
    }
    
    let places = await searchOTM(name, bounding_box);
    places = places.slice(0, 5);
    console.log('places', places);
    return places;
    // return data[0].properties.name;
}

export default search;

// function search(type, {street,city,country,state,postalcode,query,format,addressdetails}){

// }

// search(name, location);

// search(name, city, NOMINATIM_BASE_URL, nom_params, OTM_URL, OTMparams, OTM_APIKEY);

// let circle = {
//     radius: 10,
//     perimeter: 40
// };

// let another = {
//     radius: 30,
// }

// circle = {
//     ...ci
// }

