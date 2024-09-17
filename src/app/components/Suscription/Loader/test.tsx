"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./Benefits/Benefits";
import "./test.scss";

const loadingStates = [
  {
    text: "Encontrar microproyectos",
  },
  {
    text: "Conectar con empresas globales",
  },
 {
    text: "Flexibilidad laboral",
  },
  {
    text: "Generar ingresos adicionales",
  },
  {
    text: "Conectar con Talento Especializado",
  },
  {
    text: "Desarrollo de nuevas habilidades",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="loader-container">
      <div className="loader-title">
        <h2>¿Por que Elegirnos?</h2>
      </div>
      <div className="loader-wraper">
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
      </div>
    </div>
  );
}
