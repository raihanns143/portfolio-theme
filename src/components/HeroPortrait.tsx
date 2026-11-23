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

  return (
    <div className={`hero-film relative mx-auto h-full w-fit ${play || reduce ? 'is-idle' : ''}`}>
      <div aria-hidden="true" className="hero-film__pool" />
      <picture className="block h-full w-auto">
        <source srcSet={PORTRAIT.webp} type="image/webp" />
        <img
          src={PORTRAIT.png}
          alt={PORTRAIT.alt}
          width={PORTRAIT.width}
          height={PORTRAIT.height}
          loading="eager"
          decoding="async"
          draggable={false}
          className="hero-film__media block h-full w-auto max-w-none select-none object-contain pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 82%, rgba(0,0,0,0.4) 93%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 82%, rgba(0,0,0,0.4) 93%, transparent 100%)',
          }}
        />
      </picture>
    </div>
  );
}
