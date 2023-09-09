#!/bin/bash

# set root dir
DIR="$( realpath `dirname $0` )/.."

# build fonts
cd $DIR/packages/fonts
vite build

# build images
cd $DIR/packages/images
vite build

# build markdown
cd $DIR/packages/markdown
vite build

# copy resource
cd $DIR/resource
cp robots.txt ../dest
cp index.html ../dest
