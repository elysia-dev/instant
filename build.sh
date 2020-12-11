#!/bin/bash
rm -rf dist/
mkdir dist
mkdir dist/src
mkdir dist/src/css
echo "dist folder reset"

CSS_FILE_NAME="style"
JS_FILE_NAME="test.js"

cssnano public/src/css/style.css dist/src/css/style.css

cp -r public/src/shared dist/src/
cp -r public/src/js dist/src/
cp public/favicon.ico dist/
cp public/index.html dist/index.html