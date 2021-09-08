import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, ScaleControl, LayersControl, FeatureGroup, Marker } from 'react-leaflet'
import { connect } from "react-redux";
// import { CRS } from 'leaflet';
import Capa from "./components/Capa";
import Capa2 from "./components/Capa2";


const Map = props => {

   const [refresh, setRefresh] = useState(true)

   useEffect(() => {
      setRefresh(false)
      setTimeout(() => {
         setRefresh(true)   
      }, 100);
   }, [props])

   return(
      <MapContainer 
      // doubleClickZoom={false}
      id="mapId"
      zoom={9}
      center={{lat: -0.46645, lng: -76.98719}}
      whenCreated={props.setMap}>

      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

      <ScaleControl />

      {
         refresh ?
         props.capasMostradas.map((capa, index)=>{
            return(
               <>
               {/* <Capa key={'wms-'+index} capa={capa}/> */}
               <Capa2 key={'wfs-'+index} capa={capa}/>
               </>
              )
            })
            :
            null
         }
      
   </MapContainer>
   )
}
const mapStateToProps = (state) => ({
   capasMostradas: state.capasMostradas,
 });
 
 export default connect(mapStateToProps, {})(Map)