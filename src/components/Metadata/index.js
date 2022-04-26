import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "./components/layout";
import InformationBlock from "./components/information";
import { landing } from "../utils/landing";
import BtnDownload from "../BtnDownload";
import { Capas } from "../../store.js";
import Error from "../Error/error.js";

const LandingViewMetaData = () => {
  let { id } = useParams();
  const [capa, setCapa] = useState(null)
  console.log("id:", id);
  console.log("Capa:", Capas["id"]);
  console.log("Capas:", Capas);

  /* 
    []
    [1,2,3,"hola","que hace", null, undefined]
    {}
    [
      {id:"dasds"} 0
      {id:"ddasdsd"} 1
    ]
  */

  const searchCapa = () => {
    const cIndex = Capas.findIndex((c)=>c.id === id)
    if(cIndex === -1) return setCapa(null)
    setCapa(Capas[cIndex])
  }

  // listen any change in id
  useEffect(() => {
    if(id) searchCapa()
  }, [id])
  
  return (
    <div style={{ background: "#fff" }}>
      <Layout>
        {id && capa ? (
          <>
              <InformationBlock 
                img={landing.block_2.image}
                altImg={landing.block_2.altImg}
                title={capa.nombreCapa}
                text={capa.metadata}
              />
            <BtnDownload />
          </>
        ) : (
          <Error />
        )}
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  capas: state.capas,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingViewMetaData);
