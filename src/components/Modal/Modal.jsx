import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

function Modal({ largeImageURL, onClose, alt = '' }) {
useEffect(() => {
const handleKeyDown = (e) => {
if (e.code === 'Escape') {
onClose();
}
};
window.addEventListener('keydown', handleKeyDown);
return () => {
window.removeEventListener('keydown', handleKeyDown);
};
}, [onClose]);

const handleBackdropClick = (e) => {
if (e.currentTarget === e.target) {
onClose();
}
};

return (
<Overlay onClick={handleBackdropClick}>
<ModalContainer>
<img src={largeImageURL} alt={alt} />
</ModalContainer>
</Overlay>
);
}

Modal.propTypes = {
largeImageURL: PropTypes.string.isRequired,
onClose: PropTypes.func.isRequired,
alt: PropTypes.string,
};

export default Modal;