input_dir="/Users/marcus/Desktop/videos-to-compress"
output_dir="/Users/marcus/Desktop/compressed-videos"

mkdir -p "$output_dir"
rm -rf "$output_dir"/*

for video in "$input_dir"/*.mp4; do

  if [ -f "$video" ]; then

    filename=$(basename "$video")
    output_file="$output_dir/${filename%.*}_compressed.mp4"
    ffmpeg -i "$video" -vcodec libx264 -acodec aac "$output_file"
    
    echo "Compressed: $video -> $output_file"
  else
    echo "No .mp4 files found in $input_dir"
  fi
done

echo "Compression complete!"
