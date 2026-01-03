'use client';
import CloudinaryImage from '@/components/CloudinaryImage';
import Link from 'next/link';
import { Fish, Utensils, Award, Scale, Snowflake, Sun, ChefHat, ExternalLink } from 'lucide-react';
import Footer from '@/components/Footer';

export default function TheCatchPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back to Home */}
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-700 shadow-lg backdrop-blur transition-colors hover:bg-white hover:text-red-600"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Home</span>
      </Link>

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
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 font-outfit text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            Fresh, Not Frozen
          </p>
          <h1 className="mb-6 font-outfit text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Your Catch
          </h1>
          <p className="max-w-2xl font-inter text-xl text-white/90 md:text-2xl">
            Hawaii's fish culture is different — and that's a good thing
          </p>
        </div>
      </section>

      {/* ===== INTRO - WHY HAWAII IS DIFFERENT ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              This Isn't Alaska
            </h2>
            <p className="font-inter text-lg leading-relaxed text-gray-600 md:text-xl">
              If you've fished Alaska and shipped home 500 pounds of frozen salmon, Hawaii might feel different at first. Here's why that's actually better.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Alaska Style */}
            <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Snowflake className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-gray-700">Alaska Model</h3>
              </div>
              <ul className="space-y-3 font-inter text-gray-600">
                <li>• Seasonal runs, catch in bulk</li>
                <li>• Flash freeze and ship home</li>
                <li>• Eat frozen fish for months</li>
                <li>• Quantity over immediacy</li>
              </ul>
            </div>

            {/* Hawaii Style */}
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Sun className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-[#1B3A5F]">Hawaii Model</h3>
              </div>
              <ul className="space-y-3 font-inter text-gray-700">
                <li>• Year-round fishing, daily trips</li>
                <li>• Never frozen — always fresh</li>
                <li>• Eat tonight as sashimi or poke</li>
                <li>• Quality and freshness first</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1B3A5F] p-8 text-center text-white md:p-12">
            <p className="font-inter text-lg leading-relaxed md:text-xl">
              In Hawaii, fish is eaten <span className="font-bold">fresh or raw</span>. Ahi poke, sashimi, grilled mahi — these dishes depend on fish that's never been frozen. Our local troll day-boat fishing means your catch goes from ocean to plate in hours, not months. <span className="font-bold">This is how fish is meant to be eaten.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== THE POLICY ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              Our Fish Policy
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Simple, fair, and designed to get you the best eating fish
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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
      </section>

      {/* ===== HOW MUCH IS 15 LBS ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-outfit text-4xl font-bold text-[#1B3A5F] md:text-5xl">
              How Much Is 15 Pounds?
            </h2>
            <p className="font-inter text-lg text-gray-600">
              More than you think
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 font-outfit text-2xl font-bold text-[#1B3A5F]">15 lbs whole fish yields roughly:</h3>
                <ul className="space-y-4 font-inter text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✓</span>
                    <span>6-8 lbs of boneless fillets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✓</span>
                    <span>12-16 generous dinner portions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✓</span>
                    <span>Enough sashimi for a party</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">✓</span>
                    <span>Multiple meals during your stay</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-2xl bg-[#1B3A5F] p-8 text-center text-white">
                  <p className="mb-2 font-outfit text-5xl font-bold">15 lbs</p>
                  <p className="font-inter text-lg opacity-80">whole fish</p>
                  <div className="my-4 h-px bg-white/30" />
                  <p className="mb-2 font-outfit text-5xl font-bold">6-8 lbs</p>
                  <p className="font-inter text-lg opacity-80">edible fillets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO DO WITH YOUR CATCH ===== */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
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
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <CloudinaryImage
                src="catch/chef"
                alt="Fresh fish fillets"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="mb-2 font-outfit text-2xl font-bold text-white md:text-3xl">
                  Have It Prepared
                </h3>
                <p className="font-inter text-sm leading-relaxed text-white/80 md:text-base">
                  Staying at Ko Olina? We connect you with chefs who'll prepare your catch for dinner that night. Nothing beats fish you caught hours earlier.
                </p>
              </div>
            </div>

            {/* Mount Your Trophy */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <CloudinaryImage
                src="catch/mount"
                alt="Trophy yellowfin tuna being measured"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="mb-2 font-outfit text-2xl font-bold text-white md:text-3xl">
                  Mount Your Trophy
                </h3>
                <p className="font-inter text-sm leading-relaxed text-white/80 md:text-base">
                  We work with Gray Taxidermy — the world's largest marine taxidermy company — to create museum-quality mounts of your trophy fish.
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