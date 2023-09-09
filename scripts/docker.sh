#!/bin/bash

script="$(basename "$(test -L "$0" && readlink "$0" || echo "$0")")"
IMAGE_NAME="redgoose/assets.redgoose.me:latest"

case "$1" in

  build)
    docker buildx build --platform=linux/amd64 -t $IMAGE_NAME .
    ;;

  upload)
    docker save $IMAGE_NAME | ssh -C redgoose.me 'cd ~/docker/assets && docker load'
    ;;

  upgrade)
    docker buildx build --platform=linux/amd64 -t $IMAGE_NAME .
    docker save $IMAGE_NAME | ssh -C goose@redgoose.me 'cd ~/docker/assets && docker-compose down && docker load && docker-compose up -d && cd ../service && ./cmd.sh service reload'
    ;;

  *)
    echo "Usage: ${script} {build|upload|upgrade}" >&2
    exit 3
    ;;

esac
