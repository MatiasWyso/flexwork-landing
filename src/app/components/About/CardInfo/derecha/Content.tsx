import React from "react";
import ItemsMap from "./ItemsMap/ItemsMap";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <div className="content__items">
        <h1 className="content__title">Flexwork Upskilling to Placement.</h1>
        <ItemsMap />
      </div>
    </div>
  );
};

export default Content;
