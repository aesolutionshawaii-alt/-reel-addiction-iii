'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FadeBackground({ children }: { children: React.ReactNode }) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(triggerRef, { once: false, margin: "-50% 0px -50% 0px" })

  return (
    <motion.div 
      animate={{ backgroundColor: isInView ? "#000000" : "#f7f5f2" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative"
    >
      {children}
      {/* Invisible trigger element - positioned after the first section */}
      <div ref={triggerRef} className="absolute top-[600px] left-0 h-1 w-full pointer-events-none" />
    </motion.div>
  )
}
