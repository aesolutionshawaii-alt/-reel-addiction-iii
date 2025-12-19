import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

interface HLSVideoProps {
  src: string
  className?: string
  videoRef?: (el: HTMLVideoElement | null) => void
  onLoadedData?: () => void
  onEnded?: () => void
}

export default function HLSVideo({ 
  src, 
  className = '', 
  videoRef,
  onLoadedData,
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
      return
    }

    // Check if native HLS support (iOS Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      return
    }

    // Use HLS.js for other browsers
    if (Hls.isSupported()) {
      // Destroy existing instance if any
      if (hlsInstance.current) {
        hlsInstance.current.destroy()
      }

      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      })

      hlsInstance.current = hls
      hls.loadSource(src)
      hls.attachMedia(video)

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
      loop
      onLoadedData={onLoadedData}
      onEnded={onEnded}
    />
  )
}