import React from "react";
import "./Card.scss";

const Card: React.FC = () => {
  return (
    <div className="wrap__card">
      <div className="card">
        <div className="card__header">
          <h3 className="card__title">Card Title</h3>
        </div>
        <div className="card__body">
          <p className="card__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quas repellat, impedit beatae atque consectetur nobis veritatis
            animi blanditiis quidem nisi assumenda est quaerat temporibus
            doloribus magni, quis illum asperiores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
