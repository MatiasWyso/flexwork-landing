import React from "react";
import ItemsMap from "./ItemsMap/ItemsMap";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <h1 className="content__title"> Flexwork Upskilling to Placement</h1>
      <div className="content__items"><ItemsMap /></div>
    </div>
  );
};

export default Content;
