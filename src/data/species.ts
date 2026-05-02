export interface Species {
  slug: string;
  name: string;
  hawaiianName: string;
  season: string;
  image: string;
  description: string;
  techniques: string;
  size: string;
  hawaiiFact: string;
  metaDescription: string;
  // Extended content (optional)
  extendedDescription?: string;
  seasonDetails?: string;
  whatToExpect?: string;
  keepingYourCatch?: string;
  featuredStory?: {
    title: string;
    description: string;
    images: string[];
  };
}

export const species: Species[] = [
  {
    slug: 'pacific-blue-marlin',
    name: 'Blue Marlin',
    hawaiianName: "A'u",
    season: 'May - September (peak)',
    image: 'species/blue-marlin',
    description: "The ultimate game fish and the crown jewel of Hawaii sportfishing. Blue marlin are powerful, acrobatic fighters that can reach massive sizes and provide the fight of a lifetime.",
    techniques: "Live bait fishing with Opelu, high-speed trolling with lures, and watching for birds working bait schools. We focus on productive FADs and known feeding areas where blues hunt.",
    size: 'Average 200-400 lbs, trophy fish 500+ lbs',
    hawaiiFact: "In Hawaii, blue marlin are called 'A'u and are deeply respected. We practice mostly catch-and-release for these magnificent fish, though smaller ones are sometimes kept for poke and sashimi.",
    metaDescription: "Chase Pacific Blue Marlin off Oahu, Hawaii. The ultimate big game fishing experience. Reel Addiction III offers world-class marlin fishing year-round from Ko Olina.",
  },
  {
    slug: 'striped-marlin',
    name: 'Striped Marlin',
    hawaiianName: 'Nairagi',
    season: 'November - April',
    image: 'species/striped-marlin',
    description: "Fast, acrobatic, and aggressive. Striped marlin put on an incredible aerial show and are known for their beautiful vertical stripes that light up when they're hunting.",
    techniques: "High-speed trolling, live bait with flying fish or small tuna. They love to attack surface lures and will often 'light up' and circle the bait before striking.",
    size: 'Average 80-150 lbs, can reach 200+ lbs',
    hawaiiFact: "Striped marlin are winter visitors to Hawaii waters. Local crews know specific temperature breaks and current edges where they concentrate during the cooler months.",
    metaDescription: "Winter striped marlin fishing in Hawaii. Target Nairagi November-April aboard Reel Addiction III. Premium catches off Oahu's west side.",
  },
  {
    slug: 'ahi',
    name: 'Yellowfin Tuna',
    hawaiianName: 'Ahi',
    season: 'Peak May-September',
    image: 'species/yellowfin-tuna',
    description: "Yellowfin tuna are the reason most anglers book offshore trips in Hawaii. They're fast, strong, and one of the best-eating fish in the ocean. Average fish run 40-100 lbs, but we see 150+ lb fish every season. When you hook one, you'll know it — they pull drag and make long, powerful runs that test your tackle and your endurance.",
    techniques: "We run multiple techniques depending on conditions. High-speed trolling with skirted lures covers water fast — we run a spread of 4-6 lines at different depths, targeting fish near FADs and open ocean structure. When we find a school, we switch to live bait. Nothing triggers a bite like a struggling opelu or aku belly. We also chunk fish around structure, chumming with cut bait to bring fish up from depth and get them competing for food.",
    size: 'Average 40-100 lbs, trophy fish 150-250 lbs',
    hawaiiFact: "Ahi is the Hawaiian name, and it's the most prized fish in local markets. Fresh ahi poke, sashimi straight from the boat, seared ahi steaks — nothing compares to fish you caught hours ago. We bleed and ice your fish immediately because proper handling is the difference between good ahi and great ahi.",
    metaDescription: "Catch Ahi (Yellowfin Tuna) in Oahu, Hawaii aboard Reel Addiction III. Peak season May-September with incredible October action. Book your charter today.",
    extendedDescription: "Ahi is the Hawaiian name, and it's the most prized fish in local markets. Fresh ahi poke, sashimi straight from the boat, seared ahi steaks — nothing compares to fish you caught hours ago.",
    seasonDetails: "May through September is prime ahi season around Oahu. Warm currents push baitfish closer to shore, and the yellowfin follow. This is when we see the most consistent action and the biggest schools. But here's what most people don't know: October can be incredible. Our best ahi day ever was in October — 14 yellowfin in a single trip. The fish were stacked up, feeding aggressively, and we couldn't keep lines in the water. Days like that don't happen every year, but when fall conditions line up right, the bite can be better than summer. Winter and spring are slower but not dead. We still catch ahi year-round, just not in the same numbers. If yellowfin are your main target, book May through October.",
    whatToExpect: "Ahi trips are offshore trips. We're running 10-20+ miles out to FADs and open water. On a half-day charter, we'll have solid fishing time but less flexibility. Full-day trips give us time to find fish, work multiple spots, and wait out slow periods. When you hook up, be ready to work. Ahi don't give up. A 60 lb fish will test you, and a 100+ lb fish is a battle. Captain JR will coach you through it, but you're doing the reeling. We fish on quality tackle — Shimano reels, solid rods, fresh line. Gear failure on a big fish is not an option.",
    keepingYourCatch: "Ahi are big fish, and we practice selective harvest. We're not filling coolers with 80 lb tunas — that's wasteful and bad for the fishery. If we catch multiple fish, we'll select a smaller one to share among the group. You'll leave with fresh ahi for poke or sashimi that night. We bleed and ice everything properly so the meat quality is the best it can be.",
    featuredStory: {
      title: "Our Best Day: 14 Ahi in One Trip",
      description: "October can surprise you. This day the fish were stacked up and feeding aggressively — we couldn't keep lines in the water. 14 yellowfin by the end of the trip, deck covered, everyone exhausted. Days like this don't happen every year, but when fall conditions line up right, the bite can be better than summer.",
      images: [
        "reel-addiction-iii/ahi/IMG_6814-web_fsneua",
        "reel-addiction-iii/ahi/IMG_6832_xfyr6b",
        "reel-addiction-iii/ahi/IMG_6862-web_ztvpjg"
      ]
    },
  },
  {
    slug: 'mahi-mahi',
    name: 'Mahi Mahi',
    hawaiianName: 'Mahi Mahi',
    season: 'March - June (peak)',
    image: 'species/mahi-mahi',
    description: "The most colorful fish in the ocean with brilliant greens, golds, and blues. Mahi mahi are aggressive feeders, acrobatic jumpers, and absolutely delicious.",
    techniques: "Trolling near floating debris and weed lines, live bait fishing. Often found in schools, so where there's one, there's usually more.",
    size: 'Average 15-30 lbs, bulls can reach 50-60 lbs',
    hawaiiFact: "Mahi mahi means 'strong-strong' in Hawaiian. It's one of the most sustainable fish to catch and eat. Grilled mahi with local fruit salsa is a Hawaii favorite.",
    metaDescription: "Catch colorful Mahi-Mahi (Dorado) in Hawaii. Spectacular fighters with acrobatic jumps. Reel Addiction III offers year-round action off Oahu.",
  },
  {
    slug: 'ono',
    name: 'Ono',
    hawaiianName: 'Ono',
    season: 'October - March',
    image: 'species/ono',
    description: "The fastest fish in the ocean with blistering runs that will scream line off your reel. Ono are sleek, powerful, and have razor-sharp teeth.",
    techniques: "High-speed trolling is most effective. Ono love wire line and strike fast-moving lures. They often hit without warning and make incredible first runs.",
    size: 'Average 25-50 lbs, can reach 80-100 lbs',
    hawaiiFact: "Ono means 'delicious' in Hawaiian, and they earned that name. The white, flaky meat is considered some of the best eating in the ocean. Perfect for fish tacos or grilled.",
    metaDescription: "Target Ono (Wahoo) - Hawaii's fastest and most delicious fish. High-speed trolling charters aboard Reel Addiction III out of Ko Olina.",
  },
  {
    slug: 'aku',
    name: 'Skipjack Tuna',
    hawaiianName: 'Aku',
    season: 'Peak April-September, available year-round',
    image: 'species/aku',
    description: "Hardworking school fish that are the backbone of Hawaii's fishing culture. Aku are aggressive feeders that attack in packs and provide non-stop action.",
    techniques: "Live bait fishing, chumming, and trolling small lures. When you find a school, it's game on with multiple hookups and constant action.",
    size: 'Average 5-15 lbs, larger fish reach 20-25 lbs',
    hawaiiFact: "Aku is essential to Hawaiian cuisine and culture. It's the traditional fish for poke, and old-timers say the best way to eat it is raw with sea salt, inamona (roasted kukui nut), and limu (seaweed).",
    metaDescription: "Fish for Aku (Skipjack Tuna) off Oahu's coast. Fast action and authentic Hawaiian fishing experience aboard Reel Addiction III charter.",
  },
];

export function getSpeciesBySlug(slug: string): Species | undefined {
  return species.find((s) => s.slug === slug);
}

export function getAllSpeciesSlugs(): string[] {
  return species.map((s) => s.slug);
}
