'use client'
import { useRef, Children, cloneElement, isValidElement } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FadeBackground({ children }: { children: React.ReactNode }) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(triggerRef, { once: false })
  
  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { isDark: isInView } as any)
    }
    return child
  })
  
  return (
    <motion.div 
      animate={{ backgroundColor: isInView ? "#0d0d0f" : "#f7f5f2" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      style={{ position: 'relative' }}
    >
      {childrenWithProps}
      <div ref={triggerRef} style={{ position: 'absolute', top: '1200px', left: 0, height: '1000px', width: '100%', pointerEvents: 'none' }} />
    </motion.div>
  )
}