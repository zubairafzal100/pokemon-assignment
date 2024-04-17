// components/PokemonDetails.js

import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonDetails } from '../utils/api';
import PokemonStatsGraph from './PokemonStatsGraph';
import styled from 'styled-components';

const PokemonDetails = ({ pokemonName }) => {
  const { data, isLoading, isError } = useQuery(['pokemonDetails', pokemonName], () => fetchPokemonDetails(pokemonName));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2>{pokemonName}</h2>
      <div>
        <h3>Basic Information</h3>
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        {/* Display other basic information as needed */}
      </div>
      <div>
        <h3>Stats</h3>
        <PokemonStatsGraph stats={data.stats} />
      </div>
    </div>
  );
};

export default PokemonDetails;
