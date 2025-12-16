'use client'
import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function FadeBackground({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start -20%", "start -70%"]
  })
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#f7f5f2", "#000000"]
  )

  return (
    <motion.div 
      ref={ref}
      style={{ backgroundColor }}
    >
      {children}
    </motion.div>
  )
}
