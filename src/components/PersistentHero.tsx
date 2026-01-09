'use client'
import { usePathname } from 'next/navigation'
import Hero from './Hero'

export default function PersistentHero() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  
  return (
    <div className={isHomepage ? '' : 'hidden'}>
      <Hero />
    </div>
  )
}