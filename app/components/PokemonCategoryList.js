import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonCategories } from '../utils/api';
import styled from 'styled-components'; // Import styled-components

// Styled components for the PokemonCategoryList component
const CategoryContainer = styled.div`
  margin-top: 20px;
`;

const CategoryTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryItem = styled.li`
  margin-bottom: 5px;
`;

const CategoryButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: #45a049;
  }
`;

const PokemonCategoryList = ({ onSelectCategory }) => {
  const { data, isLoading, isError } = useQuery('pokemonCategories', fetchPokemonCategories);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <CategoryContainer>
      <CategoryTitle>Pokemon Categories</CategoryTitle>
      <CategoryList>
        {data.results.map(category => (
          <CategoryItem key={category.name}>
            <CategoryButton onClick={() => onSelectCategory(category.name)}>{category.name}</CategoryButton>
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
};

export default PokemonCategoryList;
