import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";

import "./App.css";

function App() {
  let nombre = "Jonny",
    auth = true,
    cosas = ["uno", "Dos", "tres", "Cuatro"];

  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" />
            <h1>{nombre}</h1>
            <p>{auth ? "Loggeado " : " No logeado"}</p>
            <p>{2 + 2} </p>
            <ul>
              {cosas.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <p>
              Holi boli <code>src/App.js</code> and save to reload.
            </p>

            <section>
              <Componente msg="Yo soy un componente funconal desde un prop" />
              <br /> <br />
            </section>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <Componente msg="También Soy un componente funconal desde un prop pero fuera" />
            <br /> <br />
            <Propiedades
              cadena="Este es cadena de texto"
              numero={19}
              bool={true}
              arreglo={[1, 2, 3]}
              objeto={{ nombre: "leon", correo: "loli@lo.com" }}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemnto react</i>}
              componenteReact={
                <Componente msg="Soy un componete pasado comp prop" />
              }
            />{" "}
          </section>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
