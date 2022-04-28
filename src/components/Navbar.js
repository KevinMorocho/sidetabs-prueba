import React, { Component } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

//import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-success nav-hot-fix"
      // style={{ height: "8vh" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-pin-map-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
            />
            <path
              fillRule="evenodd"
              d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
            />
          </svg>{" "}
          ALERTAS TEMPRANAS
        </Link>

        {/* <Link className="me-auto mb-2 mb-lg-0 bg-warning btn btn-outline-success me-2" to="/datos">
          Datos
        </Link> */}
        <div className="nav justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="me-auto mb-2 mb-lg-0 bg-warning btn btn-outline-success me-2" to="/datos">
                  Datos
                </Link>
              </li>
              <li className="nav-item">
                <Login className="nav-link active" />
              </li>
            </ul>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
