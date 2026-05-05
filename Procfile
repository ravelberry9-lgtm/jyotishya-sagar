web: /bin/sh -c "exec gunicorn app:app --bind 0.0.0.0:${PORT:-8080} --workers 1 --threads 2 --timeout 120 --graceful-timeout 30 --access-logfile - --error-logfile - --log-level info"
