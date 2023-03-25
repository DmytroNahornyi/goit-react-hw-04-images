import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import { fetchImages } from './components/utils/pixabayApi';
import { AppContainer } from './components/Global.styled';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    selectedImage: null,
    showModal: false,
    isLoading: false,
    largeImageURL: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (
      searchQuery.trim() !== '' &&
      (prevState.searchQuery !== searchQuery || prevState.page !== page)
    ) {
      this.setState({ isLoading: true });

      fetchImages(searchQuery, page)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data],
          }));
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleOpenModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null, showModal: false, largeImageURL: '' });
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handleLoadMoreBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = image => {
    this.setState({ selectedImage: image, showModal: true });
  };

  render() {
    const { images, isLoading, selectedImage, showModal, largeImageURL } =
      this.state;

    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery images={images} onClick={this.handleOpenModal} />
        {largeImageURL && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.handleCloseModal}
          />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMoreBtnClick} />
        )}
        {showModal && selectedImage && (
          <Modal onClose={this.handleCloseModal}>
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
          </Modal>
        )}
      </AppContainer>
    );
  }
}

export default App;
