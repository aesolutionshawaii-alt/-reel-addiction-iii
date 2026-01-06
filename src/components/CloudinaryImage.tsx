'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Only apply fade-in to full-screen hero images (those with fill prop and priority)
  const isHeroImage = props.fill && props.priority;
  const shouldFade = !isHomepage && isHeroImage;

  return (
    <CldImage
      {...props}
      format="avif"
      loading={props.priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={`${props.className || ''} ${
        shouldFade 
          ? `transition-opacity duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`
          : ''
      }`}
    />
  );
}