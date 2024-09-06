import React from "react";
import Article from "./Article/Article"
import "./ArticleSection.scss";

const ArticleSection = () => {
  return (
    <section className="wrap__article">
    <div className="article__content">
      <h2 className="article__title">Encuentra talento para proyectos de Alto Impacto</h2>
      <p className="article__text">
        Conectamos a empresas con profesionales destacados que entienden tus
        necesidades. Nuestro enfoque en microproyectos te permite acceder a
        soluciones especializadas, rápidas y efectivas, optimizando tu tiempo y
        recursos.
      </p>
    </div>
    <div className="article__component">
      <Article />
    </div>
  </section>
  
  );
};

export default ArticleSection;
