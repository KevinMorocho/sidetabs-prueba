import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Map from "./Map";
import Sidebar from "./Sidebar";
import Navbar from "./components/Navbar";
import LandingView from "./components/Landing";
import LandingViewMetaData from "./components/Metadata/index";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.scss";

export default function App() {
  const [map, setMap] = useState(null);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <LandingView />
            </Route>
            <Route path="/mapa" exact>
              {map && (
                <Sidebar
                  show1={show1}
                  setShow1={setShow1}
                  show2={show2}
                  setShow2={setShow2}
                  map={map}
                />
              )}
              <Map show1={show1} show2={show2} setMap={setMap} />
            </Route>
            <Route path="/metadata">
              <LandingViewMetaData />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
