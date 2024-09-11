"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { saveSubscription } from "../../firebase/Subscription";
import TextInput from "../Atoms/Input/TextInput/TextInput";
import ButtonInput from "../Atoms/Input/ButtonInput/ButtonInput";
import "./Form.scss";

const SubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true); 
    await saveSubscription(email);
    setEmail("");
  };

  return (
    <div className="BG">
      <form id="suscripcion" onSubmit={handleSubmit}>
        <p className="gradient-text sub-title-text">
          Suscribite y no te pierdas ninguna novedad 
        </p>
        <h2 className="gradient-text title-text">¡Anótate!</h2>
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
