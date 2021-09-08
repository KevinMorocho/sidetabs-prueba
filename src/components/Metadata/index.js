import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Layout from "./components/layout";
import InformationBlock from "./components/information";
import { landing } from "../utils/landing";
import BtnDownload from "../BtnDownload";
import { Capas } from "../../store.js";
import Error from "../Error/error.js";

const LandingViewMetaData = () => {
  let { id } = useParams();

  return (
    <div style={{ background: "#fff" }}>
      <Layout>
        {id && Capas[id - 1] ? (
          <>
              <InformationBlock 
                img={landing.block_2.image}
                altImg={landing.block_2.altImg}
                title={Capas[id - 1].nombreCapa}
                text={Capas[id - 1].metadata}
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
