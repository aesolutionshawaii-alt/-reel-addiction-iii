import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface HLSVideoProps {
  src: string
  className?: string
  videoRef?: (el: HTMLVideoElement | null) => void
  onCanPlayThrough?: () => void
  onEnded?: () => void
}

export default function HLSVideo({ 
  src, 
  className = '', 
  videoRef,
  onCanPlayThrough,
  onEnded
}: HLSVideoProps) {
  const videoElement = useRef<HTMLVideoElement>(null)
  const hlsInstance = useRef<Hls | null>(null)

  useEffect(() => {
    const video = videoElement.current
    if (!video) return

    // Pass ref to parent
    if (videoRef) {
      videoRef(video)
    }

    // CRITICAL: Only initialize HLS if we have a src
    if (!src) {
      // Clean up any existing HLS instance
      if (hlsInstance.current) {
        hlsInstance.current.destroy()
        hlsInstance.current = null
      }
      video.src = ''
      console.log('HLS: No src provided, clearing video')
      return
    }

    console.log('HLS: Initializing with src:', src)

    // Check if native HLS support (iOS Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      console.log('HLS: Using native HLS support')
      video.src = src
      video.load() // Explicitly trigger loading for Safari
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
        maxBufferLength: 10,        // Reduce buffer size for mobile
        maxMaxBufferLength: 20,     // Cap max buffer
        maxBufferSize: 10 * 1000 * 1000, // 10MB max buffer
        maxBufferHole: 0.5,         // More aggressive gap jumping
        autoStartLoad: true,        // Explicitly start loading segments
        startPosition: 0,           // Start from beginning
      })

      hlsInstance.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)
      
      // Add detailed logging and force loading to start
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS: Manifest parsed, starting load')
        hls.startLoad() // Explicitly start loading segments
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
  }, [src]) // FIXED: Removed videoRef from dependencies - it was causing infinite loop

  return (
    <video
      ref={videoElement}
      className={className}
      playsInline
      muted
      preload="metadata"
      onCanPlayThrough={onCanPlayThrough}
      onEnded={onEnded}
    />
  )
}