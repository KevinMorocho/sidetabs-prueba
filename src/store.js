import { createStore } from "redux";
const capaUrlWMS = "http://patfa.site:8080/geoserver/wms"; //servicio de consumo para host
// const capaUrl2WMS = "http://localhost:62240/geoserver/wms"; //servicio de consmo para los clientes invitados
const capaUrlWFS = "http://patfa.site:8080/geoserver/wfs"; //servicio de consumo para host
// const capaUrl2WFS = "http://localhost:62240/geoserver/wfs"; //servicio de consmo para los clientes invitados
//const capaUrl3 = "http://192.168.1.2:80{{ 80/g }}eoserver/wfs"; //servicio de consmo para los clientes invitados

var urlParte2 = "?service=wfs&version=2.0.0&request=GetFeature&typeNames=";
var urlParte4 = "&outputFormat=application/json";

// /metadata/2
// http://patfa.site:8080/geoserver/wfs?service=wfs&version=2.0.0&request=GetFeature&typeNames=patfa:zona2&outputFormat=application/json
export const Capas = [
  {
    id: 1,
    nombreCapa: "Coordenadas de Estaciones",
    visible: false,
    urlWMS: capaUrlWMS,
    urlWFS: capaUrlWFS,
    layers: `patfa:coord_estaciones`,
    // url2WMS: capaUrl2WMS,
    // url2WFS: capaUrl2WFS,
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
    urlWMS: capaUrlWMS,
    urlWFS: capaUrlWFS,
    layers: `patfa:plantas_la_belleza`,
    // url2WMS: capaUrl2WMS,
    // url2WFS: capaUrl2WFS,
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
    urlWMS: capaUrlWMS,
    urlWFS: capaUrlWFS,
    layers: `patfa:plantas_puertomurialdo`,
    // url2WMS: capaUrl2WMS,
    // url2WFS: capaUrl2WFS,
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
    urlWMS: capaUrlWMS,
    urlWFS: capaUrlWFS,
    layers: `patfa:plantas_sanjosedahuano`,
    // url2WMS: capaUrl2WMS,
    // url2WFS: capaUrl2WFS,
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
    urlWMS: capaUrlWMS,
    urlWFS: capaUrlWFS,
    layers: `patfa:plantas_union_milagrena_sacha`,
    // url2WMS: capaUrl2WMS,
    // url2WFS: capaUrl2WFS,
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
    urlWMS: capaUrlWMS,
    urlWFS: capaUrlWFS,
    layers: `patfa:zona1`,
    // url2WMS: capaUrl2WMS,
    // url2WFS: capaUrl2WFS,
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
    urlWMS: capaUrlWMS,
    urlWFS: capaUrlWFS,
    layers: `patfa:zona2`,
    // url2WMS: capaUrl2WMS,
    // url2WFS: capaUrl2WFS,
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
    const capasM = state.capasMostradas.concat(action.capa);

    // sort
    capasM.sort((a,b)=>{
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

    return {
      ...state,
      capasMostradas: capasM,
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
