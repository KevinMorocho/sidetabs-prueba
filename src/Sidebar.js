import React, { useState } from "react";
import { FiHome, FiChevronLeft, FiCompass, FiSettings } from "react-icons/fi";
import { Sidebar, Tab } from "./react-leaflet-sidetabs";
import { Visibility } from "./components/Visibility";
import { MapContainer, TileLayer, ScaleControl, LayersControl, FeatureGroup, Marker } from 'react-leaflet'
import Capa1 from "./components/Capa1";
import Capa2 from "./components/Capa2";
import Map1 from "./components/Map1";

const SidebarComponent = ({ map }) => {
  const [openTab, setOpenTab] = useState("home");
  const [mostrarCapa1Pantalla, setMostrarCapa1Pantalla] = useState(false);
  const [mostrarCapa2Pantalla, setMostrarCapa2Pantalla] = useState(false);

  const mostrarCapa1 = () => {
    setMostrarCapa1Pantalla(true);
    //aquí va el llavado para que se muestre la capa
  };

  const mostrarCapa2 = () => {
    setMostrarCapa2Pantalla(true);
    //aquí va el llavado para que se muestre la capa
  };

  const ocultarCapa1 = () => {
    setMostrarCapa1Pantalla(false);
  };

  const ocultarCapa2 = () => {
    setMostrarCapa2Pantalla(false);
  };

  const seleccionCapa1 = (clickeado) => {
    if (clickeado) {
      mostrarCapa1();
    } else {
      ocultarCapa1();
    }
  };

  const seleccionCapa2 = (clickeado) => {
    if (clickeado) {
      mostrarCapa2();
    } else {
      ocultarCapa2();
    }
  };

  const onClose = () => {
    setOpenTab(false);
  };

  const onOpen = (id) => {
    setOpenTab(id);
  };
  const [map1, setMap1] = useState(null)


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
              isChecked={mostrarCapa1Pantalla}
              callback={(checked) => setMostrarCapa1Pantalla(checked)}
            />
          </div>
          <div className="form-check">
            <Visibility
              description="2"
              isChecked={mostrarCapa2Pantalla}
              callback={(checked) => seleccionCapa2(checked)}
            />
          </div>
          {
            setMostrarCapa1Pantalla ? (
              <Map1/>
            ):null
          }
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

export default SidebarComponent;
