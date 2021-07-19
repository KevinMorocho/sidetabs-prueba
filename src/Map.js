import React, { useMemo } from 'react'
import { MapContainer, TileLayer, ScaleControl, LayersControl, FeatureGroup, Marker } from 'react-leaflet'
import Capa1 from "./components/Capa1";
import Capa2 from "./components/Capa2";

const Map = props => {
   const map = useMemo( () => {
      return  (
         <MapContainer 
            doubleClickZoom={false}
            id="mapId"
            zoom={7}
            center={{lat: -42.87936, lng: 147.32941}}
            whenCreated={props.setMap}>
   
            <TileLayer
               url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
               attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri" />

            <ScaleControl />

            <LayersControl>
               <LayersControl.Overlay name="Marker Overlay">
                  <FeatureGroup>
                     <Marker position={{lat: -42.87936, lng: 147.32941}} />
                     <Marker position={{lat: -40.87937, lng: 147.32950}} />
                  </FeatureGroup>
               </LayersControl.Overlay>
            </LayersControl>
            <Capa1/>
            <Capa2/>
         </MapContainer>
      )
   }, [])

   return  map
}
export default Map