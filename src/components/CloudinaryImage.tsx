'use client';
import { useState } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';

export default function CloudinaryImage(props: CldImageProps) {
  const [loaded, setLoaded] = useState(false);
  const showImmediately = props.priority && loaded;

  return (
    <CldImage
      {...props}
      format="avif"
      loading={props.priority ? 'eager' : 'lazy'}
      decoding="async"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhA//aAAwDAQACEQMRAD8A2G9MUFzJAupzBo2KssijchBxkZGR+1X1PVYLyPT5765t0uZYy7WsBIVADgbn6LHvA4pSohcTrYDYn//Z"
      onLoad={() => setLoaded(true)}
      className={`${props.className || ''} transition-opacity duration-200 ${props.priority || loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}