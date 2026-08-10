import YouTubeEmbed from './YouTubeEmbed';
import ImageGallery from './ImageGallery';
import RevealOnScroll from './RevealOnScroll';

export default function ProjectSection({
  bgClass = 'section-darker',
  title,
  subtitle,
  bullets,
  image,
  youtubeId,
  galleryImages,
  galleryCols,
  reversed = false,
}) {
  return (
    <section className={`section ${bgClass} project-section`}>
      <div className="container">
        <RevealOnScroll>
          <div className={`project-block ${reversed ? 'reversed' : ''}`}>
            <div className="project-info">
              <h3>{title}</h3>
              {subtitle && <p className="project-subtitle">{subtitle}</p>}
              {bullets && (
                <ul>
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
            {image && (
              <div className="project-image">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </RevealOnScroll>

        {(youtubeId || galleryImages) && (
          <RevealOnScroll>
            <div className={`media-row ${(!youtubeId || !galleryImages) ? 'single-media' : ''}`}>
              {youtubeId && (
                <div>
                  <YouTubeEmbed videoId={youtubeId} />
                </div>
              )}
              {galleryImages && (
                <div>
                  <ImageGallery images={galleryImages} cols={galleryCols || 3} />
                </div>
              )}
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
