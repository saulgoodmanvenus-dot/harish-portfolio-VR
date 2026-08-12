import { useState } from 'react';
import LazyImage from './LazyImage';

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
            <LazyImage
              src={img.thumb}
              alt={img.alt || `Gallery thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
            aria-label="Close image lightbox"
          >
            ✕
          </button>
          <img
            src={lightboxImage}
            alt="Full size view"
            loading="lazy"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
