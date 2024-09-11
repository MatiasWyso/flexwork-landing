"use client"
import scss from "./ButtonReflex.module.scss";

const Button = () => {
    const handleButtonClick = () => {
        const section = document.getElementById("suscripcion");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button className={scss.btn} onClick={handleButtonClick}>
            Únete ahora
        </button>
    );
};

export default Button;