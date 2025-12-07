#!/bin/bash

script="$(basename "$(test -L "$0" && readlink "$0" || echo "$0")")"
IMAGE_NAME="redgoose/assets.redgoose.me:latest"
TMP_FILE="_tmp.tar"
HOST="redgoose.me"

build() {
  ./scripts/build.sh
  docker build -t $IMAGE_NAME .
}

upload() {
  docker save -o $TMP_FILE $IMAGE_NAME
  cat $TMP_FILE | ssh $HOST 'docker load'
  rm $TMP_FILE
}

case "$1" in

  build)
    build
    ;;

  upload)
    upload
    ;;

  upgrade)
    build
    upload
    ;;

  *)
    echo "Usage: ${script} {build|upload|upgrade}" >&2
    exit 0
    ;;

esac
