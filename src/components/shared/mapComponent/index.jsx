import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useEffect, useState, useRef } from 'react'
import { geosearch } from 'esri-leaflet-geocoder'
import 'leaflet/dist/leaflet.css'
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css'
import L from 'leaflet'

const MapView = () => {
  const mapRef = useRef()
  const [position, setPosition] = useState([50, 10])
  const [icon, setIcon] = useState()
  
  useEffect(() => {
    const { current = {} } = mapRef
    const { leafletElement: map } = current
    
    if (!map) return
    
    const control = geosearch()
    
    control.addTo(map)
    
    control.on('results', handleOnSearchResults)
    
    let greenIcon = L.icon({
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Font_Awesome_5_solid_map-marker-alt.svg',
      shadowUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Font_Awesome_5_solid_map-marker-alt.svg',
      iconSize: [20,30],
      iconAnchor: [22,30],
      popupAncor: [-3,-76],
      shadowSize: [20,30],
      shadowAnchor: [22,94],
    })
    setIcon(greenIcon)
    
    return () => {
      control.off('results', handleOnSearchResults)
    }
  }, [])
  
  const handleOnSearchResults = (data) => {
    console.log("Search results", data)
    setPosition([data.latlng.lat, data.latlng.lng])
  }
  
  return (
    <MapContainer
      ref={mapRef}
      center={position}
      zoom={6}
      style={{ width: "400px", height: "400px" }}
    >
      <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
      <Marker position={position} icon={icon}>
        <Popup>Yo gabba gabba</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapView