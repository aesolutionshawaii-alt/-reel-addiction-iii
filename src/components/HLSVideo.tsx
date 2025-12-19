'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Hls from 'hls.js'

interface HLSVideoProps {
  src: string
  poster?: string
  className?: string
  style?: React.CSSProperties
  onLoadedData?: () => void
  videoRef?: (el: HTMLVideoElement | null) => void
}

export default function HLSVideo({ 
  src, 
  poster, 
  className, 
  style, 
  onLoadedData,
  videoRef 
}: HLSVideoProps) {
  const internalRef = useRef<HTMLVideoElement | null>(null)
  const hlsRef = useRef<Hls | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  const setRef = useCallback((el: HTMLVideoElement | null) => {
    internalRef.current = el
    if (videoRef) videoRef(el)
  }, [videoRef])

  // Intersection Observer - preload when near viewport
  useEffect(() => {
    const video = internalRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
          }
        })
      },
      { 
        rootMargin: '200px',
        threshold: 0 
      }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  // Attach HLS once, keep alive
  useEffect(() => {
    const video = internalRef.current
    if (!video || !shouldLoad || hlsRef.current) return

    // Safari native HLS
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      return
    }

    // Chrome/Firefox via hls.js
    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 10,
        maxMaxBufferLength: 20,
        startLevel: 0,
        enableWorker: true,
      })
      
      hls.loadSource(src)
      hls.attachMedia(video)
      hlsRef.current = hls

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('HLS fatal error:', data)
        }
      })
    }
  }, [src, shouldLoad])

  // Only destroy on unmount
  useEffect(() => {
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
      }
    }
  }, [])

  return (
    <video
      ref={setRef}
      poster={poster}
      className={className}
      style={style}
      loop
      muted
      playsInline
      preload="none"
      onLoadedData={onLoadedData}
    />
  )
}