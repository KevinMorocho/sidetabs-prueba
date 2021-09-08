import { useEffect, useState } from "react";
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

function Capa({ capa }) {
  console.log("Soy la capa", capa);
  const map = useMap();
  // const [wms, setWms] = useState(null)
  // const [wfs, setWfs] = useState(null)

  const getWms = async () => {
    const data = await L.Geoserver.wms(capa.urlWMS, {
      layers: capa.layers,
      fitLayer: false, //quita el zoom brusco
    }).addTo(map);
    // setWms(data)
    console.log("WMS", data);
    return data;
  };
  const colors={
    1:{color: "green"},
    2:{color: "blue"},
    3:{color: "yellow"},
    4:{color: "orange"},
    5:{color: "violet"},
    6:{color: "grey"},
    7:{color: "black"},
    8:{color: "gold"}
  };
  const icon = new L.Icon({
    iconUrl:
  `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${colors[capa.id].color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
 
  
  const getWfs = async () => {
    const data = await L.Geoserver.wfs(capa.urlWMS, {
      layers: capa.layers,
      fitLayer: false, //quita el zoom brusco
      onEachFeature: function (feature, layer) {
        layer.setOpacity(0.1);
        //layer.setIcon
        layer.bindPopup(`
        <h4>${capa.nombreCapa}</h4>
        <table class="table table-success">
                   <thead>
                      <th>Nombre</th>
                      <th>X</th>
                      <th>Y</th>
                      <th>Z</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${feature.properties.nombre}</td>
                        <td>${feature.properties.x} </td>
                        <td>${feature.properties.y} </td>
                        <td>${feature.properties.z} </td>
                      </tr>
                    </tbody>
                </table>`);
      },
    }).addTo(map);
    console.log("WFS ", data);
    return data;
  };

  useEffect(() => {
    // let Wms
    // let Wfs
    // async function fetchData() {
    //   Wms = await getWms()
    //   Wfs = await getWfs()
    // }

    // fetchData();

    const Wms = L.Geoserver.wms(capa.urlWMS, {
      layers: capa.layers,
      fitLayer: false, //quita el zoom brusco
    }).addTo(map);
    console.log("algo", Wms._crs);
    // const Wfs=0

    // let treeMarker= L.marker.icon({
    //   icon:'fa-leaf',
    //   markerColor: 'green',
    //   shape: 'square',
    //   prefix: 'fa'
    // })

    // const Wfs = L.Geoserver.wfs(capa.urlWMS, {
    //   layers: capa.layers,

    //   fitLayer: false,//quita el zoom brusco

    //   onEachFeature: function (feature, layer) {
    //     layer.setOpacity(0.1);

    //     layer.bindPopup(`
    //     <h4>${capa.nombreCapa}</h4>
    //     <table class="table table-success">
    //                <thead>
    //                   <th>Nombre</th>
    //                   <th>X</th>
    //                   <th>Y</th>
    //                   <th>Z</th>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>${feature.properties.nombre}</td>
    //                     <td>${feature.properties.x} </td>
    //                     <td>${feature.properties.y} </td>
    //                     <td>${feature.properties.z} </td>
    //                   </tr>
    //                 </tbody>
    //             </table>`);
    //     // layer.setIcon(treeMarker)
    //   },
    // }).addTo(map);

    // // map.fitBounds(Wfs.getBounds());

    // console.log("Datos de la Capa: " + Wfs);

    // fetch(`http://localhost:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=${capa.layers}&outputFormat=application/json`)
    // .then(res=> res.json())
    // .then(a=>{
    //   console.log("Datos",a)
    //   let layer = L.geoJSON(a, {
    //    onEachFeature: function (feature, layer) {
    //      layer.bindPopup(`<h4>${capa.nombreCapa}</h4>
    //       <table class="table table-success">
    //                  <thead>
    //                     <th>Nombre</th>
    //                     <th>X</th>
    //                     <th>Y</th>
    //                     <th>Z</th>
    //                   </thead>
    //                   <tbody>
    //                     <tr>
    //                       <td>${feature.properties.nombre}</td>
    //                       <td>${feature.properties.x} </td>
    //                       <td>${feature.properties.y} </td>
    //                       <td>${feature.properties.z} </td>
    //                     </tr>
    //                   </tbody>
    //               </table>`).openPopup();
    //   },
    //   style: {
    //     fill:"#000000",
    //     fillcolor: "#ff7800",
    //     color:"#000000",
    //     weight: 1,
    //     fillOpacity: 1,
    //     opacity: 1,
    //   }
    //  }).addTo(map)
    // }

    /*
    let Wms
    let Wfs
    async function fetchData() {
      Wms = await L.Geoserver.wms(capa.urlWMS, {
        layers: capa.layers,
      }).addTo(map);

      Wfs = await L.Geoserver.wfs(capa.urlWMS, {
        layers: capa.layers,
        style: {
          fillcolor: "#ff7800",
          fillOpacity: "#0",
          opacity: "0.5",
        },
        onEachFeature: function (feature, layer) {
           layer.bindPopup(capa.nombreCapa);
         },
      }).addTo(map);
      console.log("Datos de la Capa: " + Wms);
    }

    fetchData() */

    // const Wms = L.Geoserver.wms(capa.urlWMS, {
    //   layers: capa.layers,
    // }).addTo(map);
    // const Wfs = L.Geoserver.wfs(capa.urlWMS, {
    //   layers: capa.layers,
    //   style: {
    //     fillcolor: "#ff7800",
    //     fillOpacity: "#0",
    //     opacity: "0.5",
    //   },
    //   onEachFeature: function (feature, layer) {
    //      layer.bindPopup(capa.nombreCapa);
    //    },
    // }).addTo(map);

    // const Wms2 = L.Geoserver.wms(capa.url2WMS, {
    //   layers: capa.layers,
    // }).addTo(map);
    // const Wfs2 = L.Geoserver.wfs(capa.url2WMS, {
    //   layers: capa.layers,
    //   style: {
    //     color: "#ff7800",
    //     fillOpacity: "0",
    //     opacity: "0.5",
    //   },
    //   onEachFeature: function (feature, layer) {
    //     layer.bindPopup(capa.nombreCapa);
    //   },
    // }).addTo(map);
    // console.log("Agrego:" + Wms2);

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

    let legend = L.control({ position: "bottomright" });
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

    return () => {
      console.log("Quito Wms:", Wms);
      // console.log("Quito Wfs:", Wfs);
      if (Wms) {
        console.log("I'm clean up wms");
        map.removeLayer(Wms);
      }
      // if(Wfs) {
      //   console.log("I'm clean up wfs");
      //   map.removeLayer(Wfs)};
    };
  }, []);
  return null;
}
const mapStateToProps = (state) => ({
  capasMostradas: state.capasMostradas,
});

export default connect(mapStateToProps, {})(Capa);
