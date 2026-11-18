// FareHarbor Item IDs
// Update these when items are created/changed in FareHarbor dashboard

export const FAREHARBOR_ITEMS = {
  PRIVATE: '426972',  // Main private charters (shows all private options)
  SHARED: '426995',   // Shared charter ($500/person)
} as const;

export const FAREHARBOR_SHORTNAME = 'reeladdictioniii';

// Online gift cards are not switched on for this account yet (FareHarbor Support enables them).
// Flip to true once https://fareharbor.com/embeds/book/reeladdictioniii/gift-cards/ stops returning "Not found".
export const GIFT_CARDS_ONLINE = false;
export const FAREHARBOR_GIFT_CARD_URL = `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/gift-cards/`;
