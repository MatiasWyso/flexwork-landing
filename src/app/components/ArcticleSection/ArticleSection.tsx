import React from "react";
import Article from "./Article/Article";
import "./ArticleSection.scss";

const ArticleSection = () => {
  return (
    <section className="wrap__article">
      <div className="article__content">
        <h2 className="article__title">¿Qué es Flexwork Microprojects?</h2>
        <p className="article__text">
          Tu nueva plataforma para encontrar y ofrecer microproyectos de alto
          impacto. Conectamos a profesionales con empresas que necesitan
          soluciones rápidas y efectivas. Mantente al tanto de nuestro
          lanzamiento para aprovechar oportunidades únicas.
        </p>
      </div>
      <div className="article__component">
        <Article />
      </div>
    </section>
  );
};

export default ArticleSection;
