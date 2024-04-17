// pages/index.js

'use client';
// pages/index.js

import React, { useState, useEffect } from 'react';
import PokemonCategoryList from './components/PokemonCategoryList';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import SearchBar from './components/SearchBar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

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
      <div>
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
      </div>
    </QueryClientProvider>
  );
}
