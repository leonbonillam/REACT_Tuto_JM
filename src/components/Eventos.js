import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    // Es recomendable hacer el bindeo en el constructor.

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);

    console.log(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Reastando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
//Propierties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };
  //ARROW FUNCTIONS

  sumar = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("Reastando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

/* function Boton(props) {
  return <button onClick={props.MyOnClick}>Botón hecho componente</button>;
} */

/* const Boton = ({ props }) => {
  <button onClick={props.myOnClick}>Botón hecho componente</button>;
}; */

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);
export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(e.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más sobre eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Parametro pasado desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Parametro pasado desde un evento")
          }
        /> */}

        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Parametro pasado desde un evento")
          }
        />
      </div>
    );
  }
}
