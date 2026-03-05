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
 * Opens booking in a modal overlay instead of navigating away from the site
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
  // Build the FareHarbor URL
  let href = `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/`;

  if (itemId) {
    href += `items/${itemId}/`;
  } else {
    href += '?full-items=yes';
  }

  return (
    <a
      href={href}
      className={`fareharbor-lightframe ${className}`}
    >
      {children}
    </a>
  );
}
