"use client"
import scss from "./ButtonMain.module.scss";

const Button = () => {
    const handleButtonClick = () => {
        const section = document.getElementById("suscripcion");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <a className={scss.btn} onClick={handleButtonClick}>
            Unete ahora 
        </a>
    );
};

export default Button;