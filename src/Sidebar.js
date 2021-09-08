import React, { useState } from "react";
import { FiCompass, FiSettings, FiChevronRight } from "react-icons/fi";
import { Sidebar, Tab } from "./react-leaflet-sidetabs";
import Visibility from "./components/Visibility";
import { connect } from "react-redux";

const SidebarComponent = ({ map }) => {
  const [openTab, setOpenTab] = useState("home");

  const onClose = () => {
    setOpenTab(false);
  };

  const onOpen = (id) => {
    setOpenTab(id);
  };
  //const [map1, setMap1] = useState(null);

  return (
    <section className="Sidebar">
      <Sidebar
        map={map}
        position="right"
        collapsed={!openTab}
        selected={openTab}
        closeIcon={<FiChevronRight />}
        onClose={onClose}
        onOpen={onOpen}
        panMapOnChange
        rehomeControls
      >
        <Tab id="home" header="Capas" icon={<FiCompass />} active>
          <br />
          <div className="row ">
        <div className="col-sm-auto">
        <Visibility />
        </div>
        </div>
        </Tab>
      </Sidebar>
    </section>
  );
};
const mapStateToProps = (state) => ({
  capasPorMostrar: state.capasPorMostrar,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
