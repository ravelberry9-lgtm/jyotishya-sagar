# Deterministic Python build — bypasses Nixpacks autodetection ambiguity
# (the leftover package.json was confusing Nixpacks into Node-mode).
FROM python:3.11-slim

WORKDIR /app

# Install Python deps first (better Docker-layer caching)
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . /app/

# Railway provides $PORT at runtime
ENV PORT=8080
EXPOSE 8080

# Use shell form so $PORT expands at runtime
CMD gunicorn app:app --bind 0.0.0.0:$PORT --workers 1 --timeout 120
