import React from 'react'

export const Visibility= props =>{
    return (
        <div className="form-check">
            <input type="checkbox" 
                className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.callback(e.target.checked)}
            />  
            <label className="form-check-label" htmlFor="flexCheckDefault">
              CAPA {props.description}
            </label>     
        </div>
    )
}
