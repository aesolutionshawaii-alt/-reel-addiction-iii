// components/motion-effects.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

/**
 * Parallax Image Component
 * Image moves slower than scroll speed, creating depth
 */
export function ParallaxImage({ 
  src, 
  alt, 
  speed = 0.5,
  className = '' 
}: ParallaxImageProps) {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
        setOffsetY((scrolled - elementTop) * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{
          transform: `translateY(${offsetY}px)`,
          transition: 'transform 0.1s linear',
        }}
        sizes="100vw"
        priority
      />
    </div>
  );
}

interface ScrollZoomImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Scroll Zoom Component
 * Image scales up as you scroll into view
 */
export function ScrollZoomImage({ 
  src, 
  alt, 
  className = '' 
}: ScrollZoomImageProps) {
  const [scale, setScale] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
      const newScale = 1.2 - (progress * 0.2);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
        sizes="100vw"
        priority
      />
    </div>
  );
}
