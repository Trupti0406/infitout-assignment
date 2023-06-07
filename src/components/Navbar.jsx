import React from "react";
import { Link } from "react-router-dom";
import logo from "../tracktrades_logo 1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="ms-md-4" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 ms-md-5 gap-md-3"
            style={{ fontSize: "14px" }}
          >
            <li className="nav-item">
              <Link className="nav-link text-black " aria-current="page">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-primary"
                aria-current="page"
              >
                Option chain
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link text-black" aria-current="page">
                Strategy builder
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link text-black " aria-current="page">
                Positions
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link text-black" aria-current="page">
                Order book
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column flex-md-row list-unstyled justify-content-start justify-content-md-between gap-2 gap-md-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">
                <div className="d-flex flex-column align-items-md-end">
                  <div style={{ fontSize: "10px", color: "#4a4a4a" }}>
                    NIFTY
                  </div>
                  <div>
                    <span
                      className="me-2 text-success"
                      style={{ fontSize: "10px" }}
                    >
                      {" "}
                      0.35%
                    </span>
                    <span className="fs-6 fw-semibold">18,245.32</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">
                <div className="d-flex flex-column align-items-md-end">
                  <div style={{ fontSize: "10px", color: "#4a4a4a" }}>
                    BANKNIFTY
                  </div>
                  <div>
                    <span
                      className="me-2 text-success"
                      style={{ fontSize: "10px" }}
                    >
                      {" "}
                      0.7%
                    </span>
                    <span className="fs-6 fw-semibold">3,156.1</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page">
                <div className="d-flex flex-column align-items-md-end">
                  <div style={{ fontSize: "10px", color: "#4a4a4a" }}>
                    INDIA VIX
                  </div>
                  <div>
                    <span
                      className="me-2 text-danger"
                      style={{ fontSize: "10px" }}
                    >
                      {" "}
                      -10.9%
                    </span>
                    <span className="fs-6 fw-semibold">12.12</span>
                  </div>
                </div>
              </Link>
            </li>
          </div>
          <div className="d-flex mt-2 mt-md-0 ms-md-5 ps-md-5" role="button">
            <li className="nav-item dropdown list-unstyled">
              <Link className="nav-link dropdown-toggle text-black">
                Profile
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
