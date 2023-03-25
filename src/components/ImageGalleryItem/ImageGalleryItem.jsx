import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, onClick }) => (
  <ImageGalleryItemStyle className="ImageGalleryItem">
    <ImageGalleryItemImage
      src={webformatURL}
      alt=""
      className="ImageGalleryItem-image"
      onClick={onClick}
    />
  </ImageGalleryItemStyle>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
