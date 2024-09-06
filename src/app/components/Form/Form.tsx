"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { saveSubscription } from "../../firebase/Subscription";
import TextInput from "../Atoms/Input/TextInput";
import ButtonInput from "../Atoms/Input/ButtonInput";

const SubscriptionForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await saveSubscription(name, lastname, email);
    setName("");
    setLastname("");
    setEmail("");
    alert(
      "¡Gracias por suscribirte! Te avisaremos cuando la página esté lista."
    );
  };

  return (
    <div>
      <form id="suscripcion" onSubmit={handleSubmit}>
        <TextInput
          label="Nombre"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required
        />
        <br />
        <TextInput
          label="Apellido"
          value={lastname}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastname(e.target.value)
          }
          required
        />
        <br />
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <br />
        <ButtonInput />
      </form>
    </div>
  );
};

export default SubscriptionForm;
