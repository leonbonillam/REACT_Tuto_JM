import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "el componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    console.log(0, " Componente INICIALIZADO, aun no está en el DOM");

    console.log(this.state); //BORRARS

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };
    console.log(this.state); //BORRARS

    this.temporizador = null;
    console.log(this.temporizador); //BORRARS
  }

  componentDidMount() {
    console.log(1, "Componente ya en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estaodo o las props del componente han combiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();

    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El componente se dibuja o reddibuja por algun cambio en el DOM"
    );

    return (
      <>
        <h2>Ciclo de vida de los Componentes de Clase</h2>
        {/* <h3>{this.state.hora}</h3> */}
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
