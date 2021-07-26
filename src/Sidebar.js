import React, { useState } from "react";
import { FiHome, FiChevronLeft, FiCompass, FiSettings } from "react-icons/fi";
import { Sidebar, Tab } from "./react-leaflet-sidetabs";
import { Visibility } from "./components/Visibility";
import {
  MapContainer,
  TileLayer,
  ScaleControl,
  LayersControl,
  FeatureGroup,
  Marker,
} from "react-leaflet";
import Capa from "./components/Capa1";
import Capa2 from "./components/Capa2";
import { MetaData } from "./components/MetaData";
import { connect } from "react-redux";

const SidebarComponent = ({ capas, map, show1, setShow1, show2, setShow2 }) => {
  
  const [openTab, setOpenTab] = useState("home");

  const seleccionCapa1 = (clickeado) => {
   /* if (clickeado) {
      mostrarCapa1();
    } else {
      ocultarCapa1();
    }*/
    setShow1(clickeado)
  };

  const seleccionCapa2 = (clickeado) => {
    console.log(clickeado)
    setShow2(clickeado)
    // if (clickeado) {
    //   mostrarCapa2();
    // } else {
    //   ocultarCapa2();
    // }
  };

  const onClose = () => {
    setOpenTab(false);
  };

  const onOpen = (id) => {
    setOpenTab(id);
  };
  const [map1, setMap1] = useState(null);

  return (
    <section className="Sidebar">
      <Sidebar
        map={map}
        position="left"
        collapsed={!openTab}
        selected={openTab}
        closeIcon={<FiChevronLeft />}
        onClose={onClose}
        onOpen={onOpen}
        panMapOnChange
        rehomeControls
      >
        <Tab id="home" header="Home" icon={<FiHome />} active>
          <p>
            This sidebar is adapted from{" "}
            <a
              href="https://github.com/eferhatg/react-leaflet-sidetabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-leaflet-sidetabs
            </a>{" "}
            to be compatible with react-leaflet version 3.
          </p>
          <p>
            Typically the <code>&lt;Sidebar&gt;</code> component is writen as a
            sibling of the <code>&lt;MapContainer&gt;</code> component:
          </p>
          <code className="codeblock">
            <pre>
              {`
               <App>
                  <MapContainer/>
                  <SideBar />
               </App>
               `}
            </pre>
          </code>
          <p>
            If you want to be able to influence the map from within the sidebar
            tabs, you must{" "}
            <a
              href="https://react-leaflet-v3.now.sh/docs/example-external-state"
              target="_blank"
              rel="noopener noreferrer"
            >
              externalize the map context
            </a>
            . This is also required if you want the map to adjust its center
            when the sidebar opens as closes, as it does in this example.
          </p>
          <p>
            <button
              className="checkoutpropsbutton"
              onClick={() => setOpenTab("props")}
            >
              Check out the second tab&nbsp;
            </button>
            to see the <code>props</code> for this component.
          </p>
          <p>
            For more react-leaflet-v3 custom components, visit my{" "}
            <a
              href="https://github.com/slutske22/react-leaflet-custom-components"
              target="_blank"
              rel="noopener noreferrer"
            >
              custom components library
            </a>
            .
          </p>
        </Tab>
        <Tab id="props" header="Capas" icon={<FiCompass />}>
          <div className="form-check">
            <Visibility
                description="1"
                isChecked={show1}
                callback={(checked) => seleccionCapa1(checked)}
              />
              { show1 && (
              <MetaData description="Contenido Capa 1"/>
          )}
          </div>
          <div className="form-check">
            <Visibility
              description="2"
              isChecked={show2}
              callback={(checked) => seleccionCapa2(checked)}
            />
            { show2 && (
              <MetaData description="Contenido Capa 2"/>
          )}
          </div>
        </Tab>
        
        <Tab
          id="settings"
          header="Settings"
          icon={<FiSettings />}
          anchor="bottom"
        >
          <p>
            The button for this tab can be anchored to the bottom by using the{" "}
            <code>anchor="bottom"</code> props on the <code>Tab</code> component
          </p>
        </Tab>
      </Sidebar>
    </section>
  );
};
const mapStateToProps = state =>({
  initialCapas: state.initialCapas
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent)