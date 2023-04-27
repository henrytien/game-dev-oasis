#!/bin/bash

# Check if package.json exists
if [ ! -f package.json ]; then
  echo "Error: package.json not found. Make sure you're in the correct directory."
  exit 1
fi

# Run the build command
echo "Building the project..."
npm run build

# Check the build exit status
if [ $? -ne 0 ]; then
  echo "Error: Build failed. Check the build logs for details."
  exit 1
fi

echo "Build successful."

# Run the serve command
echo "Starting the server..."
npm run serve
