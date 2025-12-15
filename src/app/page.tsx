import Hero from '@/components/Hero'
import ExploreCards from '@/components/ExploreCards'
import CharterSection from '@/components/CharterSection'
import Testimonial from '@/components/Testimonial'
import SeaKeeperSection from '@/components/SeaKeeperSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ExploreCards />
      <CharterSection />
      <Testimonial />
      <SeaKeeperSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
