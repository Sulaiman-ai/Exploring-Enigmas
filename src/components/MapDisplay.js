import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';


function ChangeMapView({coords}){
    const map = useMap();
    map.setView(coords);
    return null;
}

function MyMap(props) {
    console.log('map render', props);
      return (
        // <MapContainer center={[51.505, -0.09]} zoom={13} style={{height:"75vh"}}>
        <>
        <p>LAT{props.lat}</p>
        <p>LON{props.lon}</p>
        <MapContainer center={[props.lat, props.lon]} zoom={13} style={{height:"75vh"}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ChangeMapView coords={props}/>
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </>
      );
  }
  
  export default MyMap;