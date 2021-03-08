import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);
  console.log(useState());
  console.log(React);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </nav>
      <p>Contador de {props.titulo} </p>
      <h3>{contador}</h3>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "clicktls",
};
