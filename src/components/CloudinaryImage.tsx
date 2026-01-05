'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  return (
    <CldImage
      {...props}
      format="avif"
      loading={props.priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}