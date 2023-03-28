import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchFormInput,
  SearchbarContainer,
  SearchFormContainer,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Searchbar.style';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarContainer className="Searchbar">
      <SearchFormContainer className="SearchForm" onSubmit={handleSubmit}>
        <SearchFormButton type="submit" className="SearchForm-button">
          <SearchFormButtonLabel className="SearchForm-button-label">
            Search
          </SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchFormContainer>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
