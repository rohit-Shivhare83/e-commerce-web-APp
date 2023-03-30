import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-middle" id="navbarNav">
            <Nav />
          </div>
        </div>
      </nav>
      {/* <NavLink to="/"></NavLink> */}
      <hr className="m-0 p-0" />
    </header>
  );
};

export default Header;
