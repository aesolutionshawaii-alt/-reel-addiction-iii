'use client';
import { usePathname } from 'next/navigation';
import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  // Generate a tiny blurred version for placeholder
  const blurDataURL = `https://res.cloudinary.com/dmu9szrap/image/upload/w_50,q_30,e_blur:1000/${props.src}`;

  return (
    <CldImage
      {...props}
      format="avif"
      loading={props.priority ? 'eager' : 'lazy'}
      decoding="async"
      placeholder={isHomepage ? 'empty' : 'blur'}
      blurDataURL={isHomepage ? undefined : blurDataURL}
    />
  );
}