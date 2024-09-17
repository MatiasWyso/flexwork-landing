"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { saveSubscription } from "../../firebase/Subscription";
import TextInput from "../Atoms/Input/TextInput/TextInput";
import ButtonInput from '../Atoms/Input/ButtonInput/ButtonInput';
import "./Form.scss";
import PhoneInput from "../Atoms/Input/PhoneInput/PhoneInput";
import NameInput from "../Atoms/Input/NameInput/NameInput";
import Button from "../Atoms/ButtonMain/ButtonMain";

const SubscriptionForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    await saveSubscription(name, email, lastname, phone);
    setName("");
    setLastname("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="BG">
      <form id="suscripcion" onSubmit={handleSubmit}>
        <h2 className="gradient-text title-text">¡Anótate!</h2>
        {/* {submitted ? (
          <p className="gracias">¡Gracias por suscribirte!</p>
        ) : (
          <div className="input-group">
            <NameInput
              label="Nombre"
              type="text"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
            />
            <TextInput
              label="Apellido"
              type="text"
              value={lastname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastname(e.target.value)
              }
              required
            />
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
            <PhoneInput
              label="Celular (opcional)"
              type="tel"
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
              required={false}
            />
          </div>
        )} */}
        <p className="sub-title-text">
          Regístrate y obtén acceso prioritario a microproyectos de alto impacto
          con empresas globales.
        </p>
        <Button />
      </form>
    </div>
  );
};

export default SubscriptionForm;
