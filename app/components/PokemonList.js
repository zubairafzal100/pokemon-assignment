import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonByCategory } from '../utils/api';
import styled from 'styled-components';

// Styled components for the PokemonList component
const ListContainer = styled.div`
  margin-top: 20px;
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PokemonListItem = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 20px;
`;

const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PokemonItem = styled.div`
  margin: 10px;
`;

const PokemonButton = styled.button`
  background-color: #008CBA;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;

const PokemonList = ({ category, onSelectPokemon }) => {
  const { data, isLoading, isError } = useQuery(['pokemonByCategory', category], () => fetchPokemonByCategory(category));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <Container>
      <ListContainer>
        <CategoryTitle>Pokemons in {category}</CategoryTitle>
        <PokemonListContainer>
          {data.pokemon.map(pokemon => (
            <PokemonItem key={pokemon.pokemon.name}>
              <PokemonButton onClick={() => onSelectPokemon(pokemon.pokemon.name)}>
                {pokemon.pokemon.name}
              </PokemonButton>
            </PokemonItem>
          ))}
        </PokemonListContainer>
      </ListContainer>
    </Container>
  );
};

export default PokemonList;
