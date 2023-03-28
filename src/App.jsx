import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { fetchImages } from './components/utils/pixabayApi';
import { AppContainer } from './components/Global.styled';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      setIsLoading(true);

      fetchImages(searchQuery, page)
        .then(data => {
          setImages(prevState => [...prevState, ...data]);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchQuery, page]);

  const handleSearchFormSubmit = useCallback(query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  }, []);

  const handleLoadMoreBtnClick = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  // const handleImageClick = useCallback(image => {
  //   setSelectedImage(image);
  //   setShowModal(true);
  // }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
    setShowModal(false);
    setLargeImageURL('');
  }, []);

  const handleOpenModal = useCallback(largeImageURL => {
    setLargeImageURL(largeImageURL);
  }, []);

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      <ImageGallery images={images} onClick={handleOpenModal} />
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <Button onClick={handleLoadMoreBtnClick} />
      )}
      {showModal && selectedImage && (
        <Modal onClose={handleCloseModal}>
          <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        </Modal>
      )}
    </AppContainer>
  );
};

export default App;
