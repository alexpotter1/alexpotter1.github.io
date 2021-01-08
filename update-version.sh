#!/bin/bash

VERSION=$(git rev-parse --short HEAD)
FILE="cv/version.js"
echo "updated ${FILE} with ${VERSION}"

sed -i'.bak' "1s/.*/let version = '$VERSION';/g" ${FILE}

