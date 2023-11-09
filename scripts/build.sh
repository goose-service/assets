#!/bin/bash

# set root dir
DIR="$( realpath `dirname $0` )/.."

# build fonts
cd $DIR/packages/fonts
${DIR}/node_modules/.bin/vite build

# build images
cd $DIR/packages/images
${DIR}/node_modules/.bin/vite build

# build markdown
cd $DIR/packages/markdown
${DIR}/node_modules/.bin/vite build

# build markdown
cd $DIR/packages/components
${DIR}/node_modules/.bin/vite build

# copy resource
resource_files=( "robots.txt" "index.html" "style.css" )
cd $DIR/resource
for file in "${resource_files[@]}"
do
  cp $file ../dest
done
