import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [currentPokemonId, setCurrentPokemonId] = useState(1);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  useEffect(() => {
    console.log({ pokemon });
    pokemon?.abilities?.map((ability) => console.log(ability.ability.name));
    setCurrentPokemonId(pokemon.id);
  }, [pokemon]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <img
            src={
              pokemon?.sprites?.front_default ??
              "https://pngimg.com/uploads/pokeball/pokeball_PNG20.png"
            }
            className="poke-image"
            alt="logo"
          />
          <img
            src={
              pokemon?.sprites?.back_default ??
              "https://webstockreview.net/images/pokeball-clipart-pdf-16.png"
            }
            className="poke-image"
            alt="logo"
          />
        </div>
        <p className="poke-title">{pokemon.name} </p>
        <div className="flex-container">
          <button
            className="button"
            onClick={() => fetchPokemon(currentPokemonId - 1)}
          >
            Back
          </button>
          <button
            className="button"
            onClick={() => fetchPokemon(getRandomInt(1, 500))}
          >
            Random
          </button>
          <button
            className="button"
            onClick={() => fetchPokemon(currentPokemonId + 1)}
          >
            Next
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
