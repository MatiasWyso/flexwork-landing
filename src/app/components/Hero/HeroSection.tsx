import React from "react";
import "./Hero.scss";
import  Button  from "../Atoms/ButtonReflex/ButtonReflex";

const Hero: React.FC = () => {
return (
    <section className="hero__wrap">
        <div className="hero__content">
            <div className="hero__title">
                <h1>Flexwork Upskilling to Placement
                    Lorem ipsum
                </h1>
            </div>
            <div className="hero__description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus aliquid dolor dolorum atque optio, eos quos quia laborum dolore aperiam natus incidunt.</p>
            </div>
            <div className="hero__button">
                <Button/>
            </div>
        </div>
        <div className="hero__imagewrap">
            <div>
                <img src="/flexworkhome.png" alt="imagen de fondo principal de flexwork" />
            </div>
        </div>
    </section>
);
};

export default Hero;
