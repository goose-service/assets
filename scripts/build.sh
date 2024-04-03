#!/bin/bash

# set root dir
DIR="$( realpath `dirname $0` )/.."

# remove dest
rm -rf $DIR/dest

# build fonts
cd $DIR/packages/fonts
bun run build

# build images
cd $DIR/packages/images
bun run build

# build markdown
cd $DIR/packages/markdown
bun run build

# build components
cd $DIR/packages/components
bun run build

# copy resource
resource_files=( "robots.txt" "index.html" "style.css" )
cd $DIR/resource
for file in "${resource_files[@]}"
do
  cp $file ../dest
done
