// components/PokemonCategoryList.js

import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonCategories } from '../utils/api';

const PokemonCategoryList = ({ onSelectCategory }) => {
  const { data, isLoading, isError } = useQuery('pokemonCategories', fetchPokemonCategories);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2>Pokemon Categories</h2>
      <ul>
        {data.results.map(category => (
          <li key={category.name}>
            <button onClick={() => onSelectCategory(category.name)}>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCategoryList;
