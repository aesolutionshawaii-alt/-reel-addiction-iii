#!/bin/bash
# Adaptive Bitrate HLS for Hero Video
# Structure matches Porsche approach

set -e

INPUT="public/videos/hero-video.mp4"
OUTPUT_DIR="public/videos/hls-desktop/hero-video"

# Clean existing files
rm -f "$OUTPUT_DIR"/*.ts "$OUTPUT_DIR"/*.m3u8

# Common settings
PRESET="slow"
GOP="60"
SEG_TIME="2"

echo "=== Encoding ULD (426x240 @ 400kbps) ==="
ffmpeg -i "$INPUT" \
  -vf "scale=426:240" \
  -c:v libx264 -profile:v baseline -level 2.1 \
  -b:v 400k -maxrate 500k -bufsize 800k \
  -preset $PRESET -g $GOP -sc_threshold 0 \
  -an -f hls \
  -hls_time $SEG_TIME \
  -hls_playlist_type vod \
  -hls_segment_filename "$OUTPUT_DIR/hls_uld_%05d.ts" \
  "$OUTPUT_DIR/hls_uld.m3u8"

echo "=== Encoding LD (640x360 @ 800kbps) ==="
ffmpeg -i "$INPUT" \
  -vf "scale=640:360" \
  -c:v libx264 -profile:v main -level 3.0 \
  -b:v 800k -maxrate 1000k -bufsize 1600k \
  -preset $PRESET -g $GOP -sc_threshold 0 \
  -an -f hls \
  -hls_time $SEG_TIME \
  -hls_playlist_type vod \
  -hls_segment_filename "$OUTPUT_DIR/hls_ld_%05d.ts" \
  "$OUTPUT_DIR/hls_ld.m3u8"

echo "=== Encoding SD (854x480 @ 1.5Mbps) ==="
ffmpeg -i "$INPUT" \
  -vf "scale=854:480" \
  -c:v libx264 -profile:v main -level 3.1 \
  -b:v 1500k -maxrate 2000k -bufsize 3000k \
  -preset $PRESET -g $GOP -sc_threshold 0 \
  -an -f hls \
  -hls_time $SEG_TIME \
  -hls_playlist_type vod \
  -hls_segment_filename "$OUTPUT_DIR/hls_sd_%05d.ts" \
  "$OUTPUT_DIR/hls_sd.m3u8"

echo "=== Encoding HD (1280x720 @ 3Mbps) ==="
ffmpeg -i "$INPUT" \
  -vf "scale=1280:720" \
  -c:v libx264 -profile:v high -level 4.0 \
  -b:v 3000k -maxrate 4000k -bufsize 6000k \
  -preset $PRESET -g $GOP -sc_threshold 0 \
  -an -f hls \
  -hls_time $SEG_TIME \
  -hls_playlist_type vod \
  -hls_segment_filename "$OUTPUT_DIR/hls_hd_%05d.ts" \
  "$OUTPUT_DIR/hls_hd.m3u8"

echo "=== Encoding FHD (1920x1080 @ 6Mbps) ==="
ffmpeg -i "$INPUT" \
  -vf "scale=1920:1080" \
  -c:v libx264 -profile:v high -level 4.1 \
  -b:v 6000k -maxrate 8000k -bufsize 12000k \
  -preset $PRESET -g $GOP -sc_threshold 0 \
  -an -f hls \
  -hls_time $SEG_TIME \
  -hls_playlist_type vod \
  -hls_segment_filename "$OUTPUT_DIR/hls_fhd_%05d.ts" \
  "$OUTPUT_DIR/hls_fhd.m3u8"

echo "=== Creating Master Playlist ==="
cat > "$OUTPUT_DIR/playlist.m3u8" << 'EOF'
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-INDEPENDENT-SEGMENTS
#EXT-X-STREAM-INF:BANDWIDTH=6000000,AVERAGE-BANDWIDTH=6000000,CODECS="avc1.640028",RESOLUTION=1920x1080,FRAME-RATE=30.000
hls_fhd.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3000000,AVERAGE-BANDWIDTH=3000000,CODECS="avc1.640028",RESOLUTION=1280x720,FRAME-RATE=30.000
hls_hd.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1500000,AVERAGE-BANDWIDTH=1500000,CODECS="avc1.4d401f",RESOLUTION=854x480,FRAME-RATE=30.000
hls_sd.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=800000,AVERAGE-BANDWIDTH=800000,CODECS="avc1.4d401e",RESOLUTION=640x360,FRAME-RATE=30.000
hls_ld.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=400000,AVERAGE-BANDWIDTH=400000,CODECS="avc1.42c015",RESOLUTION=426x240,FRAME-RATE=30.000
hls_uld.m3u8
EOF

echo ""
echo "=== DONE - Segment Sizes ==="
ls -lh "$OUTPUT_DIR"/*.ts
echo ""
echo "=== Total Size ==="
du -sh "$OUTPUT_DIR"
