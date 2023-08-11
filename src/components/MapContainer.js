import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react'
// import (GoogleMap) from "@react-google-maps/api"

//Googlemap - it allows us to render google map on amy react app
//LoadScript - Loads the google maps API script
//Marker identifier a location on a map

  const MapContainer = () => {
    const item ={
        name: "gomycodeNG",
        location: {
            lat: 6.499201891274661,
            lng: 3.378754390096128,
        }
    }

    const mapStyles = {
        height: '480px',
        width: '100%',
    }

    const defaultCenter = {
        lat: 6.499201891274661,
        lng: 3.378754390096128,
    }

  


  return (
    <div>
        <LoadScript googleMapsApiKey='AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE'>
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
                <Marker key={item.name} position={item.location}/>
            </GoogleMap>
        </LoadScript>
      {/* <h5>Everything in google maps</h5> */}
    </div>
  )
}

export default MapContainer
