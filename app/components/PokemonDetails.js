import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonDetails } from '../utils/api';
import PokemonStatsGraph from './PokemonStatsGraph';
import styled from 'styled-components';

// Styled components for the PokemonDetails component
const DetailsContainer = styled.div`
  margin-top: 20px;
`;

const PokemonName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const BasicInfoSection = styled.div`
  margin-bottom: 20px;
`;

const BasicInfoTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const BasicInfoItem = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const PokemonDetails = ({ pokemonName }) => {
  const { data, isLoading, isError } = useQuery(['pokemonDetails', pokemonName], () => fetchPokemonDetails(pokemonName));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <DetailsContainer>
      <PokemonName>{pokemonName}</PokemonName>
      <BasicInfoSection>
        <BasicInfoTitle>Basic Information</BasicInfoTitle>
        <BasicInfoItem>Height: {data.height}</BasicInfoItem>
        <BasicInfoItem>Weight: {data.weight}</BasicInfoItem>
        {/* Add more basic information items as needed */}
      </BasicInfoSection>
      <div>
        <h3>Stats</h3>
        <PokemonStatsGraph stats={data.stats} />
      </div>
    </DetailsContainer>
  );
};

export default PokemonDetails;
