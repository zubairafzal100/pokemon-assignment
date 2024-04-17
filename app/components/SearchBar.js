// components/SearchBar.js

import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm); // This should trigger the state update in the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search Pokemon..." value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
