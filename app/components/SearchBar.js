import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the SearchBar component
const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;

const SearchBar = ({ onSearch, onCategoryInit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    onSearch(trimmedSearchTerm);
    onCategoryInit(trimmedSearchTerm);
    setSearchTerm('');
  };


  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search Pokemon..." value={searchTerm} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </FormContainer>
    </Container>
  );
};

export default SearchBar;
