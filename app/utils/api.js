export const fetchPokemonCategories = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon categories: ${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching Pokemon categories:', error);
    throw new Error(`Failed to fetch Pokemon categories: ${error.message}`);
  }
};

export const fetchPokemonByCategory = async (category) => {
  try {
    // Update the URL interpolation to use the correct category name
    const response = await fetch(`https://pokeapi.co/api/v2/type/${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon by category');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch Pokemon by category');
  }
};



export const fetchPokemonDetails = async (pokemonName) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon details');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch Pokemon details');
  }
};
