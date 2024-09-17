"use client";
import "./Info.scss";
import Button from "../Atoms/ButtonMain/ButtonMain";

const Info: React.FC = () => {

  return (
    <div className="BG">
      <form id="info" >
        <h2 className="gradient-text title-text">¡Anótate!</h2>
        <p className="sub-title-text">
          Regístrate y obtén acceso prioritario a microproyectos de alto impacto
          con empresas globales.
        </p>
        <Button />
      </form>
    </div>
  );
};

export default Info;
