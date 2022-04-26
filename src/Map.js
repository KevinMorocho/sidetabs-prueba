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
      <div className="container-map">
         <div style={{position:"absolute", left:4, bottom:4, zIndex:"9999"}}>
            <div style={{background:"#fff", padding:"4px 6px", borderRadius:"6px"}}>
               <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{width:"50px", height:"5px", background:"#CB2B3E", marginRight:"5px"}} />
                  <p style={{margin:0}}>Coordenadas de Estaciones</p>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{width:"50px", height:"5px", background:"#CAC428", marginRight:"5px"}} />
                  <p style={{margin:0}}>Plantas La Belleza</p>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{width:"50px", height:"5px", background:"#2A81CB", marginRight:"5px"}} />
                  <p style={{margin:0}}>Plantas Puerto Murialdo</p>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{width:"50px", height:"5px", background:"#2AAD27", marginRight:"5px"}} />
                  <p style={{margin:0}}>Plantas San José de Dahuano</p>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{width:"50px", height:"5px", background:"#CB8427", marginRight:"5px"}} />
                  <p style={{margin:0}}>Plantas Unión Milagreña</p>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{width:"50px", height:"5px", background:"#7B7B7B", marginRight:"5px"}} />
                  <p style={{margin:0}}>Plantas INIAP 1</p>
               </div>
               <div style={{display:"flex", alignItems:"center"}}>
                  <div style={{width:"50px", height:"5px", background:"#9C2BCB", marginRight:"5px"}} />
                  <p style={{margin:0}}>Plantas INIAP 2</p>
               </div>
            </div>
         </div>
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
      </div>
   )
}
const mapStateToProps = (state) => ({
   capasMostradas: state.capasMostradas,
 });
 
 export default connect(mapStateToProps, {})(Map)