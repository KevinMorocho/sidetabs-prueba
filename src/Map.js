import React, { useMemo, useEffect, useState } from 'react'
import { MapContainer, TileLayer, ScaleControl, LayersControl, FeatureGroup, Marker } from 'react-leaflet'
import { connect } from "react-redux";
import Capa from "./components/Capa";
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
      zoom={9}
      center={{lat: -0.46645, lng: -76.98719}}
      whenCreated={props.setMap}>

      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

      <ScaleControl />

      <LayersControl>
         <LayersControl.Overlay name="Areas Meteorológicas">
            <FeatureGroup>
               <Marker position={{lat: -0.46645, lng: -76.98719}} />
            </FeatureGroup>
         </LayersControl.Overlay>
      </LayersControl>
      {props.capasMostradas.map((capa, index)=>{
         return(
            <Capa key={index}  capa={capa}/>
         )
      })}

      
   </MapContainer>
   )
}
const mapStateToProps = (state) => ({
   capasMostradas: state.capasMostradas,
 });
 
 export default connect(mapStateToProps, {})(Map)