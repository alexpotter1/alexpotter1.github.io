#!/bin/bash

VERSION=$(git rev-parse --short HEAD)
FILE="cv/version.js"
CONST="src/utils/consts.js"
echo "updated files with ${VERSION}"

sed -i'.bak' "1s/.*/let version = '$VERSION';/g" ${FILE}
sed -i'.bak' "5s/.*/export const version = '$VERSION';/g" ${CONST}

rm ${CONST}.bak
