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

# Strip any Windows CRLF line endings on the start script (Windows git
# tends to insert \r which breaks /bin/sh) and make it executable.
RUN sed -i 's/\r$//' /app/start.sh && chmod +x /app/start.sh

# Default port; Railway overrides at runtime via $PORT.
ENV PORT=8080
EXPOSE 8080

# Run via /bin/sh explicitly so the shebang line can't matter,
# and so this works even if start.sh somehow has CRLF bytes.
CMD ["/bin/sh", "/app/start.sh"]
