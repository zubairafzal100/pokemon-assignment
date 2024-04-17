// components/PokemonList.js

import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonByCategory } from '../utils/api';

const PokemonList = ({ category, onSelectPokemon }) => {
  const { data, isLoading, isError } = useQuery(['pokemonByCategory', category], () => fetchPokemonByCategory(category));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2>Pokemons in {category}</h2>
      <ul>
        {data.pokemon.map(pokemon => (
          <li key={pokemon.pokemon.name} onClick={() => onSelectPokemon(pokemon.pokemon.name)}>
            {pokemon.pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
