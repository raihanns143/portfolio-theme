import { useState, useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * The hero portrait: High-resolution professional cutout portrait of Abu Raihan.
 * Completely transparent background, studio lighting, theme-aware lighting filters,
 * smooth bottom falloff into the page floor, and gentle breathing idle animation.
 */

const PORTRAIT = {
  webp: '/assets/hero-portrait.webp',
  png: '/assets/hero-portrait.png',
  width: 1037,
  height: 1517,
  alt: 'Abu Raihan - Frontend Developer',
};

export default function HeroPortrait({ play }: { play: boolean }) {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached/complete on mount
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const handleError = () => {
    if (errorCount < 3) {
      setTimeout(() => {
        setErrorCount((prev) => prev + 1);
      }, 500);
    }
  };

  return (
    <div className={`hero-film relative mx-auto h-auto w-fit md:h-full ${play || reduce ? 'is-idle' : ''}`}>
      <div aria-hidden="true" className="hero-film__pool" />
      <picture className="block h-auto w-auto max-h-[50vh] max-w-full md:h-full md:max-h-none md:max-w-none">
        <source srcSet={`${PORTRAIT.webp}${errorCount > 0 ? `?retry=${errorCount}` : ''}`} type="image/webp" />
        <img
          ref={imgRef}
          src={`${PORTRAIT.png}${errorCount > 0 ? `?retry=${errorCount}` : ''}`}
          alt={PORTRAIT.alt}
          width={PORTRAIT.width}
          height={PORTRAIT.height}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          draggable={false}
          className={`hero-film__media block h-auto max-h-[50vh] w-auto max-w-full select-none object-contain object-right pointer-events-none transition-opacity duration-300 md:h-full md:max-h-none md:max-w-none ${
            loaded ? 'opacity-100' : 'opacity-90'
          }`}
          style={{
            maskImage: 'linear-gradient(to bottom, black 82%, rgba(0,0,0,0.4) 93%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 82%, rgba(0,0,0,0.4) 93%, transparent 100%)',
          }}
        />
      </picture>
    </div>
  );
}
