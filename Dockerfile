# Deterministic Python build — bypasses Nixpacks autodetection ambiguity
# (the leftover package.json was confusing Nixpacks into Node-mode).
FROM python:3.11-slim

WORKDIR /app

# Don't buffer Python stdout/stderr so logs show up immediately in Railway.
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PIP_NO_CACHE_DIR=1
ENV PIP_DISABLE_PIP_VERSION_CHECK=1

# Install Python deps first (better Docker-layer caching)
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . /app/

# Default port; Railway will override at runtime.
ENV PORT=8080
EXPOSE 8080

# `exec` so gunicorn becomes PID 1 and receives Railway's stop signals correctly.
# Shell form is required because $PORT is expanded at container start.
# `--access-logfile -` and `--error-logfile -` send all logs to Railway.
CMD exec gunicorn app:app \
    --bind 0.0.0.0:${PORT:-8080} \
    --workers 1 \
    --threads 2 \
    --timeout 120 \
    --graceful-timeout 30 \
    --access-logfile - \
    --error-logfile - \
    --log-level info
