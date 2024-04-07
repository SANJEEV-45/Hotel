import React from 'react'
import MapComponent from './MapComponent';

const latitude = 37.7749; 
const longitude = -122.4194;
const zoomLevel = 10;
const Map = () => {
  return (
    <div>
       <div>
        <MapComponent latitude={latitude} longitude={longitude} zoomLevel={zoomLevel} />
    </div>
    </div>
  )
}

export default Map