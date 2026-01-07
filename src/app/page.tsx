import Hero from '@/components/Hero'
import ExploreCards from '@/components/ExploreCards'
import CharterSection from '@/components/CharterSection'
import DailyCatchSection from '@/components/DailyCatchSection'
import Testimonial from '@/components/Testimonial'
import SeaKeeperSection from '@/components/SeaKeeperSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import SocialSidebar from '@/components/SocialSidebar'
import FadeBackground from '@/components/FadeBackground'
import InnerNavigation from '@/components/InnerNavigation'
export default function Home() {
  return (
    <main>
      <InnerNavigation disablePrefetch />
      <SocialSidebar />
      <Hero />
      <FadeBackground>
        <ExploreCards />
        <CharterSection />
        <DailyCatchSection />
      </FadeBackground>
      <Testimonial />
      <SeaKeeperSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}