'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; // Import styled-components

import PokemonCategoryList from './components/PokemonCategoryList';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import SearchBar from './components/SearchBar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// Styled container for the entire Home component
const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
`;

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState('');

  // Log the search term whenever it changes
  useEffect(() => {
    console.log('Search term:', searchedPokemon);
  }, [searchedPokemon]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Apply styling using the Container component */}
      <Container>
        <SearchBar onSearch={setSearchedPokemon} />
        {!selectedCategory && !selectedPokemon && (
          <PokemonCategoryList onSelectCategory={setSelectedCategory} />
        )}
        {selectedCategory && !selectedPokemon && (
          <PokemonList category={selectedCategory} onSelectPokemon={setSelectedPokemon} />
        )}
        {selectedPokemon && (
          <PokemonDetails pokemonName={selectedPokemon} />
        )}
      </Container>
    </QueryClientProvider>
  );
}
