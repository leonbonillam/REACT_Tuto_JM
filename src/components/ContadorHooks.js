import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);
  console.log(useState());
  console.log(React);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  const multi = () => setContador(contador * 2);
  const divi = () => setContador(contador / 2);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={divi}>/2</button>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <button onClick={multi}>*2</button>
      </nav>
      <p>Contador de {props.titulo} </p>
      <h3>{contador}</h3>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "clicktls",
};
