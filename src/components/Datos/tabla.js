import React from 'react'

const Tabla = ({estaciones,highlight}) => {
  return (
     <div className="card-body table-responsive" >
    <table className="table table-striped table-hover table-bordered table-sm bg-white shadow-lg display nowrap">
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
                        <tr key={etc.idestudio} className={etc.idestudio === highlight ? "table-secondary" : null} >
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
    </div>
  )
}

export default Tabla
