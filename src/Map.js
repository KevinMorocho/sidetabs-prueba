import React, { useMemo, useEffect, useState } from 'react'
import { MapContainer, TileLayer, ScaleControl, LayersControl, FeatureGroup, Marker } from 'react-leaflet'
import Capa1 from "./components/Capa1";
import Capa2 from "./components/Capa2";

const Map = props => {
   console.log("toy aqui",props)
   const [refresh, setRefresh]=useState(true)
   
   useEffect(() => {
      console.log("soy el efecto", props.show1)
      setRefresh(false)
      setRefresh(true)
   }, [props.show1, props.show2])

   // const map = useMemo( () => {
   //    return  (
        
   //    )
   // }, [])

   // return  map

   return(
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
         <LayersControl.Overlay name="Areas Meteorológicas">
            <FeatureGroup>
               <Marker position={{lat: -42.87936, lng: 147.32941}} />
            </FeatureGroup>
         </LayersControl.Overlay>
      </LayersControl>
      {/* capa 1 */}
      {props.show1 && refresh ? 
         <Capa1 />
      :
         null
      }
      {/* capa 2 */}
      {props.show2 && refresh ? 
         <Capa2 />
      :
         null
      }
      {/* capa 3 */}
   </MapContainer>
   )
}
export default Map