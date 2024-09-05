import React from "react";
import "./cardInfo.scss";
import Imagen from "./izquierda/Imagen";
import Content from "./derecha/Content";

const Card2 = () => {
  return (
    <div className="container">
      <div className="container__izquierda">
        <Imagen />
      </div>

      <div className="container__derecha">
        <Content />
      </div>
    </div>
  );
};

export default Card2;
