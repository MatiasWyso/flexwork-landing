import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 </p>
      <a
        href="https://www.linkedin.com/company/flexwork-latam"
        className="linkedin-link"
        target="_blank"
        rel="noopener noreferrer"
      >
       @Flexwork.
      </a>
      <p> Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
