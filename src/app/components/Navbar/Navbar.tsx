import React from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__int">
        <div className="navbar__logo">
          <a> Flexwork </a>
        </div>
        <ul className="navbar__links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#sobre-nosotros">Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
