'use client';

import { FAREHARBOR_SHORTNAME } from '@/lib/fareharbor';

// Declare FareHarbor global
declare global {
  interface Window {
    FH?: {
      open: (options: {
        shortname: string;
        view?: string | { item: number };
        items?: number[];
        fullItems?: string;
      }) => void;
    };
  }
}

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
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!window.FH) {
      // Fallback: open link directly if FH not loaded
      const url = itemId
        ? `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/items/${itemId}/`
        : `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/`;
      window.open(url, '_blank');
      return;
    }

    if (itemId) {
      // Open to specific item's calendar view with compact display
      window.FH.open({
        shortname: FAREHARBOR_SHORTNAME,
        view: { item: parseInt(itemId) },
        fullItems: 'no',
      });
    } else {
      // Open to all items
      window.FH.open({
        shortname: FAREHARBOR_SHORTNAME,
        view: 'items',
        fullItems: 'no',
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}
