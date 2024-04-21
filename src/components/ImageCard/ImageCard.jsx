export default function ImageCard({ img, alt, onClick }) {
  return (
    <div>
      <img src={img} alt={alt} onClick={onClick} />
    </div>
  );
}
