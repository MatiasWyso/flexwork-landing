import React from "react";
import "./itemsmap.scss";
import itemsData from "./ItemsData.json";

const Item: React.FC<{
  icono: string;
  titulo: string;
  descripcion: string;
}> = ({ icono, titulo, descripcion }) => (
  <div className="section__item">
    <div className="section__item-icon" dangerouslySetInnerHTML={{ __html: icono }} />
    <div className="section__item-section">
      <h3 className="section__item-title">{titulo}</h3>
      <p className="section__item-description">{descripcion}</p>
    </div>
  </div>
);

const ItemsMap: React.FC = () => {
  return (
    <div className="section">
      {itemsData.map((item, index) => (
        <Item
          key={index}
          icono={item.icono}
          titulo={item.titulo}
          descripcion={item.descripcion}
        />
      ))}
    </div>
  );
};

export default ItemsMap;
