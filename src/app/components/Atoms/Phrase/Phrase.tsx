
import scss from "./Phrase.module.scss";

const Phrase = () => {
  return (
    <div className={scss.phrase_wrap}>
    <h3 className={scss.phrase}>
      Promoviendo la flexibilidad laboral y el desarrollo profesional.
    </h3>
    </div>
  );
};

export default Phrase;
