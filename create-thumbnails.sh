#!/bin/bash

input_dir="static/images/full"
output_dir="static/images/thumbnails"

rm -f $output_dir/*

for file in "$input_dir"/*; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        convert "$file" -resize 400x "$output_dir/$filename"
    fi
done
