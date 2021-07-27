import { createStore } from "redux";
const capaUrl = "http://localhost:8080/geoserver/wms"; //servicio de consumo para host
const capaUrl2 = "http://localhost:55512/geoserver/wms"; //servicio de consmo para los clientes invitados
const Capas = [
  {
    id: 1,
    nombreCapa: "Capa 1",
    visible: false,
    url: capaUrl,
    layers: `topp:tasmania_roads`,
    urla: capaUrl2,
    shapeFile: "dirección de capa1",
    metadata: `Capa 1 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 2,
    nombreCapa: "Capa 2",
    visible: false,
    url: capaUrl,
    layers: `	topp:tasmania_water_bodies`,
    urla: capaUrl2,
    shapeFile: "dirección de capa1",
    metadata: `Capa 2 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 3,
    nombreCapa: "Coordenadas de Estaciones",
    visible: false,
    url: capaUrl,
    layers: `	pafta:Coord_Estaciones`,
    urla: capaUrl2,
    shapeFile: "dirección de capa1",
    metadata: `Capa 2 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
];

const initialStore = {
  isLogin: false,
  capas: Capas,
  capasPorMostrar: Capas,
  capasMostradas: [],
};
const reducerUser = (state = initialStore, action) => {
  if (action.type === "AGREGAR_CAPA") {
    return {
      ...state,
      capasMostradas: state.capasMostradas.concat(action.capa),
      capasPorMostrar: state.capasPorMostrar.filter(
        (c) => c.id !== action.capa.id
      ),
    };
  }
  if (action.type === "QUITAR_CAPA") {
    return {
      ...state,
      capasMostradas: state.capasMostradas.filter(
        (c) => c.id !== action.capa.id
      ),
      capasPorMostrar: state.capasPorMostrar.concat(action.capa),
    };
  }
  if (action.type === "AGREGAR_METADATA") {
    return {
      ...state,
      capasMostradas: state.capasMostradas.concat(action.capa),
      capasPorMostrar: state.capasPorMostrar.filter(
        (c) => c.id !== action.capa.id
      ),
    };
  }
  if (action.type === "QUITAR_METADATA") {
    return {
      ...state,
      capasMostradas: state.capasMostradas.filter(
        (c) => c.id !== action.capa.id
      ),
      capasPorMostrar: state.capasPorMostrar.concat(action.capa),
    };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      isLogin: true,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      isLogin: false,
    };
  }

  return state;
};
export default createStore(reducerUser);
