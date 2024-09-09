"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { saveSubscription } from "../../firebase/Subscription";
import TextInput from "../Atoms/Input/TextInput";
import ButtonInput from "../Atoms/Input/ButtonInput";
import "./Form.scss";

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await saveSubscription(email);
    setEmail("");
    setSubmitted(true); 
  };

  return (
    <div className="BG">
      <form id="suscripcion" onSubmit={handleSubmit}>
        <p className="gradient-text sub-title-text">
          ¿Listo para encontrar tu microproyecto?
        </p>
        <h2 className="gradient-text title-text">¡Anotate!</h2>
        {submitted ? (
          <p className="gracias">¡Gracias por suscribirte!</p>
        ) : (
          <div className="input-group">
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
            <ButtonInput />
          </div>
        )}
      </form>
    </div>
  );
};

export default SubscriptionForm;
