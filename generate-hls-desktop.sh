#!/bin/bash
# Generate adaptive HLS streams for desktop videos
# 3 quality levels: 1080p@5000k, 720p@2500k, 480p@1000k

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

  # Generate all 3 quality levels in one ffmpeg pass (more efficient)
  # Using CRF mode with maxrate cap for quality + size control
  ffmpeg -i "$INPUT" \
    -filter_complex "[0:v]split=3[v1][v2][v3]; \
      [v1]scale=1920:1080[v1out]; \
      [v2]scale=1280:720[v2out]; \
      [v3]scale=854:480[v3out]" \
    -map "[v1out]" -c:v:0 libx264 -crf 18 -maxrate 5000k -bufsize 10000k -preset slow -profile:v high -level 4.1 \
    -map "[v2out]" -c:v:1 libx264 -crf 20 -maxrate 2500k -bufsize 5000k -preset slow -profile:v main -level 3.1 \
    -map "[v3out]" -c:v:2 libx264 -crf 22 -maxrate 1000k -bufsize 2000k -preset slow -profile:v main -level 3.0 \
    -an \
    -f hls \
    -hls_time 4 \
    -hls_playlist_type vod \
    -hls_flags independent_segments \
    -hls_segment_filename "$OUT/stream_%v/segment-%03d.ts" \
    -master_pl_name master.m3u8 \
    -var_stream_map "v:0 v:1 v:2" \
    "$OUT/stream_%v/playlist.m3u8"

  # Create master playlist with proper bandwidth tags
  cat > "$OUT/master.m3u8" << 'EOF'
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080,NAME="1080p"
stream_0/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2500000,RESOLUTION=1280x720,NAME="720p"
stream_1/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1000000,RESOLUTION=854x480,NAME="480p"
stream_2/playlist.m3u8
EOF

  echo "=== Completed $VIDEO ==="
  echo ""
done

echo "All videos processed!"
echo ""
echo "Output structure:"
ls -la "$OUTPUT_DIR"
