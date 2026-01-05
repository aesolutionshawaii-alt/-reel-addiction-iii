'use client';
import { useState } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  const [loaded, setLoaded] = useState(false);
  
  // Priority images show immediately - no fade needed
  if (props.priority) {
    return (
      <CldImage
        {...props}
        format="avif"
        loading="eager"
        decoding="async"
      />
    );
  }

  // Non-priority images fade in
  return (
    <CldImage
      {...props}
      format="avif"
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${props.className || ''} transition-opacity duration-150 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}