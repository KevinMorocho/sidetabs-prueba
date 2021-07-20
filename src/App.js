import React, { useState } from "react";
import Map from './Map'
import Sidebar from './Sidebar'
import Navbar from './components/Navbar'
import "./styles.scss";

export default function App() {

  const [map, setMap] = useState(null)
  
  const[show1, setShow1]=useState(false)
  const[show2, setShow2]=useState(false)

  return (
    <div className="App">
      <Navbar/>
      {map && <Sidebar show1={show1} setShow1={setShow1} show2={show2} setShow2={setShow2} map={map} />}
      <Map show1={show1} show2={show2} setMap={setMap} />
    </div>
  );

}
