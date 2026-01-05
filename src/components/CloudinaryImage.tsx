'use client';
import { useState } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  const [loaded, setLoaded] = useState(false);
  
  // Priority images OR images with explicit opacity classes - no fade logic
  const hasOpacityClass = props.className?.includes('opacity-');
  
  if (props.priority || hasOpacityClass) {
    return (
      <CldImage
        {...props}
        format="avif"
        loading={props.priority ? 'eager' : 'lazy'}
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