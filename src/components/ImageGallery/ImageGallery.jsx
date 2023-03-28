import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { ImageGalleryStyle } from './ImageGallery.styled';

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = useCallback(image => {
    setSelectedImage(image);
  }, []);

  const handleKeyDown = useCallback(e => {
    if (e.code === 'Escape') {
      setSelectedImage(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (images.length === 0) {
    return null;
  }

  return (
    <ImageGalleryStyle
      className="ImageGallery"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={() => handleImageClick(largeImageURL)}
        />
      ))}
      {selectedImage && (
        <Modal
          largeImageURL={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </ImageGalleryStyle>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
