'use client';

import { CldImage, CldImageProps } from 'next-cloudinary';

const CLOUD_NAME = 'dmu9szrap';

type CloudinaryImageProps = Omit<CldImageProps, 'placeholder' | 'blurDataURL'> & {
  skipBlur?: boolean;
};

export default function CloudinaryImage({ src, skipBlur = false, ...props }: CloudinaryImageProps) {
  // Generate tiny blurred version URL for placeholder
  const blurDataURL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_10,q_1,e_blur:1000/${src}`;

  return (
    <CldImage
      src={src}
      placeholder={skipBlur ? undefined : 'blur'}
      blurDataURL={skipBlur ? undefined : blurDataURL}
      {...props}
    />
  );
}