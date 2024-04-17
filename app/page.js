'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import PokemonCategoryList from './components/PokemonCategoryList';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import SearchBar from './components/SearchBar';

const queryClient = new QueryClient();

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
`;

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
    // Logic to handle category initiation based on search term
    setSelectedCategory(term); // Assuming the search term itself is the category
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <SearchBar onSearch={handleSearch} />
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
