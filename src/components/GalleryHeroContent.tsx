'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GalleryHeroContent() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-8 text-left md:pb-20 md:px-16"
    >
      <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400 opacity-0 animate-fade-in-up [animation-delay:200ms]">
        Our Catches
      </p>
      <h1 className="mb-6 font-outfit text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl opacity-0 animate-fade-in-up [animation-delay:400ms]">
        Gallery
      </h1>
      <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl opacity-0 animate-fade-in-up [animation-delay:600ms]">
        Trophy catches and unforgettable moments
      </p>
    </motion.div>
  );
}
