#!/usr/bin/env bash

set -euo pipefail

if [ ! -d "node_modules/vitepress" ]; then
  npm ci
fi

if [ ! -d "example/node_modules/react-dom" ]; then
  npm --prefix example ci
fi

npm --prefix docs run docs:build
