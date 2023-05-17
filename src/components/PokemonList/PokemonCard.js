import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setPokemon(result.data);
    };
    fetchData();
  }, [url]);

  if (!pokemon) return null;

  return (
    <div>
      <h1>{pokemon.name}&nbsp;&nbsp;</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}

export default PokemonCard;