'use client'
import { useEffect, useRef, useCallback } from 'react'
import Hls from 'hls.js'

interface HLSVideoProps {
  src: string
  poster?: string
  className?: string
  style?: React.CSSProperties
  onLoadedData?: () => void
  onEnded?: () => void
  videoRef?: (el: HTMLVideoElement | null) => void
}

export default function HLSVideo({ 
  src, 
  poster, 
  className, 
  style, 
  onLoadedData,
  onEnded,
  videoRef 
}: HLSVideoProps) {
  const internalRef = useRef<HTMLVideoElement | null>(null)
  const hlsRef = useRef<Hls | null>(null)

  const setRef = useCallback((el: HTMLVideoElement | null) => {
    internalRef.current = el
    if (videoRef) videoRef(el)
  }, [videoRef])

  // Aggressive destroy/recreate - only active card has HLS attached
  useEffect(() => {
    const video = internalRef.current
    if (!video) return

    // If src is empty, destroy HLS and clear video
    if (!src) {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
      video.src = ''
      video.load() // Force clear
      return
    }

    // If HLS already exists, don't recreate
    if (hlsRef.current) return

    // Safari native HLS
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      return
    }

    // Chrome/Firefox via hls.js
    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 5,      // Reduced from 10
        maxMaxBufferLength: 10,   // Reduced from 20
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
  }, [src])

  // Cleanup on unmount
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
      muted
      playsInline
      preload="none"
      onLoadedData={onLoadedData}
      onEnded={onEnded}
    />
  )
}