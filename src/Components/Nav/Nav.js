import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="navbar-nav ms-auto  align-middle">
      <li className="nav-item align-middle px-3">
        <NavLink to="/" className="nav-link active" aria-current="page">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
          className="nav-link active px-3"
          aria-current="page"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/products"
          className="nav-link active px-3"
          aria-current="page"
        >
          Product
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className="nav-link active px-3"
          aria-current="page"
        >
          Contact
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/cart "
          className="nav-link active px-3"
          aria-current="page"
        >
          <i className="fa-solid fa-cart-shopping  fs-3">
            <sup className="cart-length border border-danger p-1 rounded-circle bg-info">
              00
            </sup>
          </i>
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
