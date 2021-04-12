import React from "react";
import "./Estilos.css";
import "./Estilos.scss";

import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS REact</h2>
      <h3 className="bg-react">Estikos externos de CSS</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".5rem", margin: "2rem" }}
      >
        Estikos en línea de CSS (Atributo STYLE)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estikos en línea de CSS
      </h3>
      <h3 className="bg-react">
        Agregarndo NORMALIZE con <br />
        <code>@import-normalize</code>
      </h3>

      <h3 className={moduleStyles.error}>Estilos con módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con módulos</h3>

      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
