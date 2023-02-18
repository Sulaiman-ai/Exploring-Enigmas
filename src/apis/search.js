// import {searchOTM} from './opentripmap.js';
import {searchNominatim} from './nominatim.js';
import { searchOTM } from './opentripmap.js';

// const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/";
// const OTM_URL = "https://api.opentripmap.com/0.1/";
// const OTM_APIKEY = "5ae2e3f221c38a28845f05b67ee7c6c2f1b59b43d2892ec295c256a8";

const name = 'bakeries';
const city = 'london';

const nom_params = {
    city: '',
    format: 'json',
    addressdetails: 1,
}
nom_params.city = 'london';

const OTMparams = {
    searchby: '',
    lang: 'en',
    lat: '',
    long: '',
    bounding_box: {
        lat_min: '',
        lat_max: '',
        lon_min: '',
        lon_max: ''
    },
    kinds: '',
    name: '',
}

OTMparams.searchby = 'bbox';
OTMparams.bounding_box = {
    lat_min: '51.2867601',
    lat_max: '51.6918741',
    lon_min: '-0.5103751',
    lon_max: '0.3340155'
}
// params.kinds = 'bakeries';

async function search(type, city, nom_params, OTMparams){
    nom_params.city = city;
    nom_params.state = 'England'
    const cities = await searchNominatim(nom_params);
    console.log(cities)
    // console.log(cities)
    // const nomURL = formatNOMURL(NOMINATIM_BASE_URL, nom_params);
    OTMparams.kinds = type;
    OTMparams.bounding_box.lat_min = cities[0].boundingbox[0];
    OTMparams.bounding_box.lat_max = cities[0].boundingbox[1];
    OTMparams.bounding_box.lon_min = cities[0].boundingbox[2];
    OTMparams.bounding_box.lon_max = cities[0].boundingbox[3]
    const data = await searchOTM(OTMparams);
    // console.log('data', data);
}

// function search(type, {street,city,country,state,postalcode,query,format,addressdetails}){

// }

search(name, city, nom_params, OTMparams);

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

