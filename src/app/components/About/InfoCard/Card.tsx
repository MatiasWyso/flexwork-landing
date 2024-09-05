import React from "react";
import "./Card.scss";

const Card: React.FC = () => {
  return (
    <div className="wrap__card">
      <div className="card">
        <div className="card__image">
          <img src="https://forbes.es/wp-content/uploads/2022/08/Never-Gonna-Give-You-Up-Rick-Astley.jpg" alt="team working" />
        </div>
         <div className="card__content">    
            <h2>Flexwork Upskilling to Placement</h2>    
            <div className="card__section"> 
              <div className="card__item">
              <div className="card__icon">
                <p>icono</p>
              </div>
              <div className="card__text"> 
                <h3>Marketplace de microproyectos</h3>
                <p>Ofrecemos a las empresas una forma rápida y ágil de cubrir sus
                necesidades de talento especializado, sin comprometer su flujo de trabajo.</p>
              </div>
              </div>
              <div className="card__item">
              <div className="card__icon">
                <p>icono</p>
              </div>
              <div className="card__text"> 
                <h3>Talento profesional</h3>
                <p> Las empresas pueden acceder a profesionales con experiencia corporativa,
                lo que asegura un alto nivel de calidad en los proyectos realizados.</p>
              </div>
              </div>
              <div className="card__item">
              <div className="card__icon">
                <p>icono</p>
              </div>
              <div className="card__text"> 
                <h3>Conexión global y flexibilidad laboral</h3>
                <p>Ofrecemos a las empresas una forma rápida y ágil de cubrir sus
                necesidades de talento especializado, sin comprometer su flujo de trabajo.</p>
              </div>
              </div>
              <div className="card__item">
              <div className="card__icon">
                <p>icono</p>
              </div>
              <div className="card__text"> 
                <h3>Impacto social y desarrollo profesional</h3>
                <p> Flexwork promueve la igualdad de oportunidades y el desarrollo profesional,
                ofreciendo a los profesionales oportunidades para adquirir nuevas habilidades
                y expandir su red de contactos.</p>
              </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
