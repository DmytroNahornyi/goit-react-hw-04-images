import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

const Button = ({ onClick, text = 'Load more' }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onClick();
  };

  return (
    <ButtonStyle
      type="button"
      className="Button"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : text}
    </ButtonStyle>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Load more',
};

export default Button;
