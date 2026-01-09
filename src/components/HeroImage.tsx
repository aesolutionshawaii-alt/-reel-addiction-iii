import { getCldImageUrl } from 'next-cloudinary';
import HeroImageClient from './HeroImageClient';

interface HeroImageProps {
    src: string;
    mobileSrc: string;
    alt: string;
    objectPosition?: 'left' | 'center' | 'right' | 'top';
    disableFade?: boolean;
}

// Widths matching Next.js Image defaults
const MOBILE_WIDTHS = [640, 750, 828];
const DESKTOP_WIDTHS = [1080, 1200, 1920];

function generateSrcSet(src: string, widths: number[]): string {
    return widths
        .map((w) => {
            const url = getCldImageUrl({
                src,
                width: w,
                format: 'avif',
                quality: 'auto',
            });
            return `${url} ${w}w`;
        })
        .join(', ');
}

export default function HeroImage({
    src,
    mobileSrc,
    alt,
    objectPosition = 'center',
    disableFade = false,
}: HeroImageProps) {
    // Generate srcsets for both viewports
    const mobileSrcSet = generateSrcSet(mobileSrc, MOBILE_WIDTHS);
    const desktopSrcSet = generateSrcSet(src, DESKTOP_WIDTHS);

    // Fallback URL for browsers that don't support picture/srcset
    const fallbackUrl = getCldImageUrl({
        src,
        width: 1920,
        format: 'avif',
        quality: 'auto',
    });

    return (
        <>
            {/* Preload links - Server Component renders these in initial HTML */}
            {/* Browser evaluates media queries and only fetches ONE image */}
            <link
                rel="preload"
                as="image"
                media="(max-width: 767px)"
                imageSrcSet={mobileSrcSet}
                imageSizes="100vw"
                fetchPriority="high"
            />
            <link
                rel="preload"
                as="image"
                media="(min-width: 768px)"
                imageSrcSet={desktopSrcSet}
                imageSizes="100vw"
                fetchPriority="high"
            />

            {/* Client component handles picture element and fade state */}
            <HeroImageClient
                mobileSrcSet={mobileSrcSet}
                desktopSrcSet={desktopSrcSet}
                fallbackUrl={fallbackUrl}
                alt={alt}
                objectPosition={objectPosition}
                disableFade={disableFade}
            />
        </>
    );
}