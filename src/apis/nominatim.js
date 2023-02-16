const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/";
const url = "https://nominatim.openstreetmap.org/?addressdetails=1&extratags=1&q=bakery+in+berlin+wedding&format=json&limit=1";
const params = {
    q: '',
    format: 'json',
    addressdetails: 1,
}

async function searchNominatim(baseURL, params){
    await fetch(url).then((response)=>console.log(response))
}

searchNominatim()