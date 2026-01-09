'use client';

import { useState, useEffect, useRef } from 'react';

interface HeroImageClientProps {
    
  mobileSrcSet: string;
  desktopSrcSet: string;
  fallbackUrl: string;
  alt: string;
  objectPosition?: 'left' | 'center' | 'right' | 'top';
  disableFade?: boolean;
}

export default function HeroImageClient({
  mobileSrcSet,
  desktopSrcSet,
  fallbackUrl,
  alt,
  objectPosition = 'center',
  disableFade = false,
}: HeroImageClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle case where image loads from cache before React attaches onLoad
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  const fadeStyles = disableFade
    ? ''
    : `transition-opacity duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`;

  return (
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet={mobileSrcSet}
        sizes="100vw"
        type="image/avif"
      />
      <source
        media="(min-width: 768px)"
        srcSet={desktopSrcSet}
        sizes="100vw"
        type="image/avif"
      />
      <img
        ref={imgRef}
        src={fallbackUrl}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
        className={fadeStyles}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          inset: 0,
          objectFit: 'cover',
          objectPosition: objectPosition,
        }}
      />
    </picture>
  );
}