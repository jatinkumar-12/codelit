import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/main/Codelit_Logo.png";

export default function Navbar() {
  return (
    <header id="Navbar">
      <nav>
        <NavLink className="nav__logo" to="/">
          <img src={Logo} width="124px" height="40px" alt="nav__logo-image" />
        </NavLink>

        <div className="nav__box">
          <div className="nav__linkbox">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
            <NavLink to="/work" className="nav__link">
              Work
            </NavLink>
            <NavLink to="/codelit" className="nav__link">
              Codelit
            </NavLink>
            <NavLink to="/contact" className="nav__link">
              Contact
            </NavLink>
          </div>

          <p className="nav__pera">
            Based in India &nbsp;&nbsp; Designing worldwide
          </p>
        </div>
      </nav>
    </header>
  );
}
