import React,{useState, useEffect} from 'react'
import { MapContainer, TileLayer, ScaleControl, CircleMarker, Popup } from 'react-leaflet'
import { Capas } from '../../store';
import proj4 from 'proj4'

const Mapa = ({estaciones,onClickZone}) => {
  return (
      <div style={{position:"relative"}}>
        <div style={{position:"absolute", right:4, top:4, zIndex:"401"}}>
            <div style={{background:"#fff", padding:"4px 6px", borderRadius:"6px"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{width:"50px", height:"5px", background:"green", marginRight:"5px"}} />
                    <p style={{margin:0}}>Leve (1% - 33%)</p>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{width:"50px", height:"5px", background:"orange", marginRight:"5px"}} />
                    <p style={{margin:0}}>Intermedio (34% - 66%)</p>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <div style={{width:"50px", height:"5px", background:"red", marginRight:"5px"}} />
                    <p style={{margin:0}}>Avanzado (67% - 100%)</p>
                </div>
            </div>
        </div>
        <MapContainer 
        doubleClickZoom={false}
        id="mapDatos"
        zoom={9}
        center={{lat: -0.46645, lng: -76.98719}}
            // whenCreated={props.setMap}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
            <ScaleControl />
            {estaciones.map((etc)=>{return(<Severidad key={etc.idestudio} etc={etc} onClickZone={onClickZone}/> )})}
        </MapContainer>
      </div>

  )
}

export default Mapa

const Severidad = ({etc, onClickZone}) => {
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
    const getCoords = () => {
        proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
        proj4.defs("EPSG:32718","+proj=utm +zone=18 +south +datum=WGS84 +units=m +no_defs");
        // console.log("Coordenada transformada: ", )
        const [lat, lng]= proj4("EPSG:32718", "EPSG:4326", [parseInt(etc.x),parseInt(etc.y)])
        console.log("y:",lat, "x:",lng)
        return {lat, lng}
    }

    return(
        <>
            {capa && (<CircleMarker center={{lat: capa.y, lng:capa.x}} pathOptions={getColor()} radius={20}>
                <Popup onClose={()=>onClickZone(null)} onOpen={()=>{onClickZone(etc.idestudio)}}>
                    <>
                        <h6>{capa.nombreCapa}</h6>
                        <table className="table table-success">
                            {/* <thead>
                                <th>Dato</th>
                                <th>Valor</th>
                            </thead> */}
                            <tbody>
                                <tr>
                                    <td>Parroquia</td>
                                    <td>{etc.parroquia}</td>
                                </tr>
                                <tr>
                                    <td>Estudio</td>
                                    <td>{etc.nombreEstudio}</td>
                                </tr>
                                <tr>
                                    <td>Promedio</td>
                                    <td>{parseFloat(etc.avg).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>{'Máximo'}</td>
                                    <td>{etc.max}</td>
                                </tr>
                                <tr>
                                    <td>{'# Datos'}</td>
                                    <td>{etc.count}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                </Popup>
            </CircleMarker>)}
        </>
    )
}