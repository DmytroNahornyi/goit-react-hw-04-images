import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled';

function Button({ onClick, text = 'Load more' }) {
  return (
    <ButtonStyle type="button" className="Button" onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Load more',
};

export default Button;


// function Button({ onClick, text = 'Load more' }) {
//   const [buttonText, setButtonText] = useState(text);

//   useEffect(() => {
//     setButtonText(text);
//   }, [text]);

//   return (
//     <ButtonStyle type="button" className="Button" onClick={onClick}>
//       {buttonText}
//     </ButtonStyle>
//   );
// }

// Button.propTypes = {
//   text: PropTypes.string,
//   onClick: PropTypes.func.isRequired,
// };

// Button.defaultProps = {
//   text: 'Load more',
// };

// export default Button;