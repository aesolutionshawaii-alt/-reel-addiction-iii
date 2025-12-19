'use client'
import { useEffect, useRef } from 'react'
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

  useEffect(() => {
    const video = internalRef.current
    if (!video || !src) return

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      return
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 10,
        maxMaxBufferLength: 20,
        startLevel: 0,
      })
      
      hls.loadSource(src)
      hls.attachMedia(video)
      hlsRef.current = hls

      return () => {
        hls.destroy()
      }
    }
  }, [src])

  return (
    <video
      ref={(el) => {
        internalRef.current = el
        if (videoRef) videoRef(el)
      }}
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