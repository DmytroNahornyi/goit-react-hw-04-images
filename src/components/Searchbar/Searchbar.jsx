import React from 'react';
import PropTypes from 'prop-types';
import {
SearchFormInput,
SearchbarContainer,
SearchFormContainer,
SearchFormButton,
SearchFormButtonLabel,
} from './Searchbar.style';

class Searchbar extends React.Component {
static propTypes = {
onSubmit: PropTypes.func.isRequired,
};

state = {
query: '',
};

handleChange = e => {
this.setState({ query: e.target.value });
};

handleSubmit = e => {
e.preventDefault();
this.props.onSubmit(this.state.query);
this.setState({ query: '' });
};

render() {
const { query } = this.state;
return (
<SearchbarContainer className="Searchbar">
<SearchFormContainer
       className="SearchForm"
       onSubmit={this.handleSubmit}
     >
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
        onChange={this.handleChange}
      />
    </SearchFormContainer>
  </SearchbarContainer>
);
}
}

export default Searchbar;