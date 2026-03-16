import { useState, useEffect, useCallback } from "react";
import styles from "../css/GaleriaCarousel.module.css";

function GaleriaCarousel({ images, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (index === current || fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, 300);
    },
    [current, fading]
  );

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, images.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, images.length, goTo]);

  useEffect(() => {
    if (!autoPlay || paused || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, paused, next, interval, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.mainImageWrapper}>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className={`${styles.mainImage} ${fading ? styles.fading : ""}`}
        />

        {images.length > 1 && (
          <>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={prev}
              aria-label="Anterior"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={next}
              aria-label="Siguiente"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}

        <span className={styles.indicator}>
          {current + 1} / {images.length}
        </span>
      </div>

      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ""}`}
              onClick={() => goTo(i)}
            >
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GaleriaCarousel;
