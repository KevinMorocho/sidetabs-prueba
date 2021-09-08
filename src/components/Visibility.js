import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Visibility = ({ capas, decisionCapa }) => {
  return (
    <>
      {capas.map((capa) => (
        <div className="form-check">
          <div className="row">
            <div className="form-check col">
              <input
                type="checkbox"
                className="form-check-input"
                checked={capa.visible}
                onChange={(event) => decisionCapa(event.target.checked, capa)}
                // callback={(cheked) => decisionCapa(cheked, capa)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {capa.nombreCapa}
              </label>
            </div>
            <div className="col">
              <Link to={`/metadata/${capa.id}`}>
                <a
                  className="btn btn-success"
                  // rel="noopener"
                  // target="_blank"
                  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ver Información"
                >
                  <i class="fas fa-info"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  capasPorMostrar: state.capasPorMostrar,
  capas: state.capas,
});

const mapDispatchToProps = (dispatch) => ({
  decisionCapa(clickeado, capa) {
    console.log("valor de clickeado: " + clickeado);
    if (clickeado) {
      console.log("Debería agregar");
      capa.visible = true;
      dispatch({
        type: "AGREGAR_CAPA",
        capa,
      });
    } else {
      capa.visible = false;
      console.log("Debería quitar");
      dispatch({
        type: "QUITAR_CAPA",
        capa,
      });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Visibility);
