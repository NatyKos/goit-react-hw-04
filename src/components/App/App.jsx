import { useEffect, useState } from 'react';
import { searchImages } from '../../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function getImages() {
      const data = await searchImages();
      setImages(data);
      console.log(data);
    }
    getImages();
  }, []);
  return (
    <>
      <SearchBar />
    </>
  );
}
