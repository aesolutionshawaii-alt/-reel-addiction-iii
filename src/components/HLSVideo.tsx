import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface HLSVideoProps {
  src: string
  className?: string
  videoRef?: (el: HTMLVideoElement | null) => void
  onCanPlayThrough?: () => void
  onEnded?: () => void
  onPlaying?: () => void
  stopLoading?: boolean  // When true, stops HLS segment downloads to free bandwidth
  loop?: boolean
  autoPlay?: boolean
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
  onEnded,
  onPlaying,
  stopLoading = false,
  loop = false,
  autoPlay = false
}: HLSVideoProps) {
  const videoElement = useRef<HTMLVideoElement>(null)
  const hlsInstance = useRef<Hls | null>(null)
  const previousSrc = useRef<string>('')
  const hasSignaledReady = useRef<boolean>(false)
  const wasStopped = useRef<boolean>(false)

  useEffect(() => {
    const video = videoElement.current
    if (!video) return

    // Pass ref to parent
    if (videoRef) {
      videoRef(video)
    }

    // CRITICAL: Only initialize HLS if we have a src AND it's different from previous
    if (!src) {
      // Only clean up if we previously had a src (avoids spam on initial mount)
      if (previousSrc.current) {
        console.log('HLS: Clearing video (was:', previousSrc.current, ')')
        if (hlsInstance.current) {
          hlsInstance.current.destroy()
          hlsInstance.current = null
        }
        video.src = ''
        previousSrc.current = ''
      }
      return
    }

    // Don't re-initialize if src hasn't changed
    if (src === previousSrc.current) {
      return
    }

    previousSrc.current = src
    console.log('HLS: Initializing with src:', src)

    if (isSafari && video.canPlayType('application/vnd.apple.mpegurl')) {
      console.log('HLS: Using native HLS support (Safari)')
      video.src = src
      video.load() // Explicitly trigger loading for Safari

      const handleCanPlayThrough = () => {
        console.log('HLS Safari: canplaythrough fired')
        if (onCanPlayThrough) onCanPlayThrough()
        if (autoPlay) {
          video.play().catch(() => {})
        }
      }

      video.addEventListener('canplaythrough', handleCanPlayThrough, { once: true })

      // Safari cleanup - important to prevent memory leaks
      return () => {
        video.removeEventListener('canplaythrough', handleCanPlayThrough)
      }
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
        // Porsche-style minimal buffering: only load 1-2 segments initially
        maxBufferLength: 4,         // Max 4 seconds buffered (2 segments)
        maxMaxBufferLength: 8,      // Absolute max 8 seconds
        maxBufferSize: 4 * 1000 * 1000, // 4MB max buffer
        backBufferLength: 0,        // Don't keep played segments in memory
        maxBufferHole: 0.5,
        autoStartLoad: true,
        startPosition: 0,
      })

      hlsInstance.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)
      
      // Add detailed logging and force loading to start
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS: Manifest parsed, starting load')
        hls.startLoad() // Explicitly start loading segments
      })

      // Use FRAG_BUFFERED to know when video is actually ready to display
      // This fires when a fragment has been buffered into the video element
      let hasSignaledReady = false
      hls.on(Hls.Events.FRAG_BUFFERED, () => {
        if (!hasSignaledReady) {
          hasSignaledReady = true
          console.log('HLS: First fragment buffered, video ready to display')
          if (onCanPlayThrough) onCanPlayThrough()
          if (autoPlay) {
            video.play().catch(() => {})
          }
        }
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

  // Stop/resume loading based on stopLoading prop - frees bandwidth for active video
  useEffect(() => {
    if (!hlsInstance.current) return

    if (stopLoading) {
      hlsInstance.current.stopLoad()
      wasStopped.current = true
    } else if (wasStopped.current) {
      // Only call startLoad if we previously stopped - avoid duplicate startLoad on mount
      hlsInstance.current.startLoad()
      wasStopped.current = false
    }
  }, [stopLoading])

  // Don't use native onCanPlayThrough - we handle it through HLS events
  // (Safari via addEventListener, HLS.js via FRAG_BUFFERED)
  return (
    <video
      ref={videoElement}
      className={className}
      playsInline
      muted
      preload="metadata"
      loop={loop}
      onEnded={onEnded}
      onPlaying={onPlaying}
    />
  )
}