import { useEffect, useState } from "react";

import PokemonCard from "./PokemonCard";
import Button from "./Button";
import { Link } from "react-router-dom";

const API_URL = "https://pokeapi.co/api/v2/generation";

function Generation(props) {
  const [pokemon, setPokemon] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  async function fetchPokemonByGen() {
    const response = await fetch(API_URL + "/" + props.gen_id);
    const data = await response.json();
    setPokemon(data.pokemon_species);
  }

  function displayAllPokemon() {
    setDisplayAll(!displayAll);
  }

  function getIndexFromUrl(url) {
    const parsedUrl = url.split("/");
    return parsedUrl[parsedUrl.length - 2];
  }

  useEffect(() => {
    fetchPokemonByGen();
  }, []);

  return (
    <div className="Gen m-3">
      <h2>{props.name}</h2>
      <div className="d-flex">
        <div className="row">
          {pokemon
            .slice(0, displayAll ? pokemon.length : 5)
            .map((pokemon, index) => (
              <Link
                to={"/" + pokemon.name}
                key={index}
                className="m-3"
                style={{ width: "12rem" }}
              >
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  index={getIndexFromUrl(pokemon.url)}
                />
              </Link>
            ))}
        </div>
      </div>
      <Button
        name={displayAll ? "Voir moins" : "Voir plus"}
        onClick={displayAllPokemon}
      />
    </div>
  );
}

export default Generation;
