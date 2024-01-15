import { useEffect, useState } from "react";

import PokemonCard from "./PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/generation";

function Generation(props) {
  const [pokemon, setPokemon] = useState([]);
  async function fetchPokemonByGen() {
    const response = await fetch(API_URL + "/" + props.gen_id);
    const data = await response.json();
    setPokemon(data.pokemon_species);
  }

  useEffect(() => {
    fetchPokemonByGen();
  });

  return (
    <div className="Gen m-3">
      <h2>{props.name}</h2>
      <div className="d-flex">
        <div className="row">
          {pokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} />
          ))}
        </div>
      </div>
      <button className="btn btn-secondary">Voir plus</button>
    </div>
  );
}

export default Generation;
