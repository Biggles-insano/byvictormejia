export default function ProductSlider({ images }) {
    return (
      <div style={{ margin: '2rem 0', position: 'relative', width: '100%', maxHeight: '400px', overflow: 'hidden' }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        ))}
        
      </div>
    )
  }