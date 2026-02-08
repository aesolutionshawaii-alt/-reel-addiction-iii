
import { Metadata } from 'next';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Fish, Utensils, Award, Scale, Snowflake, Sun, ChefHat, ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';
import InnerNavigation from '@/components/InnerNavigation';
import CatchHeroContent from '@/components/CatchHeroContent';
export const metadata: Metadata = {
  title: "Hawaii Fish Guide | Ahi, Mahi, Ono & Marlin | How to Prepare Your Catch",
  description: "What you'll catch on an Oahu fishing charter and how to eat it. Prep tips for Ahi sashimi, grilled Mahi, seared Ono. Plus our simple poke recipe.",
};
export default function TheCatchPage() {
  return (<main className="min-h-screen bg-white"><InnerNavigation />


      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <CloudinaryImage
          src="catch/hero"
          alt="Fresh caught fish being filleted"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <CatchHeroContent />
      </section>

      {/* ===== INTRO - A DIFFERENT KIND OF FISHERY ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto px-6 lg:px-20">
          <div className="mb-12 text-center">
            <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Understanding the Difference
            </p>
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              A Different Kind of Fishery
            </h2>
          </div><div className="mb-16 grid gap-16 md:grid-cols-2 md:items-center md:pl-20 lg:pl-40">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <CloudinaryImage
                src="catch/catch-fresh"
                alt="Fresh caught fish"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="max-w-lg">
              <h3 className="font-outfit text-2xl font-bold text-[#1B3A5F] md:text-3xl">
                A Tradition Built for Freshness
              </h3>
              <div className="mt-3 h-1 w-16 bg-red-600"></div>
              <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600">
                Many of our guests have fished Alaska and loved it. Seasonal runs, big hauls, hundreds of pounds frozen and shipped home. That's a great tradition built for a different purpose.
              </p>
              <p className="mt-4 font-inter text-lg leading-relaxed text-gray-600">
                Hawaii's day-boat troll fishery works differently, and once you understand why, it makes perfect sense.
              </p><p className="mt-4 font-inter text-lg leading-relaxed text-gray-600">
                In Hawaii, fish is eaten fresh or raw. Poke, sashimi, grilled mahi that was swimming hours earlier. The entire culture, from the Honolulu fish auction to the neighborhood poke counter, is built around never-frozen fish.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">

          </div>


          {/* Species We Target */}
          <div className="mt-16">
            <h3 className="mb-8 text-center font-outfit text-2xl font-bold text-[#1B3A5F]">
              What You'll Target
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {[
                { slug: 'ahi', name: 'Ahi', hawaiian: 'Yellowfin Tuna', image: 'species/yellowfin-tuna' },
                { slug: 'pacific-blue-marlin', name: "A'u", hawaiian: 'Blue Marlin', image: 'species/blue-marlin' },
                { slug: 'mahi-mahi', name: 'Mahi Mahi', hawaiian: 'Dorado', image: 'species/mahi-mahi' },
                { slug: 'ono', name: 'Ono', hawaiian: 'Wahoo', image: 'species/ono' },
                { slug: 'striped-marlin', name: 'Nairagi', hawaiian: 'Striped Marlin', image: 'species/striped-marlin' },
                { slug: 'aku', name: 'Aku', hawaiian: 'Skipjack', image: 'species/aku' },
              ].map((fish) => (
                <Link
                  key={fish.slug}
                  href={`/fish/${fish.slug}`}
                  className="group rounded-xl border-2 border-gray-200 bg-white p-3 transition-all hover:border-red-400 hover:shadow-lg"
                >
                  <div className="relative mb-2 aspect-square overflow-hidden rounded-lg">
                    <CloudinaryImage
                      src={fish.image}
                      alt={fish.hawaiian}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>
                  <p className="font-outfit text-sm font-bold text-[#1B3A5F] group-hover:text-red-600 transition-colors">
                    {fish.name}
                  </p>
                  <p className="font-inter text-xs text-gray-500">{fish.hawaiian}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE POLICY ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Our Fish Policy
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Simple, fair, and designed to get you the best eating fish
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#1B3A5F]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid gap-8 md:grid-cols-3">
              {/* 15 lbs */}
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Scale className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-4 font-outfit text-2xl font-bold text-[#1B3A5F]">15 lbs of Whole Fish</h3>
                <p className="font-inter leading-relaxed text-gray-600">
                  You're entitled to 15 pounds of whole fish per charter. That's a lot more than it sounds — enough for multiple meals for your whole group.
                </p>
              </div>

              {/* Captain Selects */}
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Fish className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-4 font-outfit text-2xl font-bold text-[#1B3A5F]">Captain Selects</h3>
                <p className="font-inter leading-relaxed text-gray-600">
                  Captain JR picks which fish to fillet based on eating quality. He knows which fish will taste best tonight and which ones are better suited for the crew.
                </p>
              </div>

              {/* 100+ lbs */}
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="mb-4 font-outfit text-2xl font-bold text-[#1B3A5F]">Trophy Fish (100+ lbs)</h3>
                <p className="font-inter leading-relaxed text-gray-600">
                  Fish over 100 pounds stay with the boat and crew. These giants are rare, celebrated, and often released. You get the photos, the story, and the bragging rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* ===== WHY 15 POUNDS IS PLENTY ===== */}
      {/* Replace your existing "How Much Is 15 Pounds" section with this */}

      <section className="py-20 md:py-28">
        <div className="mx-auto px-6 lg:px-20">
          <div className="mb-12 text-center">
            <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              More Than You Think
            </p>
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Why 15 Pounds Is Plenty
            </h2>
          </div>

          <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-outfit text-2xl font-bold text-[#1B3A5F] md:text-3xl">
                Put It in Restaurant Terms
              </h3>
              <div className="mt-3 h-1 w-16 bg-red-600"></div>
              <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600">
                Order a sashimi platter at a nice restaurant and you're splitting maybe half a pound of fish for $60 to $80. Your 15 pounds of whole fish yields 6 to 8 pounds of fillets. That's roughly 12 to 16 restaurant-quality portions.
              </p>
              <p className="mt-4 font-inter text-lg leading-relaxed text-gray-600">
                At Honolulu fish auction prices, fresh ahi goes for $20 to $40 per pound wholesale. Your share of the catch would cost $150 to $300 at auction, and several times that at a restaurant.
              </p>
              <p className="mt-4 font-inter text-lg leading-relaxed text-gray-600">
                This isn't a consolation prize. It's more high-grade fresh fish than most people eat in a year.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#1B3A5F] p-6 text-center text-white">
                <p className="mb-1 font-outfit text-4xl font-bold">15 lbs</p>
                <p className="font-inter text-sm opacity-80">whole fish</p>
              </div>
              <div className="rounded-2xl bg-[#1B3A5F] p-6 text-center text-white">
                <p className="mb-1 font-outfit text-4xl font-bold">6-8 lbs</p>
                <p className="font-inter text-sm opacity-80">boneless fillets</p>
              </div>
              <div className="rounded-2xl bg-red-600 p-6 text-center text-white">
                <p className="mb-1 font-outfit text-4xl font-bold">12-16</p>
                <p className="font-inter text-sm opacity-80">dinner portions</p>
              </div>
              <div className="rounded-2xl bg-red-600 p-6 text-center text-white">
                <p className="mb-1 font-outfit text-4xl font-bold">$150+</p>
                <p className="font-inter text-sm opacity-80">auction value</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h4 className="mb-4 font-outfit text-xl font-bold text-[#1B3A5F]">Freshness Over Volume</h4>
              <p className="font-inter leading-relaxed text-gray-600">
                The whole point is eating it fresh. 15 pounds is about what a group can realistically consume during a week-long trip. More than that and you're freezing it, which defeats the purpose of Hawaii fishing.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h4 className="mb-4 font-outfit text-xl font-bold text-[#1B3A5F]">Sustainable Fishery</h4>
              <p className="font-inter leading-relaxed text-gray-600">
                Hawaii's pelagic fishery stays healthy because of practices like this. We don't have factory boats strip-mining the ocean. Day boats, reasonable limits, and respect for the resource keep the fish coming back.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-8">
              <h4 className="mb-4 font-outfit text-xl font-bold text-[#1B3A5F]">Industry Standard</h4>
              <p className="font-inter leading-relaxed text-gray-600">
                This isn't Reel Addiction being stingy. It's how Hawaii charters work across the islands. Some boats actually offer less. Our policy is fair, transparent, and designed around how fish is meant to be eaten here.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== THE CREW TRADITION ===== */}
      {/* Add this as a new section, probably after the fish policy section */}

      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto px-6 lg:px-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                How Hawaii Fishing Works
              </p>
              <h2 className="mb-6 font-outfit text-4xl font-bold text-white md:text-5xl">
                The Crew Tradition
              </h2>
              <div className="h-1 w-16 bg-red-600"></div>
              <p className="mt-8 font-inter text-lg leading-relaxed text-white/80">
                In Hawaii, the catch has always been split between guests and crew. This isn't the boat "taking your fish." It's a tradition that goes back generations, and it's how quality crews stay on the water.
              </p>
              <p className="mt-4 font-inter text-lg leading-relaxed text-white/80">
                The crew's share feeds their families, gets traded with other fishermen, and sometimes goes to the auction. It's part of the local fishing economy that keeps this whole culture alive.
              </p>
              <p className="mt-4 font-inter text-lg leading-relaxed text-white/80">
                When you fish with us, you're participating in something that's been done this way for a long time. The split isn't about limiting what you take home. It's about keeping the tradition running the way it's supposed to.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <CloudinaryImage
                src="catch/crew-tradition"
                alt="Crew landing a tuna fish "
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ===== WHAT TO DO WITH YOUR CATCH ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto px-6 lg:px-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              What To Do With Your Catch
            </h2>
            <p className="font-inter text-lg text-gray-600">
              We'll help you make the most of it
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Have It Prepared */}
            <div className="group relative aspect-[3/2] overflow-hidden rounded-2xl">
              <CloudinaryImage
                src="catch/chef"
                alt="Fresh fish fillets"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h3 className="mb-3 font-outfit text-2xl font-bold text-white md:text-3xl">
                  Have It Prepared
                </h3>
                <p className="font-inter text-base leading-relaxed text-white/80 md:text-lg">
                  Staying at Ko Olina? We connect you with chefs who'll prepare your catch for dinner that night. Nothing beats fish you caught hours earlier.
                </p>
              </div>
            </div>

            {/* Mount Your Trophy */}
            <div className="group relative aspect-[3/2] overflow-hidden rounded-2xl">
              <CloudinaryImage
                src="catch/mount2"
                alt="Trophy yellowfin tuna being measured"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <h3 className="mb-3 font-outfit text-2xl font-bold text-white md:text-3xl">
                  Mount Your Trophy
                </h3>
                <p className="font-inter text-base leading-relaxed text-white/80 md:text-lg">
                  We work with Gray Taxidermy, the world's largest marine taxidermy company, to create museum-quality mounts of your trophy fish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO DO WITH EACH SPECIES ===== */}
      {/* This could go in or near your "What To Do With Your Catch" section */}

      <section className="py-20 md:py-28">
        <div className="mx-auto px-6 lg:px-20">
          <div className="mb-12 text-center">
            <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              From Ocean to Plate
            </p>
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              How to Eat What You Catch
            </h2>
            <p className="mx-auto max-w-2xl font-inter text-lg text-gray-600">
              Each species has its own character. Here's how to get the best out of your fish.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-red-400 hover:shadow-lg">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <CloudinaryImage
                  src="species/yellowfin-tuna"
                  alt="Ahi yellowfin tuna"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="mb-2 font-outfit text-xl font-bold text-[#1B3A5F]">Ahi</h3>
              <p className="mb-3 font-inter text-sm font-medium text-red-600">Best within 24 hours</p>
              <p className="font-inter text-sm leading-relaxed text-gray-600">
                The sashimi fish. Slice it thin and eat it raw with soy sauce and wasabi. Also great seared rare. Don't overcook it or you've wasted the best part.
              </p>
              <p className="mt-3 font-inter text-sm font-bold text-[#1B3A5F]">Best prep: Sashimi, poke, seared rare</p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-red-400 hover:shadow-lg">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <CloudinaryImage
                  src="species/mahi-mahi"
                  alt="Mahi mahi dorado"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="mb-2 font-outfit text-xl font-bold text-[#1B3A5F]">Mahi Mahi</h3>
              <p className="mb-3 font-inter text-sm font-medium text-red-600">Good for 2 to 3 days</p>
              <p className="font-inter text-sm leading-relaxed text-gray-600">
                The versatile one. Firm, mild, holds up to almost any preparation. Grill it, blacken it, put it in tacos. Hard to mess up.
              </p>
              <p className="mt-3 font-inter text-sm font-bold text-[#1B3A5F]">Best prep: Grilled, blackened, fish tacos</p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-red-400 hover:shadow-lg">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <CloudinaryImage
                  src="species/ono"
                  alt="Ono wahoo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="mb-2 font-outfit text-xl font-bold text-[#1B3A5F]">Ono</h3>
              <p className="mb-3 font-inter text-sm font-medium text-red-600">Best within 48 hours</p>
              <p className="font-inter text-sm leading-relaxed text-gray-600">
                Firm white meat with a clean taste. The name means "delicious" in Hawaiian and it earns it. Pan sear with butter and garlic, or grill with a light marinade.
              </p>
              <p className="mt-3 font-inter text-sm font-bold text-[#1B3A5F]">Best prep: Pan seared, grilled, ceviche</p>
            </div>

            <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all hover:border-red-400 hover:shadow-lg">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
                <CloudinaryImage
                  src="species/blue-marlin"
                  alt="Pacific blue marlin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="mb-2 font-outfit text-xl font-bold text-[#1B3A5F]">Marlin</h3>
              <p className="mb-3 font-inter text-sm font-medium text-red-600">Smoke it if possible</p>
              <p className="font-inter text-sm leading-relaxed text-gray-600">
                Most people don't realize marlin is edible. Fresh, it's firm and meaty. Smoked marlin is incredible and a local favorite. Ask us about smoking options.
              </p>
              <p className="mt-3 font-inter text-sm font-bold text-[#1B3A5F]">Best prep: Smoked, grilled steaks</p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== SIMPLE POKE RECIPE ===== */}
      {/* Could be a standalone section or part of another section */}

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto px-6 lg:px-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <CloudinaryImage
                src="catch/poke-bowl"
                alt="Fresh ahi poke"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Make It Yourself
              </p>
              <h2 className="mb-6 font-outfit text-3xl font-bold text-[#1B3A5F] md:text-4xl">
                Simple Ahi Poke
              </h2>
              <p className="mb-6 font-inter text-lg leading-relaxed text-gray-600">
                You don't need a professional kitchen. This is what locals make at home with fresh catch. Takes 10 minutes.
              </p>

              <div className="mb-6 rounded-xl bg-white p-6 shadow-md">
                <h4 className="mb-4 font-outfit text-lg font-bold text-[#1B3A5F]">Ingredients</h4>
                <ul className="space-y-2 font-inter text-gray-600">
                  <li>1 lb fresh ahi, cut into 3/4 inch cubes</li>
                  <li>3 tablespoons soy sauce</li>
                  <li>1 tablespoon sesame oil</li>
                  <li>1 teaspoon rice vinegar</li>
                  <li>2 green onions, sliced thin</li>
                  <li>1 teaspoon sesame seeds</li>
                  <li>Optional: pinch of red pepper flakes, diced sweet onion, or limu seaweed if you can find it</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-md">
                <h4 className="mb-4 font-outfit text-lg font-bold text-[#1B3A5F]">Instructions</h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Mix soy sauce, sesame oil, and rice vinegar in a bowl. Add the cubed ahi and toss gently. Fold in green onions. Let it sit for 5 minutes in the fridge. Top with sesame seeds. Eat it with rice or by itself.
                </p>
                <p className="mt-4 font-inter text-sm italic text-gray-500">
                  The fish should be cold and fresh. If it smells fishy, it's not fresh enough for poke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
            Common Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can I take more than 15 lbs?",
                a: "The 15 lb policy ensures sustainable fishing and quality for everyone. That said, if we have an exceptional day and there's plenty to go around, Captain JR may offer additional fish at his discretion."
              },
              {
                q: "Why does the captain choose which fish to fillet?",
                a: "Captain JR knows which fish will eat best. Some fish are better fresh that day, others are better for the crew who will eat them tomorrow. He's looking out for your dining experience."
              },
              {
                q: "Can I freeze the fish and take it home?",
                a: "You can, but we don't recommend it. Hawaii fish is meant to be eaten fresh — freezing degrades the texture and flavor that makes our fish special. Enjoy it during your trip for the best experience."
              },
              {
                q: "What happens to fish over 100 lbs?",
                a: "Trophy fish often stay with the boat and crew, or are released to fight another day. You get all the photos and memories. These fish are rare and special — catching one is an achievement regardless of what goes in the cooler."
              },
              {
                q: "Do you clean and fillet the fish?",
                a: "Yes. We fillet your fish dockside and pack it in bags with ice. You leave with ready-to-cook portions."
              },
              {
                q: "What if we catch nothing?",
                a: "It happens occasionally — that's fishing. On Extravaganza charters, we offer Hawaii's only catch guarantee with a partial refund if you don't catch a pelagic fish."
              }
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border-2 border-gray-200 p-6 transition-all hover:border-red-400 hover:shadow-lg md:p-8">
                <h3 className="mb-3 font-outfit text-xl font-bold text-[#1B3A5F]">{item.q}</h3>
                <p className="font-inter leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#1B3A5F] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-outfit text-4xl font-bold text-white md:text-5xl">
            Ready to Catch Dinner?
          </h2>
          <p className="mb-10 font-inter text-xl text-white/80">
            Book your charter and experience Hawaii's freshest fish
          </p>
          <Link
            href="/charters"
            className="inline-block rounded-full bg-red-600 px-10 py-4 font-outfit text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-xl"
          >
            View Charters
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}