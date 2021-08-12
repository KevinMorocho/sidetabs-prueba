import { connect } from "react-redux";
import { Link } from "react-router-dom";

const BtnDownload = (props) => {
  console.log("isLogin", props.isLogin);
  var urlParte1;
  var urlParte1a;
  var urlParte2 = "?service=wfs&version=2.0.0&request=GetFeature&typeNames=";
  var urlParte3;
  var urlParte4 = "&outputFormat=shape-zip";
  var urlFinal;
  var urlFinal2;
  var idURL = window.location.pathname;
  idURL = idURL.replace("/metadata/", "");
  idURL = parseInt(idURL);

  //Asigna la direccion de cada archivo
  for (const capa of props.capas) {
    if (capa.id === idURL) {
      urlParte1 = capa.urlWFS;
      urlParte1a = capa.urla;
      urlParte3 = capa.layers;
    }
  }
  urlFinal = urlParte1 + urlParte2 + urlParte3 + urlParte4; //Dir archivo de descarga
  urlFinal2 = urlParte1a + urlParte2 + urlParte3 + urlParte4; //Dir archivo de descarga visitante
  console.log("Final1: " + urlFinal);
  console.log("Final2: " + urlFinal2);

  const handleDownloadDoc = (fileName) => (e) => {
    // Downloads the file
    let link = document.createElement("a");
    /*let blob = new Blob([urlFinal2], { });//contenido del archivo*/
    link.href = urlFinal; //direccion en la que se encuentra el archivo
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      <p>{props.description}</p>
      <div className="row ">
        <div className="col-sm-auto">
          {props.isLogin ? (
            <button
              className="btn btn-primary btn-sm"
              onClick={handleDownloadDoc()}
            >
              <i class="fas fa-cloud-download-alt"></i> Descargar
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                alert("Debe iniciar sesión");
              }}
            >
              <i class="fas fa-cloud-download-alt"></i> Descargar
            </button>
          )}
          <Link
            to="/mapa"
            className="btn btn-secondary btn-sm"
            //onClick={() => this.props.quitarMetadata()}
            href=""
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  capa: state.capa,
  capas: state.capas,
});
const mapDispatchToProps = (dispatch) => ({
  quitarMetadata() {
    dispatch({
      type: "QUITAR_METADATA",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnDownload);
