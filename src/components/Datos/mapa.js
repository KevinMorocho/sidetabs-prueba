import React,{useState, useEffect} from 'react'
import { MapContainer, TileLayer, ScaleControl, CircleMarker, Popup } from 'react-leaflet'
import { Capas } from '../../store';
import proj4 from 'proj4'

const Mapa = ({estaciones}) => {
  return (
    <MapContainer 
      // doubleClickZoom={false}
      id="mapDatos"
      zoom={9}
      center={{lat: -0.46645, lng: -76.98719}}
        // whenCreated={props.setMap}
      >

      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />

      <ScaleControl />

      {estaciones.map((etc)=>{return(<Severidad key={etc.idestudio} etc={etc} />)})}
      
   </MapContainer>
  )
}

export default Mapa

const Severidad = ({etc}) => {
    const [capa, setCapa] = useState(null);

    const filterCapa =()=>{
        const index =  Capas.findIndex((c)=>c.id === etc.idestudio)
        console.log("INDEX", index);
        if(index === -1) return;
        setCapa(Capas[index])
    }

    useEffect(() => {
        filterCapa()
    }, []);
  
    const colors = {};

    const getColor = () => {
        const avg = parseInt(etc.avg)
        proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
        proj4.defs("EPSG:32718","+proj=utm +zone=18 +south +datum=WGS84 +units=m +no_defs");
        console.log("Coordenada transformada: ", proj4("EPSG:32718", "EPSG:4326", [parseFloat(etc.x),parseFloat(etc.y)]))
        console.log("avg", etc);
        console.log("avg", avg);
        if(avg <= 33 && avg>=0) return { fillColor: 'green', color: 'green' }
        if(avg <= 66 && avg>33) return { fillColor: 'orange', color: 'orange' }
        return { fillColor: 'red', color: 'red' }
    }

    // devuelve las coordenadas transformadas
    const getCoords =()=>{
        proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
        proj4.defs("EPSG:32718","+proj=utm +zone=18 +south +datum=WGS84 +units=m +no_defs");
        // console.log("Coordenada transformada: ", )
        const [lat, lng]= proj4("EPSG:32718", "EPSG:4326", [parseInt(etc.x),parseInt(etc.y)])
        console.log("y:",lat, "x:",lng)
        return {lat, lng}
    }

    return(
        <>
            {capa && (<CircleMarker  center={{lat: capa.y, lng:capa.x}} pathOptions={getColor()} radius={20} >
                <Popup>{etc.nombreEstudio}</Popup>
            </CircleMarker>)}
        </>
    )
}