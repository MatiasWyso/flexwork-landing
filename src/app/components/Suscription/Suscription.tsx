import React from "react";
import Form from "./Form/Form";
import { MultiStepLoaderDemo } from "./Loader/test";
import "./Suscription.scss";
import { div } from "framer-motion/client";

const Suscription = () => {
  return (
    <section className="suscription-container">
      <div id="suscripcion">
        <div className="grilla"></div>
        <div className="otromas">
          <div className="Multistep">
            <MultiStepLoaderDemo />
          </div>
          <div className="Form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suscription;
