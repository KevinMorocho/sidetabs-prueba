import Layout from "./components/layout";
import InformationBlock from "./components/information";
import { landing } from "../utils/landing";
import { connect } from "react-redux";

const LandingViewMetaData = () => {
  return (
    <div className="" style={{ background: "#fff" }}>
      <Layout>
        <InformationBlock
          img={landing.block_2.image}
          altImg={landing.block_2.altImg}
          title={landing.block_2.title}
          text={landing.block_2.text}
        />
        <div className="" />
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  capas: state.capas,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LandingViewMetaData);
