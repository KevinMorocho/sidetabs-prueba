import React from 'react'

const Tabla = ({estaciones}) => {
  return (
    <table className="table table-striped|sm|bordered|hover|inverse table-inverse table-responsive">
        <thead className="thead-inverse|thead-default">
            <tr>
                <th>Parroquia</th>
                <th>Estudio</th>
                <th>Cantidad de datos registrados</th>
                <th>Promedio % de afectación</th>
                <th>Máximo % de afectación</th>
            </tr>
            </thead>
            <tbody>
                {estaciones.map((etc)=>{
                    return(
                        <tr key={etc.idestudio}>
                            <td scope="row">{etc.parroquia}</td>
                            <td>{etc.nombreEstudio}</td>
                            <td>{etc.count}</td>
                            <td>{etc.avg}</td>
                            <td>{etc.max}</td>
                        </tr>
                    )
                })}
            </tbody>
    </table>
  )
}

export default Tabla
