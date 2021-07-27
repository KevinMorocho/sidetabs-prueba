import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useMap } from "react-leaflet";
import { connect } from "react-redux";
import L from "leaflet";
import "leaflet-geoserver-request/src/L.Geoserver.js";

function getColor(d) {
  return d === "Road Surface"
    ? "#de2d26"
    : d === "Signage"
    ? "#377eb8"
    : d === "Line Markings"
    ? "#4daf4a"
    : d === "Roadside Hazards"
    ? "#984ea3"
    : "#ff7f00";
}

function style(feature) {
  return {
    weight: 1.5,
    opacity: 1,
    fillOpacity: 1,
    radius: 6,
    fillColor: getColor(feature.properties.TypeOfIssue),
    color: "grey",
  };
}

function Capa({capa}) {
  console.log("Soy la capa", capa)
  const map = useMap();
  useEffect(() => {
    const Wms = L.Geoserver.wms(capa.url, {
      layers: capa.layers,
    }).addTo(map);
    console.log(Wms);
    const Wms2 = L.Geoserver.wms(capa.urla, {
      layers: capa.layers,
    }).addTo(map);

    /*const layerLegend = L.Geoserver.legend(
      "http://192.168.1.2:8080/geoserver/wms",
      {
        layers: `topp:tasmania_roads`,
      }
    ).addTo(map);
    const layerLegend2 = L.Geoserver.legend(
      "http://localhost:58141/geoserver/wms",
      {
        layers: `topp:tasmania_roads`,
        position: "bottomright",
      }
    ).addTo(map);*/
    //console.log(layerLegend2);
    // let div;
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function (map) {
      let div = L.DomUtil.create("div", "info legend");
      const labels = ["<strong>Categories</strong>"],
        categories = [
          "Road Surface",
          "Signage",
          "Line Markings",
          "Roadside Hazards",
          "Other",
        ];

      for (var i = 0; i < categories.length; i++) {
        function getColor(d) {
          return d === "Road Surface"
            ? "#de2d26"
            : d === "Signage"
            ? "#377eb8"
            : d === "Line Markings"
            ? "#4daf4a"
            : d === "Roadside Hazards"
            ? "#984ea3"
            : "#ff7f00";
        }
        div.innerHTML += labels.push(
          '<i className="circle" style="background:' +
            getColor(categories[i]) +
            '"></i> ' +
            (categories[i] ? categories[i] : "+")
        );
      }
      div.innerHTML = labels.join("<br>");
      return div;
    };
    // legend.addTo(map);

    //     var legend = L.control({position: 'bottomleft'});
    //     legend.onAdd = function (map) {

    //     var div = L.DomUtil.create('div', 'info legend');
    //     const labels = ['<strong>Categories</strong>'],
    //     categories = ['Road Surface','Signage','Line Markings','Roadside Hazards','Other'];
    //     function getColor(d) {
    //         return d === "Road Surface"
    //           ? "#de2d26"
    //           : d === "Signage"
    //           ? "#377eb8"
    //           : d === "Line Markings"
    //           ? "#4daf4a"
    //           : d === "Roadside Hazards"
    //           ? "#984ea3"
    //           : "#ff7f00";
    //       }
    //     for (var i = 0; i < categories.length; i++) {
    //             div.innerHTML +=
    //             labels.push(
    //                 '<i style="background:' + getColor(categories[i] + 1) + '"></i> ' +
    //                 (categories[i] ? categories[i] : '+'));
    //         }

    //         div.innerHTML = labels.join('<br>');
    //     return div;
    // };

    //legend.addTo(map);
    return () => {
      map.removeLayer(Wms);
      map.removeLayer(Wms2);
      /*map.removeLayerLegend(layerLegend);
      map.removeLayerLegend(layerLegend2);*/
      // legend.

      // const container = document.getElementById('alert-holder')
      // ReactDOM.unmountComponentAtNode(container);

      // remove legend
      // aqui se quitan las cosas que se agregan al mapa
      // map.removeLayer(layerLegend2)
    };
  }, []);
  return null;
}
const mapStateToProps = (state) => ({
  capasMostradas: state.capasMostradas,
});

export default connect(mapStateToProps, {})(Capa);
