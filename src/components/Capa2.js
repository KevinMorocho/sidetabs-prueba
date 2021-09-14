import React, { useState, useEffect } from "react";
import { Marker, Popup, GeoJSON, Tooltip } from "react-leaflet";
import ReactDOMServer from 'react-dom/server';
import L from "leaflet";

const Capa2 = ({ capa }) => {
  const [geoJson, setGeoJson] = useState(null);
  // const [features, setFeatures] = useState(null)

  useEffect(() => {
    getWfs();
  }, []);

  const getWfs = async () => {
    const value = await fetch(
      `http://patfa.site:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=${capa.layers}&outputFormat=application/json&SRSNAME=EPSG:4326`
    );

    const data = await value.json();
    console.log("i am geojson", data);
    // console.log("i am features",data.features);
    setGeoJson(data);
    // setFeatures(data.features)
  };
  // console.log(geoJson);
  // console.log(features);

  const urlNormal = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon`;
  const urlGrande = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x`;
  const sizeIconLittle = {
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  };

  const sizeIconBig = {
    iconSize: [30, 46],
    iconAnchor: [15.5, 46],
    popupAnchor: [1, -34],
    shadowSize: [46, 46],
  };

  const colors = {
    1: { color: "red", url: urlGrande, size: sizeIconBig },
    2: { color: "yellow", url: urlNormal, size: sizeIconLittle },
    3: { color: "blue", url: urlNormal, size: sizeIconLittle },
    4: { color: "green", url: urlNormal, size: sizeIconLittle },
    5: { color: "orange", url: urlNormal, size: sizeIconLittle },
    6: { color: "grey", url: urlNormal, size: sizeIconLittle },
    7: { color: "violet", url: urlNormal, size: sizeIconLittle },
    8: { color: "black", url: urlNormal, size: sizeIconLittle },
    9: { color: "gold", url: urlNormal, size: sizeIconLittle },
  };

  const icon = new L.Icon({
    iconUrl: `${colors[capa.id].url}-${colors[capa.id].color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: colors[capa.id].size.iconSize,
    iconAnchor: colors[capa.id].size.iconAnchor,
    popupAnchor: colors[capa.id].size.popupAnchor,
    shadowSize: colors[capa.id].size.shadowSize,
  });

  const onEachFeature = (feature, layer) => {
    // console.log("ON EACH FEATURE", feature);
    // console.log("ON EACH FEATURE", layer);
    layer.setIcon(icon);
    // const tooltipContent = ReactDOMServer.renderToString(
    //   <Tooltip feature={feature} direction="bottom" offset={[0, 20]}>
    //     `${capa.nombreCapa}`
    //   </Tooltip>
    // );
    layer.bindTooltip(`${capa.nombreCapa}`);
    layer.bindPopup(`
        <h6>${capa.nombreCapa}</h6>
                <table class="table table-success">
                   <thead>
                      <th>Nombre</th>
                      <th>X</th>
                      <th>Y</th>
                      <th>Z</th>
                    </thead>
                    <tbody>
                      <tr></tr>
                        <td>${feature.properties.nombre}</td>
                        <td>${feature.properties.x} </td>
                        <td>${feature.properties.y} </td>
                        <td>${feature.properties.z} </td>
                      </tr>
                    </tbody>
                </table>`);
  };

  return (
    <div>
      {/* <Marker position={[51.505, -0.09]} >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}

      {geoJson ? (
        <GeoJSON data={geoJson} onEachFeature={onEachFeature} />
      ) : null}
    </div>
  );
};

export default Capa2;
