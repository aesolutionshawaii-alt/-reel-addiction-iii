#!/bin/bash
# Generate high-quality HLS streams for desktop videos
# Single quality level at 1080p - no adaptive (desktop has good bandwidth)
# CRF 18 for quality matching original MP4s

set -e

VIDEOS=(
  "hero-video"
  "charter-34day-web"
  "charter-fullday-web"
  "charter-extravaganza-web"
  "charter-custom-web"
)

INPUT_DIR="public/videos"
OUTPUT_DIR="public/videos/hls-desktop"

for VIDEO in "${VIDEOS[@]}"; do
  echo "=== Processing $VIDEO ==="

  INPUT="$INPUT_DIR/$VIDEO.mp4"
  OUT="$OUTPUT_DIR/$VIDEO"

  # Create output directory
  mkdir -p "$OUT"

  # Single high-quality 1080p stream
  # CRF 18 = high quality, maxrate 15000k = won't constrain (originals are ~12Mbps)
  ffmpeg -i "$INPUT" \
    -c:v libx264 \
    -crf 18 \
    -maxrate 15000k \
    -bufsize 30000k \
    -preset slow \
    -profile:v high \
    -level 4.1 \
    -an \
    -f hls \
    -hls_time 4 \
    -hls_playlist_type vod \
    -hls_segment_filename "$OUT/segment-%03d.ts" \
    "$OUT/playlist.m3u8"

  echo "=== Completed $VIDEO ==="
  echo ""
done

echo "All videos processed!"
du -sh "$OUTPUT_DIR"/*
