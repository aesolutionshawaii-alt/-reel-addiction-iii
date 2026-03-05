'use client';

import { FAREHARBOR_SHORTNAME } from '@/lib/fareharbor';

interface FareHarborButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Specific FareHarbor item ID. If not provided, shows full item menu */
  itemId?: string;
}

/**
 * FareHarbor lightbox button component
 * Uses autolightframe - regular FareHarbor links are automatically opened in a modal
 *
 * Usage:
 *   <FareHarborButton className="...">Book Now</FareHarborButton>
 *   <FareHarborButton itemId={FAREHARBOR_ITEMS.FULL_DAY} className="...">Book Full Day</FareHarborButton>
 */
export default function FareHarborButton({
  children,
  className = '',
  itemId,
}: FareHarborButtonProps) {
  // Build URL - autolightframe will intercept and open in modal
  const url = itemId
    ? `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/items/${itemId}/`
    : `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/`;

  return (
    <a
      href={url}
      className={className}
    >
      {children}
    </a>
  );
}
