import { createStore } from "redux";
const capaUrl="http://localhost:8080/geoserver/wms";//servicio de consumo para host
const capaUrl2="http://localhost:8080/geoserver/wms";//servicio de consmo para los clientes invitados

const initialStore = {
  Capas: [
    {
      id: 1,
      url: capaUrl,
      layers: `topp:tasmania_roads`,
      urla: capaUrl2,
      shapeFile: "",
      checked: false,
    },
    {
      id: 2,
      url: capaUrl,
      layers: `	topp:tasmania_water_bodies`,
      urla: capaUrl2,
      shapeFile: "",
      checked: false,
    },
  ],
};
const reducerUser = (state = initialStore, action) => {
  return state;
};
export default createStore(reducerUser);
