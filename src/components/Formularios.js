import React, { useState } from "react";

/* export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formularia enviadaS");
  };
  return (
    <>
      <h2>Formularios y Barbajos</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elije un sabor:</p>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="zapote"
          name="sabor"
          value="zapote"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="zapote">Zapote</label>
        <input
          type="radio"
          id="corucos"
          name="sabor"
          value="corucos"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="corucos">Corucos</label>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">React</label>
        <p>Eligue tu lenguaje</p>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">- - - -</option>
          <option value="js">Javascropt</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br /> <br />
        <label htmlFor="terminos">Acepto Terminos y Condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
} */

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formularia enviadaS");
  };
  return (
    <>
      <h2>Formularios y Barbajos</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elije un sabor:</p>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="zapote"
          name="sabor"
          value="zapote"
          onChange={handleChange}
        />
        <label htmlFor="zapote">Zapote</label>
        <input
          type="radio"
          id="corucos"
          name="sabor"
          value="corucos"
          onChange={handleChange}
        />
        <label htmlFor="corucos">Corucos</label>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <p>Eligue tu lenguaje</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - - -</option>
          <option value="js">Javascropt</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br /> <br />
        <label htmlFor="terminos">Acepto Terminos y Condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
