#!/bin/sh

echo "Entrypoint wrapper script"
echo "-------------------------"
# Run npm install
npm install
echo "-------------------------"

# Run command
$@