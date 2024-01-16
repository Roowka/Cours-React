import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function Pokemon() {
  const { pokemon } = useParams();
  const [pokemonData, setPokemonData] = useState({});
  async function fetchPokemon() {
    const response = await fetch(API_URL + "/" + pokemon);
    const data = await response.json();
    setPokemonData(data);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="d-flex">
      <div className="card m-auto" style={{ width: "18rem" }}>
        <div className="text-center m-3">
          <img
            className="card-img-top"
            style={{ width: "8rem" }}
            src={pokemonData.sprites?.other.showdown.front_default}
          />
          <div className="card-body">
            <h5 className="card-title">{pokemonData.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
