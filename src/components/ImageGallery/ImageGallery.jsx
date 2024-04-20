import ImageCard from '../ImageCard/ImageCard';
export default function imageGallery({ images }) {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard img={image.urls.small} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}
