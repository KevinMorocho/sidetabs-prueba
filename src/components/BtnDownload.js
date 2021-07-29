import { connect } from "react-redux";
import {Link} from "react-router-dom";

const BtnDownload = (props) => {
  console.log("isLogin", props.isLogin);

  const handleDownloadDoc = (fileName) => (e) => {
    // Downloads the file
    let link = document.createElement("a");
    link.download = `${fileName}.txt`;
    let blob = new Blob(["CHUPALOOOOOO"], { type: "text/plain" });
    link.href = URL.createObjectURL(blob);
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
              onClick={handleDownloadDoc("Archivo")}
            >
              Download
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                alert("Debe iniciar sesión");
              }}
            >
              Download
            </button>
          )}
          <Link to="/mapa"
            className="btn btn-secondary btn-sm"
            //onClick={() => this.props.quitarMetadata()}
            href="" 
           >
            <i class="fas fa-arrow-alt-circle-left"></i>
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  capa: state.capa,
});
const mapDispatchToProps = (dispatch) => ({
  quitarMetadata() {
    dispatch({
      type: "QUITAR_METADATA",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnDownload);
