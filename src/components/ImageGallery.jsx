import { useState } from 'react';

export default function ImageGallery({ images, cols = 3 }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      <div className={`image-gallery ${cols === 2 ? 'cols-2' : ''}`}>
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setLightboxImage(img.full || img.thumb)}
          >
            <img src={img.thumb} alt={img.alt || `Gallery image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-close" onClick={() => setLightboxImage(null)}>✕</div>
          <img src={lightboxImage} alt="Full size" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
