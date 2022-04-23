import React,{useEffect, useState} from 'react'
import Mapa from './mapa'
import Tabla from './tabla'

/* 
    datosScreen
        // cambio de rango     
        // peticion endpoint
        mapa de severidad (data)
        tabla severidad (data)
    datosScreen
*/

const Datos = () => {
    // data
    const [tout, setTout] = useState(null);
    const [loading, setLoading] = useState(true)
    const [estaciones, setEstaciones] = useState([])

    // queries (fechas)
    const [feci, setFeci] = useState('2021-04-01')
    const [fecf, setFecf] = useState('2022-04-01')

    // petición al endpoint
    const getSeveridad = async ()=>{
        try {
            setLoading(true)
            console.log("FECI", feci);
            console.log("FECF", fecf);
            const res = await fetch(`http://patfa.site:3000/estaciones?feci=${feci}&fecf=${fecf}`);
            const data = await res.json();
            console.log("RES", data)
            setEstaciones(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const newSearch = () => {
        if (tout) clearTimeout(tout);
        const timeout = setTimeout(() => {
            getSeveridad()
        }, 750);
        setTout(timeout)
    }

    // ejecuta la petición al montar la vista (como una especie de constructor)
    useEffect(() => {
        getSeveridad()
    }, [])

    // handle any change on date input
    useEffect(() => {
        newSearch()
    }, [feci, fecf])
    
  return (
    <>
        {loading && (
            <div style={{position: "absolute", right:0, top:0, left:0, bottom:0, zIndex:9999}}>
                <div style={{backgroundColor: "#ffffff80", width:"100%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p style={{fontWeight:"medium", fontSize:"1rem"}}>Cargando...</p>
                </div>
            </div>
        )}
        <div>
            <label>Fecha de inicio:
                <input className=" form-control " type="date" name="feci" value={feci} onChange={(e)=>{setFeci(e.target.value)}} required pattern="\d{4}-\d{2}-\d{2}"/>
            </label>
            <label>Fecha de fin:
                <input className=" form-control " type="date" name="fecf" value={fecf} onChange={(e)=>{setFecf(e.target.value)}} required pattern="\d{4}-\d{2}-\d{2}"/>
            </label>
        </div>
        <Mapa estaciones={estaciones} />
        <Tabla estaciones={estaciones} />
    </>
  )
}

export default Datos