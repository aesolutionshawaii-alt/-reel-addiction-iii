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
    season: 'Year-round',
    image: 'species/yellowfin-tuna',
    description: "Powerful, fast, and delicious. Yellowfin tuna are prized both as sport fish and for their incredible meat quality. They fight hard and dive deep.",
    techniques: "Live bait fishing, chunk fishing around FADs, high-speed trolling. We often find them feeding under birds or around floating debris and FADs.",
    size: 'Average 40-100 lbs, trophy fish 150-250 lbs',
    hawaiiFact: "Ahi is the Hawaiian name and it's the most sought-after fish in local markets. Fresh ahi poke is a Hawaiian staple, and nothing beats sashimi from a fish you just caught.",
    metaDescription: "Catch Ahi (Yellowfin Tuna) in Oahu, Hawaii aboard Reel Addiction III. Year-round fishing for Hawaii's most prized table fish. Book your charter today.",
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
