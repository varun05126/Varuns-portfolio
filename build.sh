#!/usr/bin/env bash
set -euo pipefail

echo "Installing backend dependencies..."
npm ci --prefix backend

echo "Installing frontend dependencies..."
npm ci --prefix frontend

echo "Building frontend..."
npm run build --prefix frontend
