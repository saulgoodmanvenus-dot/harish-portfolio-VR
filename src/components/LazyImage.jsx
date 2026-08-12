import { useState } from 'react';

export default function LazyImage({
  src,
  alt = '',
  className = '',
  style = {},
  onClick,
  aspectRatio,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`lazy-image-container ${loaded ? 'is-loaded' : 'is-loading'} ${error ? 'has-error' : ''} ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style,
      }}
      onClick={onClick}
    >
      {!loaded && !error && <div className="lazy-image-skeleton" />}
      
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
            width: '100%',
            height: '100%',
            objectFit: style.objectFit || 'cover',
            display: 'block',
          }}
          {...props}
        />
      ) : (
        <div className="lazy-image-fallback">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
}
