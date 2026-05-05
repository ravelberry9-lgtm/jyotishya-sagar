# Deterministic Python build — bypasses Nixpacks autodetection ambiguity.
FROM python:3.11-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PIP_NO_CACHE_DIR=1
ENV PIP_DISABLE_PIP_VERSION_CHECK=1

# Install Python deps first (better Docker-layer caching)
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . /app/

# Default port; Railway overrides at runtime via $PORT.
ENV PORT=8080
EXPOSE 8080

# Explicit /bin/sh -c form so $PORT actually expands at container start.
# (Multi-line backslash + bare `CMD` was being misinterpreted, leaving gunicorn
# with the literal string '$PORT' as the bind value.)
CMD ["/bin/sh", "-c", "exec gunicorn app:app --bind 0.0.0.0:${PORT:-8080} --workers 1 --threads 2 --timeout 120 --graceful-timeout 30 --access-logfile - --error-logfile - --log-level info"]
