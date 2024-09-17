import React from "react";
import "./Hero.scss";
import Button from "../Atoms/ButtonReflex/ButtonReflex";
import ButtonMain from "../Atoms/ButtonMain/ButtonMain";
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
            ¿Listo para aumentar tus ingresos? Flexwork te conectará con
            proyectos que se adapten a ti y te ayudará a lograr tus objetivos
            financieros. ¡No te pierdas esta oportunidad!
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
