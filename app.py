"""
జ్యోతిష్య సాగర్ — Telugu Vedic Astrology App
Local:   python app.py  →  http://localhost:5000
Railway: gunicorn binds to 0.0.0.0:$PORT (see Procfile)
"""

from flask import Flask, send_from_directory, abort
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=None)
app.secret_key = os.environ.get('SECRET_KEY', 'jyotishya_sagar_secret_2026')


@app.route('/')
def index():
    return send_from_directory(ROOT, 'index.html')


@app.route('/<path:filename>')
def serve_file(filename):
    """
    Serve any file from the project root or subdirectories.
    Block directory traversal via abspath check.
    """
    # Resolve against ROOT and confirm it stays inside ROOT
    safe_path = os.path.normpath(os.path.join(ROOT, filename))
    if not safe_path.startswith(ROOT):
        abort(403)
    if not os.path.isfile(safe_path):
        abort(404)
    rel_dir = os.path.dirname(filename) or '.'
    rel_name = os.path.basename(filename)
    return send_from_directory(os.path.join(ROOT, rel_dir), rel_name)


@app.route('/healthz')
def healthz():
    return {'status': 'ok'}, 200


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
