import React from "react";
import Form from "./Form/Form";
import { MultiStepLoaderDemo } from "./Loader/test";
import "./Suscription.scss";

const Suscription = () => {
  return (
    <section className="Suscription">
      <div className="Multistep">
        <MultiStepLoaderDemo />
      </div>
      <div className="Form">
        <Form />
      </div>
    </section>
  );
};

export default Suscription;
