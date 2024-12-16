#!/bin/bash

repos=('chat-service' 'location-service' 'notification-service' 'user-service')
dest_dir="./src/grpc/proto"

for repo in "${repos[@]}"; do
    echo "Cloning https://github.com/position-pal/$repo..."
    
    git clone --depth 1 "https://github.com/position-pal/$repo"
    
    if [ -d "$repo" ]; then
        find "$repo" -name '*.proto' -exec cp {} "$dest_dir" \;
        rm -rf "$repo"
    else
        echo "Error while cloning $repo."
    fi
done