import React from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__int">
        <div className="navbar__logo">
          <a> Flexwork </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
