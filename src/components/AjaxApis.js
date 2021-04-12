import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <figcaption>{props.id}</figcaption>
      <h3>{props.id}</h3>

      <img src={props.avatar} alt={props.name} />
      <h3>{props.id}</h3>
      <figcaption>
        <h1>{props.id}</h1>
        {props.name}
      </figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              // console.log(json);

              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              console.log(pokemon.id);

              let pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons }); // en lugar de colocar pokemons:pokemons, se simplifica porque se llama igual que el estado
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones Async en Componentes de clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cagando...</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </>
    );
  }
}
