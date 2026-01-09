'use client'
import { usePathname } from 'next/navigation'
import Hero from './Hero'

export default function PersistentHero() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  
  if (!isHomepage) {
    return (
      <div className="hidden">
        <Hero />
      </div>
    )
  }
  
  return <Hero />
}