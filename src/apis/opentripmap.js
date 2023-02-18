// import fetch from 'node-fetch';

const OTM_APIKEY = "5ae2e3f221c38a28845f05b67ee7c6c2f1b59b43d2892ec295c256a8";
const OTM_URL = "https://api.opentripmap.com/0.1/";

const params = {
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

params.searchby = 'bbox';
params.bounding_box = {
    lat_min: '51.2867601',
    lat_max: '51.6918741',
    lon_min: '-0.5103751',
    lon_max: '0.3340155'
}
params.kinds = 'bakeries';

export function formatOTMURL(params){
    return `${OTM_URL}${params.lang}/places/${params.searchby}
?lon_min=${params.bounding_box.lon_min}&lon_max=${params.bounding_box.lon_max}
&lat_min=${params.bounding_box.lat_min}&lat_max=${params.bounding_box.lat_max}&kinds=${params.kinds}
&apikey=${OTM_APIKEY}`;
}

export async function searchOTM(baseURL, params, apikey){
    const url = formatOTMURL(baseURL, params, apikey);
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    // const cities = data.filter(place => place.type=="city")
    // console.log(data.features[0].properties);
    return data.features;
}

// console.log(await searchOTM(OTM_URL, params, OTM_APIKEY));

// export default {formatOTMURL, searchOTM};