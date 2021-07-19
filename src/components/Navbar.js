import React, { Component } from "react";
import Login from "./Login";


//import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          Alertas
          </a>
          <Login/>
        </div>
      </nav>
      </div>
      </>
    );
  }
}