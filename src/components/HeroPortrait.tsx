import { useState, useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import heroPortraitImg from '../assets/hero-portrait.png';

/**
 * The hero portrait: High-resolution professional cutout portrait of Abu Raihan.
 * Completely transparent background, studio lighting, theme-aware lighting filters,
 * smooth bottom falloff into the page floor, and gentle breathing idle animation.
 *
 * Uses Vite-bundled PNG asset to guarantee 100% reliable image delivery on all hosts
 * (including InfinityFree / Apache servers where .webp triggers anti-bot HTML challenge responses).
 */

const PORTRAIT = {
  src: heroPortraitImg,
  fallback: '/assets/hero-portrait.png',
  width: 1037,
  height: 1517,
  alt: 'Abu Raihan - Frontend Developer',
};

export default function HeroPortrait({ play }: { play: boolean }) {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(PORTRAIT.src);
  const imgRef = useRef<HTMLImageElement>(null);
  const retried = useRef(false);

  // Check if image is already cached/complete on mount
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const handleError = () => {
    // If the bundled path fails, fall back once to the public path without looping
    if (!retried.current && imgSrc !== PORTRAIT.fallback) {
      retried.current = true;
      setImgSrc(PORTRAIT.fallback);
    }
  };

  return (
    <div className={`hero-film relative mx-auto h-auto w-fit md:h-full ${play || reduce ? 'is-idle' : ''}`}>
      <div aria-hidden="true" className="hero-film__pool" />
      <img
        ref={imgRef}
        src={imgSrc}
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
    </div>
  );
}
