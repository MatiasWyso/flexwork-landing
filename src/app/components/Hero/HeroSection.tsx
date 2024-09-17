import React from "react";
import "./Hero.scss";
import Button from "../Atoms/ButtonReflex/ButtonReflex";
import ButtonMain from "../Atoms/ButtonMain/ButtonMain"
import Brand from "./HeroBrand/HeroBrand";

const Hero: React.FC = () => {
  return (
    <section className="hero__wrap">
      <div className="hero__content">
        <div className="hero__title">
          <h1> Conectando Proyectos con Talento Especializado </h1>
        </div>
        <div className="hero__description">
          <p>
            Flexwork conecta empresas con profesionales especializados para
            resolver proyectos de manera rápida y eficiente. Encuentra el
            talento que tu negocio necesita para crecer.
          </p>
        </div>

        <div className="hero__button">
          <ButtonMain />
        </div>
      </div>

      <div className="hero__imagewrap">
        <div>
          <Brand />
        </div>
      </div>
    </section>
  );
};

export default Hero;
