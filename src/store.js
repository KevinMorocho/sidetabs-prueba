import { createStore } from "redux";
const capaUrl = "http://localhost:8080/geoserver/wms"; //servicio de consumo para host
const capaUrl2 = "http://192.168.1.2:8080/geoserver/wms"; //servicio de consmo para los clientes invitados
const capaUrl3 = "http://192.168.1.2:8080/geoserver/wms"; //servicio de consmo para los clientes invitados
const Capas = [
  {
    id: 1,
    nombreCapa: "Coordenadas de Estaciones",
    visible: false,
    url: capaUrl,
    layers: `pafta:coord_estaciones`,
    urla: capaUrl2,
    shapeFile: "dirección de capa 1",
    metadata: `Capa 1 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 2,
    nombreCapa: "Plantas La Belleza",
    visible: false,
    url: capaUrl,
    layers: `pafta:plantas_la_belleza`,
    urla: capaUrl2,
    shapeFile: "dirección de capa 2",
    metadata: `Capa 2 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 3,
    nombreCapa: "Plantas Puerto Murialdo - Loreto",
    visible: false,
    url: capaUrl,
    layers: `pafta:plantas_puertomurialdo`,
    urla: capaUrl2,
    shapeFile: "dirección de capa 3",
    metadata: `Capa 3 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 4,
    nombreCapa: "Plantas San José de Dahuano - Loreto",
    visible: false,
    url: capaUrl,
    layers: `pafta:plantas_sanjosedahuano`,
    urla: capaUrl2,
    shapeFile: "dirección de capa 4",
    metadata: `Capa 4 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 5,
    nombreCapa: "Plantas Unió Milagreña - Sacha",
    visible: false,
    url: capaUrl,
    layers: `pafta:plantas_union_milagrena_sacha`,
    urla: capaUrl2,
    shapeFile: "dirección de capa 5",
    metadata: `Capa 5 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 6,
    nombreCapa: "Plantas INIAP Zona 1",
    visible: false,
    url: capaUrl,
    layers: `pafta:zona1`,
    urla: capaUrl2,
    shapeFile: "dirección de capa 6",
    metadata: `Capa 6 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
      Nulla facere dolorum accusantium beatae quo, blanditiis, fugiat alias veniam incidunt enim ut aperiam, autem omnis exercitationem animi? Laborum nihil nam beatae eos illum rerum nostrum sapiente id necessitatibus aliquam?
      Soluta at unde reprehenderit necessitatibus quia architecto mollitia eaque nulla voluptatibus magni quibusdam officiis impedit obcaecati aperiam ad voluptates a suscipit provident sunt vel veniam delectus, earum itaque! Ex, cumque.
      Ullam, quia soluta? Tenetur, sed molestiae? Ab dolores assumenda optio, quia beatae quidem fugit vel itaque qui sit dolorum cum aspernatur fuga excepturi voluptas illum consequuntur vitae asperiores. Quae, dignissimos!`,
  },
  {
    id: 7,
    nombreCapa: "Plantas INIAP Zona 2",
    visible: false,
    url: capaUrl,
    layers: `pafta:zona2`,
    urla: capaUrl2,
    shapeFile: "dirección de capa 7",
    metadata: `Capa 7 Lorem  ipsum dolor sit amet consectetur adipisicing elit. Error, consequuntur blanditiis ipsa, pariatur veniam debitis provident autem perspiciatis voluptate nihil optio repellendus quisquam recusandae libero officia voluptas enim fugit quae?
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
