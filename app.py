"""
జ్యోతిష్య సాగర్ — Telugu Vedic Astrology App
Local:   python app.py  →  http://localhost:5000
Railway: gunicorn binds to 0.0.0.0:$PORT (see Dockerfile)
"""

from flask import Flask, send_from_directory, abort, Response
import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=None)
app.secret_key = os.environ.get('SECRET_KEY', 'jyotishya_sagar_secret_2026')


# --- Healthcheck: defined FIRST so route precedence is unambiguous ---
@app.route('/healthz')
@app.route('/healthz/')
@app.route('/health')
def healthz():
    """Plain-text 200 OK, with no dependencies. Always reachable."""
    return Response('ok\n', mimetype='text/plain', status=200)


@app.route('/')
def index():
    return send_from_directory(ROOT, 'index.html')


@app.route('/<path:filename>')
def serve_file(filename):
    """
    Serve any file from the project root or subdirectories.
    Block directory traversal via abspath check.
    """
    safe_path = os.path.normpath(os.path.join(ROOT, filename))
    if not safe_path.startswith(ROOT):
        abort(403)
    if not os.path.isfile(safe_path):
        abort(404)
    rel_dir = os.path.dirname(filename) or '.'
    rel_name = os.path.basename(filename)
    return send_from_directory(os.path.join(ROOT, rel_dir), rel_name)


# --- Boot-time diagnostic (visible in Railway logs) ---
print(
    f'[jyotishya-sagar] app loaded · ROOT={ROOT} · '
    f'PORT={os.environ.get("PORT", "(unset, default 5000/8080)")}',
    file=sys.stderr,
    flush=True,
)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
