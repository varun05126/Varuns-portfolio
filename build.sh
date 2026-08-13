#!/usr/bin/env bash
set -euo pipefail

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Running Django migrations..."
python manage.py migrate --noinput

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Build completed successfully!"
