'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FadeBackground({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-50% 0px -50% 0px" })

  return (
    <motion.div 
      ref={ref}
      animate={{ backgroundColor: isInView ? "#000000" : "#f7f5f2" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
