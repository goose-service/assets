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

# build markdown
cd $DIR/packages/components
vite build

# copy resource
resource_files=( "robots.txt" "index.html" "style.css" )
cd $DIR/resource
for file in "${resource_files[@]}"
do
  cp $file ../dest
done
