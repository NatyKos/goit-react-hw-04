import { useEffect, useState } from 'react';
import { searchImages } from '../../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchImg, setSearchImg] = useState('');

  const handleSearch = async value => {
    setImages([]);
    setPage(1);
    setSearchImg(value);
  };
  useEffect(() => {
    if (searchImg === '') {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        const data = await searchImages(searchImg, page);
        setImages(prev => {
          return [...prev, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [searchImg, page]);
  const counterPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && page >= 1 && <LoadMoreBtn onClick={counterPage} />}
    </>
  );
}
