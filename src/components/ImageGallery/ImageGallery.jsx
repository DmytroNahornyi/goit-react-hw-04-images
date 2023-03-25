import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { ImageGalleryStyle } from './ImageGallery.styled';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  state = {
    selectedImage: null,
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image });
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.setState({ selectedImage: null });
    }
  };

  render() {
    const { images } = this.props;
    const { selectedImage } = this.state;

    if (images.length === 0) {
      return null;
    }

    return (
      <ImageGalleryStyle
        className="ImageGallery"
        onKeyDown={this.handleKeyDown}
        tabIndex={0}
      >
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={() => this.handleImageClick(largeImageURL)}
          />
        ))}
        {selectedImage && (
          <Modal
            largeImageURL={selectedImage}
            onClose={() => this.setState({ selectedImage: null })}
          />
        )}
      </ImageGalleryStyle>
    );
  }
}

export default ImageGallery;
