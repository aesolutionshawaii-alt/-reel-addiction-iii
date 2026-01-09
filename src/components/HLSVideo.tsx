import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

interface HLSVideoProps {
  src: string
  className?: string
  videoRef?: (el: HTMLVideoElement | null) => void
  onCanPlayThrough?: () => void
  onEnded?: () => void
}

// Detect Safari once at module level
const isSafari = typeof navigator !== 'undefined' && 
  /Safari/.test(navigator.userAgent) && 
  !/Chrome/.test(navigator.userAgent)

export default function HLSVideo({ 
  src, 
  className = '', 
  videoRef,
  onCanPlayThrough,
  onEnded
}: HLSVideoProps) {
  const videoElement = useRef<HTMLVideoElement>(null)
  const hlsInstance = useRef<Hls | null>(null)
  const previousSrc = useRef<string>('')
  const hasCalledLoad = useRef<boolean>(false)

  useEffect(() => {
    const video = videoElement.current
    if (!video) return

    // Pass ref to parent
    if (videoRef) {
      videoRef(video)
    }

    // CRITICAL: Only initialize HLS if we have a src AND it's different from previous
    if (!src) {
      // Clean up any existing HLS instance
      if (hlsInstance.current) {
        hlsInstance.current.destroy()
        hlsInstance.current = null
      }
      video.src = ''
      previousSrc.current = ''
      hasCalledLoad.current = false
      console.log('HLS: No src provided, clearing video')
      return
    }

    // Don't re-initialize if src hasn't changed
    if (src === previousSrc.current) {
      console.log('HLS: Src unchanged, skipping re-init:', src)
      return
    }

    previousSrc.current = src
    hasCalledLoad.current = false
    console.log('HLS: Initializing with src:', src)

    if (isSafari && video.canPlayType('application/vnd.apple.mpegurl')) {
      console.log('HLS: Using native HLS support (Safari)')
      
      // For Safari: set src, then call load() ONCE to trigger segment buffering
      // Without load(), Safari with preload="metadata" only fetches the playlist
      video.src = src
      
      // Call load() after a brief delay to ensure src is processed
      // Note: hasCalledLoad guard prevents double-calling even if effect re-runs
      setTimeout(() => {
        if (!hasCalledLoad.current) {
          hasCalledLoad.current = true
          video.load()
          console.log('HLS: Called load() for Safari')
        }
      }, 10)
      
      return
    }

    // Use HLS.js for other browsers
    if (Hls.isSupported()) {
      console.log('HLS: HLS.js is supported, creating instance')
      
      // Destroy existing instance if any
      if (hlsInstance.current) {
        hlsInstance.current.destroy()
      }

      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
        maxBufferLength: 10,
        maxMaxBufferLength: 20,
        maxBufferSize: 10 * 1000 * 1000,
        maxBufferHole: 0.5,
        autoStartLoad: true,
        startPosition: 0,
      })

      hlsInstance.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS: Manifest parsed, starting load')
        hls.startLoad()
      })

      hls.on(Hls.Events.FRAG_LOADED, (event, data) => {
        console.log('HLS: Fragment loaded:', data.frag.url)
      })

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('HLS network error, trying to recover...')
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('HLS media error, trying to recover...')
              hls.recoverMediaError()
              break
            default:
              console.error('HLS fatal error, destroying instance')
              hls.destroy()
              break
          }
        }
      })
    }

    // Cleanup
    return () => {
      if (hlsInstance.current) {
        hlsInstance.current.destroy()
        hlsInstance.current = null
      }
    }
  }, [src])

  return (
    <video
      ref={videoElement}
      className={className}
      playsInline
      muted
      preload={isSafari ? "auto" : "metadata"}
      onCanPlayThrough={onCanPlayThrough}
      onEnded={onEnded}
    />
  )
}