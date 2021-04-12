import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import "./App.css";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  let nombre = "Jonny",
    auth = true,
    cosas = ["uno", "Dos", "tres", "Cuatro"];

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* ---------------------------------------------------- */}
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
            {/* ---------------------------------------------------- */}

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
          {/* ---------------------------------------------------- */}

          <section>
            <Componente msg="También Soy un componente funconal desde un prop pero fuera" />
            <hr />
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
                <Componente msg="Soy un componete pasado con prop" />
              }
            />
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks titulo="Clicks:" />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
            <hr />
            <HooksPersonalizados />
            <hr />
            <Referencias />
            <hr />
            <Formularios />
            <hr />
            <Estilos />
            <hr />
            <ComponentesEstilizados />
          </section>
        </header>
        <hr />
      </div>

      <div>Para bailar ella es una bomba</div>
    </>
  );
}

export default App;
