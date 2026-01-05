import Hero from '@/components/Hero'
import ExploreCards from '@/components/ExploreCards'
import CharterSectionV2 from '@/components/CharterSectionV2'
import DailyCatchSection from '@/components/DailyCatchSection'
import Testimonial from '@/components/Testimonial'
import SeaKeeperSection from '@/components/SeaKeeperSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import FadeBackground from '@/components/FadeBackground'

export default function Home() {
  return (
    <main>
      <SocialSidebar />
      <Hero />
      <FadeBackground>
        <ExploreCards />
        <CharterSectionV2 />
        <DailyCatchSection />
      </FadeBackground>
      <Testimonial />
      <SeaKeeperSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}