"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { saveSubscription } from "../../../firebase/Subscription";
import TextInput from "../../Atoms/Input/TextInput/TextInput";
import "./Form.scss";
import PhoneInput from "../../Atoms/Input/PhoneInput/PhoneInput";
import NameInput from "../../Atoms/Input/NameInput/NameInput";
import ButtonInput from "../../Atoms/Input/ButtonInput/ButtonInput";

const Info: React.FC = () => {
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
    <form className="form" onSubmit={handleSubmit}>
      {submitted ? (
        <p className="gracias">¡Gracias por suscribirte!</p>
      ) : (
        <div className="input-group">
          <div className="primerLinea">
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
          </div>
          <div className="segundaLinea">
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>
          <PhoneInput
            label="Celular (opcional)"
            type="tel"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            required={false}
          />
          <div className="button-container">
            <ButtonInput />
          </div>
        </div>
      )}
    </form>
  );
};

export default Info;
