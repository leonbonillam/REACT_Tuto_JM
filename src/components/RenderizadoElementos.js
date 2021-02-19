import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} rel="noreferrer" target="_blank">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primaolvera", "Veranos", "Ocoño", "Infierno"],
    };
  }

  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el.id}>{el}</li>
          ))}
        </ol>

        <h3>Frameworks FrontEnd JS</h3>

        <ul>
          {data.frameworks.map((el, index) => (
            <ElementoLista key={index} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
