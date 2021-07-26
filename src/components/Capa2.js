import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-geoserver-request/src/L.Geoserver.js";

function Capa2() {
  const map = useMap();
  useEffect(() => {
    const Wms = L.Geoserver.wms("http://192.168.1.2:8080/geoserver/wms", {
      layers: `	topp:tasmania_water_bodies`,
    }).addTo(map);
    const Wms2 = L.Geoserver.wms("http://localhost:54462/geoserver/wms", {
      layers: `topp:tasmania_water_bodies`,
    }).addTo(map);
   /*const layerLegend=L.Geoserver.legend("http://192.168.1.2:8080/geoserver/wms", {
        layers: `topp:tasmania_water_bodies`,
      }).addTo(map);
    const layerLegend2=L.Geoserver.legend("http://localhost:58141/geoserver/wms", {
        layers: `topp:tasmania_water_bodies`,
      }).addTo(map);*/

      return () => {
        map.removeLayer(Wms);
        map.removeLayer(Wms2);
       /* map.removeLayer(layerLegend);
        map.removeLayer(layerLegend2);*/
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

export default Capa2;
