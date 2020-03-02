import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const GoogleMap = ({ google }) => {
  const [center] = useState({ lat: 22.542883, lng: 114.062996 });
  const [zoom] = useState(14);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/residentionalArea', {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => setMarkers(json))
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  }, []);

  const displayMarkers = () => {
    return markers.map((marker, index) => {
      return <Marker key={index} id={index} position={{
        lat: marker.lat,
        lng: marker.lng
      }}
        onClick={() => console.log(marker.full_address)} />
    })
  }

  return (
    <Map
      google={google}
      zoom={zoom}
      style={mapStyles}
      initialCenter={center}
    >
      {displayMarkers()}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZPa7wJ1XGYAq4G1l0ph6sM_jNbcKbOp0',
})(GoogleMap);
