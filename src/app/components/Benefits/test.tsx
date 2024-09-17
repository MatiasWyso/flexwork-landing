"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../Benefits/Loader/Benefits";
import "./test.scss";

const loadingStates = [
  {
    text: "Buscar Proyectos a Medida",
  },
  {
    text: "Acceder a Perfiles Detallados",
  },
 {
    text: "Administrar Proyectos y Perfiles",
  },
  {
    text: "Publicar Microproyectos Flexibles",
  },
  {
    text: "Conectar con Talento Especializado",
  },
  {
    text: "Gestionar Proyectos en Tiempo Real",
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
