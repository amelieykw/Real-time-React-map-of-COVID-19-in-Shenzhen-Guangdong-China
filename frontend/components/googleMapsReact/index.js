import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const GoogleMap = ({ google }) => {
  const [center] = useState({ lat: 22.542883, lng: 114.062996 });
  const [zoom] = useState(14);

  useEffect(() => {
    fetch('https://ncov.html5.qq.com/api/getCommunity?province=%E5%B9%BF%E4%B8%9C%E7%9C%81&city=%E6%B7%B1%E5%9C%B3%E5%B8%82', {
      // mode: 'no-cors',
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => console.log(response.text()))
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  });

  return (
    <Map
      google={google}
      zoom={zoom}
      style={mapStyles}
      initialCenter={center}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZPa7wJ1XGYAq4G1l0ph6sM_jNbcKbOp0',
})(GoogleMap);
