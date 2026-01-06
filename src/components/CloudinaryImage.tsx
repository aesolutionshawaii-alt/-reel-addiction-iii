'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <CldImage
      {...props}
      format="avif"
      loading={props.priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={`${props.className || ''} ${
        isHomepage 
          ? '' 
          : `transition-opacity duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`
      }`}
    />
  );
}