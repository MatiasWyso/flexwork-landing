import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/company/flexwork-latam"
        className="linkedin-link"
        target="_blank"
        rel="noopener noreferrer"
        >
       Flexwork
      </a>
      <p> &copy; Todos los derechos reservados</p>
      <p>2024</p>
    
    </footer>
  );
};

export default Footer;
