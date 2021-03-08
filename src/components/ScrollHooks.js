import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Fase de Scroll");

    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  });

  useEffect(() => {
    console.log("Fase de Montaja");
  }, []); /* Lista de dependencias vacia */

  useEffect(() => {
    console.log("Fase de Actualización");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de desmontaja");
    };
  });

  return (
    <>
      <h2>Hooks useEffect y el ciclo de vida</h2>
      <p>Scroll Y de navegador {scrollY} px</p>
    </>
  );
}
