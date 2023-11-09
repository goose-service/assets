#!/bin/bash

# set root dir
DIR="$( realpath `dirname $0` )/.."

find ${DIR} -name 'node_modules' -type d -prune -exec rm -rf '{}' +
rm ${DIR}/bun.lockb
