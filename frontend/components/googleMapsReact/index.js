import React, { useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = ({ google }) => {
  const [center] = useState({ lat: 22.542883, lng: 114.062996 });
  const [zoom] = useState(14);
  return (
    <Map
      google={google}
      zoom={zoom}
      style={mapStyles}
      initialCenter={center}
    >
    </Map>
  );
};

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZPa7wJ1XGYAq4G1l0ph6sM_jNbcKbOp0'
})(GoogleMap);
