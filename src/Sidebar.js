import React, { useState } from "react";
import {  FiCompass, FiSettings, FiChevronRight } from "react-icons/fi";
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
          <Visibility />
        </Tab>

        <Tab id="props" header="Transparencia" icon={<FiSettings />}>
          <p>
            <label htmlFor="customRange1" className="form-label">
              Example range
            </label>
            <div className="mt-8 col-6 ">
            <input type="range" className="form-range" id="customRange1" />
            </div>
          </p>
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
