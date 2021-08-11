import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
                  map={map}
                />
              )}
              <Map setMap={setMap} />
            </Route>
            <Route path="/metadata/:id">
              <LandingViewMetaData />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
