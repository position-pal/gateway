#!/bin/bash

docker build --no-cache -t local-gateway .
./local-deployment/local-deploy.sh up
docker start gateway
docker logs gateway --follow
