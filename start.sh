#!/bin/sh
# Startup wrapper — guarantees $PORT expansion no matter how Docker parses CMD.
# Railway sets $PORT at runtime; default to 8080 for local Docker runs.

PORT="${PORT:-8080}"
echo "[start.sh] Booting gunicorn on 0.0.0.0:${PORT}"

exec gunicorn app:app \
    --bind "0.0.0.0:${PORT}" \
    --workers 1 \
    --threads 2 \
    --timeout 120 \
    --graceful-timeout 30 \
    --access-logfile - \
    --error-logfile - \
    --log-level info
