"use client";
import scss from "./ButtonInput.module.scss";

const ButtonInput: React.FC = () => {
    return (
        <button type="submit" className={scss.btn}>
            Suscribirse
        </button>
    );
};

export default ButtonInput;