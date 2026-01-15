#!/bin/bash
# Generate HLS streams - balanced quality/size
# CRF 20, 8 Mbps max, 2-second segments

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

  ffmpeg -i "$INPUT" \
    -c:v libx264 \
    -crf 20 \
    -maxrate 8M \
    -bufsize 16M \
    -preset slow \
    -profile:v high \
    -level 4.1 \
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
ls -lh "$OUTPUT_DIR"/*/seg-*.ts | awk '{print $5, $9}'
echo ""
echo "Total per video:"
du -sh "$OUTPUT_DIR"/*
