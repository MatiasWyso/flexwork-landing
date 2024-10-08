"use client";
import { ArticleData } from "./Data/Data";
import "./Article.scss";

interface ArticleProps {
  title?: string;
  text?: string;
  icon?: string;
}

const CardData: React.FC<ArticleProps> = ({
  title = "flexwork",
  text = "lorem ipsum",
  icon = "",
}) => {
  return (
    <div className="card__wrap bg-pattern-diagonal-lines-left hover-animate-moving-lines">
      {ArticleData.map((item, index) => (
        <div key={index} className="card">
         
            <div className="card-image-container">
              <img className="icon" src={item.icon} alt={item.title} />
            </div>

            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.text}</p>
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default CardData;
