#!/bin/bash
# Generate web-optimized HLS streams (Porsche-style)
# 2-second segments, ~1.5-2 MB each, CRF 23 for web quality

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

  mkdir -p "$OUT"

  # Web-optimized encoding:
  # - CRF 23 = good web quality (not broadcast, but clean)
  # - maxrate 5M = ~1.25 MB per 2-second segment
  # - hls_time 2 = 2-second segments for quick initial load
  ffmpeg -i "$INPUT" \
    -c:v libx264 \
    -crf 23 \
    -maxrate 5M \
    -bufsize 10M \
    -preset slow \
    -profile:v main \
    -level 4.0 \
    -an \
    -f hls \
    -hls_time 2 \
    -hls_playlist_type vod \
    -hls_segment_filename "$OUT/seg-%03d.ts" \
    "$OUT/playlist.m3u8"

  echo "=== Completed $VIDEO ==="
done

echo ""
echo "Segment sizes:"
ls -lh "$OUTPUT_DIR"/*/seg-*.ts | awk '{print $5, $9}' | head -20
echo ""
echo "Total sizes:"
du -sh "$OUTPUT_DIR"/*
