import React from "react";
import "./Hero.scss";
import Button from "../Atoms/ButtonReflex/ButtonReflex";
import Test from "../test/Test";

const Hero: React.FC = () => {
  return (
    <section className="hero__wrap">
      <div className="hero__content">
        <div className="hero__title">
          <h1>Conectamos Profesionales con Empresas</h1>
        </div>
        <div className="hero__description">
          <p>
            
            Flexwork está a punto de revolucionar la forma en que los
            profesionales y las empresas se conectan para proyectos específicos
            y de corta duración. 
          </p>
        </div>

        <div className="hero__button">
          <Button />
        </div>
      </div>
      
      <div className="hero__imagewrap">
        <div>
          <Test />
        </div>
      </div>
    </section>
  );
};

export default Hero;
