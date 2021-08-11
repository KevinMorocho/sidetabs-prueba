import { useEffect } from "react";
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

  useEffect(() => {
    /*var Wfs =  L.Geoserver.wfs(capa.urlWMS, {
      layers: capa.layers,
      style: {
        color: "#ff7800",
        fillOpacity: "0",
        opacity: "0.5",
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(capa.nombreCapa);
      },
    });
    console.log("WFS", Wfs)

    let peticion = fetch(`http://localhost:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=${capa.layers}&outputFormat=application/json`)
    console.log("soy la información", peticion)

    //map.fitBounds(Wfs.getBounds()); // <-----
    Wfs.addTo(map);
    
    var Wfs2 = L.Geoserver.wfs(capa.url2WMS, {
      layers: capa.layers,
      style: {
        color: "#ff7800",
        fillOpacity: "0",
        opacity: "0.5",
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(capa.nombreCapa);
      },
    });

    //map.fitBounds(Wfs2.getBounds());
    console.log("WFS2", Wfs2)*/
    //
    // Wms2.addTo(map);
    
    const Wms =  L.Geoserver.wms(capa.urlWMS, {
      layers: capa.layers,
    }).addTo(map);
    // const Wfs=0
    const Wfs = L.Geoserver.wfs(capa.urlWMS, {
      layers: capa.layers,
      fitLayer:false,
      onEachFeature: function (feature, layer) {
          layer.bindPopup(`<table>
                  <tr>
                   <thead>
                      <th>Nombre</th>
                      <th>X</th>
                      <th>Y</th>
                      <th>Z</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>${ feature.properties.nombre}</td>
                        <td>${feature.properties.x} </td>
                        <td>${feature.properties.y} </td>
                        <td>${feature.properties.z} </td>
                      </tr>
                    </tbody>
                  </tr>
                </table>`);
        },
    }).addTo(map);
    
    // map.fitBounds(Wfs.getBounds());

    console.log("Datos de la Capa: " + Wfs);


    // fetch(`http://localhost:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=${capa.layers}&outputFormat=application/json`)
    // .then((res)=>{
    //   console.log(res)
    //   return res.json()
    // })
    //   .then((a)=>{
    //      console.log("A",a)
    //   let layer = L.geoJSON(a,{
     //    onEachFeature: function (feature, layer) {
     //      layer.bindPopup(`<table>
     //        <tr>
     //            <thead>
     //              <th>Nombre</th>
     //              <th>X</th>
     //              <th>Y</th>
     //              <th>Z</th>
     //            </thead>
     //            <tbody>
     //              <tr>
     //              <td>feature.properties.nombre</td>
     //              <td>feature.properties.x </td>
     //              <td>feature.properties.y </td>
     //              <td>feature.properties.z </td>
     //              </tr>
     //            </tbody>
     //        </tr>
     //      </table>`).openPopup();
     //    },
     //     style: {
    //       fill:"#000000",
    //       fillcolor: "#ff7800",
    //       color:"#000000",
    //       weight: 1,
    //       fillOpacity: 1,
    //       opacity: 1,
    //     }
     //  }).addTo(map)
     //  console.log("me añado")
     //  // map.fitBounds(layer.getBounds()); 
     //  })
    // catch((e)=>{console.log(e)})


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
      // console.log("Quito:" + Wms);
      map.removeLayer(Wms);
      map.removeLayer(Wfs);
      // map.removeLayer(Wms2);
      // map.removeLayer(Wfs2);

      //map.removeLayer(Wfs);
      //map.removeLayer(Wfs2);
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
