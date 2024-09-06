"use client";
import scss from "../ButtonReflex/ButtonReflex.module.scss";

const ButtonInput: React.FC = () => {
    return (
        <button type="submit" className={scss.btn}>
            Suscribirse
        </button>
    );
};

export default ButtonInput;