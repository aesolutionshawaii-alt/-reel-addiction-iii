'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FadeBackground({ children }: { children: React.ReactNode }) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(triggerRef, { once: false })

  return (
    <motion.div 
      animate={{ backgroundColor: isInView ? "#000000" : "#f7f5f2" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ position: 'relative' }}
    >
      {children}
      <div ref={triggerRef} style={{ position: 'absolute', top: '1000px', left: 0, height: '1px', width: '100%', pointerEvents: 'none' }} />
    </motion.div>
  )
}
