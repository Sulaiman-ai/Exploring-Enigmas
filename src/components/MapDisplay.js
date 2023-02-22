import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import {MapCard} from './SearchResultsCards';
// import 'leaflet/dist/leaflet.css';


function ChangeMapView({coords, bbox}){
    const map = useMap();
    (bbox.length===0) ? map.setView(coords) : map.fitBounds(bbox);
    return null;
}

function MyMap(props) {
      return (
        // <MapContainer center={[51.505, -0.09]} zoom={13} style={{height:"75vh"}}>
        <>
        {/* <MapCard title="title" address="address"></MapCard>
        <p>LAT{props.lat}</p>
        <p>LON{props.lon}</p> */}
        <MapContainer center={[props.center.lat, props.center.lon]} zoom={13} style={{height:"75vh"}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <ChangeMapView coords={props.center} bbox = {props.bbox}/>
          {(props.marker_points.length===0) ? <></> : 
          props.marker_points.map((placepoint)=>(
          <Marker position={placepoint.point}>
            <Popup>
              {/* A pretty CSS3 popup. <br /> Easily customizable. */}
              <MapCard title={placepoint.name} address={placepoint.address}></MapCard>
            </Popup>
          </Marker>
          ))}
        </MapContainer>
        </>
      );
  }
  
  export default MyMap;