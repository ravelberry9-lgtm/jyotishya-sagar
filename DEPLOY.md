# Deployment Handoff — GitHub + Railway

This app is configured the same way as your `mcq-exam-app`: Flask + Procfile + gunicorn, deployed on Railway via GitHub.

The local `.git` folder couldn't be created from inside Cowork's sandbox (Windows host filesystem permission issue), so a few git commands have to run on your machine. Everything else is ready.

---

## Step 1 — Open a terminal in this folder

Open **PowerShell** or **Git Bash** and `cd` into the project:

```powershell
cd C:\Users\AashrithaNagababu\Desktop\Astrology
```

## Step 2 — Remove the half-created `.git` folder

A previous `git init` attempt left a corrupted `.git` directory. Delete it (use Windows Explorer if PowerShell complains about permissions):

```powershell
Remove-Item -Recurse -Force .git
```

If that errors, just delete the `.git` folder manually in File Explorer (it's hidden — enable "Show hidden files" in View).

## Step 3 — Initialize git and make the first commit

```powershell
git init -b main
git config user.email "ravelberry9@gmail.com"
git config user.name "Ravelberry"

# Optional: if you want to drop the deprecated Node leftovers entirely
git rm --cached package.json railway.json 2>$null

git add -A
git commit -m "Initial commit: Jyotishya Sagar (Telugu Vedic Astrology app)"
```

The `.gitignore` will keep out `__pycache__`, `.venv`, the WhatsApp manuscript reference photos in `bphs/`, and `*.db` files.

## Step 4 — Create the GitHub repo

I can't create accounts or repos on your behalf. You'll do this:

1. Go to **https://github.com/new**
2. Owner: **ravelberry9-lgtm** (same as `mcq-exam-app`)
3. Repository name: `jyotishya-sagar` (or whatever you prefer)
4. **Public** ✓
5. **Do NOT** initialise with README/.gitignore/license — we already have them
6. Click **Create repository**

GitHub will show you a "push an existing repository" command block. Copy the remote URL it gives you.

## Step 5 — Push to GitHub

```powershell
git remote add origin https://github.com/ravelberry9-lgtm/jyotishya-sagar.git
git push -u origin main
```

If GitHub asks for credentials, use a **Personal Access Token** (Settings → Developer settings → Personal access tokens → "repo" scope), the same way you set up `mcq-exam-app`.

## Step 6 — Deploy on Railway

1. Go to **https://railway.app/new**
2. **Deploy from GitHub repo** → authorize Railway to see the new repo if needed
3. Pick `jyotishya-sagar`
4. Railway reads the configs:
   - `nixpacks.toml` → forces Python 3.11
   - `requirements.txt` → installs flask + gunicorn
   - `Procfile` → runs `gunicorn app:app --bind 0.0.0.0:$PORT --workers 1 --timeout 120`
   - `railway.json` → sets healthcheck on `/healthz`
5. First build takes ~2 minutes. Railway assigns a `*.up.railway.app` URL automatically.
6. **Optional**: in Railway → **Settings → Networking → Generate Domain** to get a custom railway subdomain, or **Add Custom Domain** if you have one.

No environment variables are required. The app is fully client-side — `app.py` only serves the existing HTML files.

---

## What's deployed

```
app.py              ← Flask wrapper (45 lines)
Procfile            ← gunicorn web command
requirements.txt    ← flask, gunicorn
nixpacks.toml       ← forces Python provider
railway.json        ← Railway deploy + healthcheck config
.gitignore          ← Python + manuscript photos + sqlite
index.html          ← landing page (served at /)
app.html            ← main app (served at /app.html)
bphs/*.js           ← all 9 grantha data files
bphs/index.html     ← granthālaya viewer
*.md                ← README, vision docs, strategy
```

## Local test

If you want to test before pushing:

```powershell
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app.py
# open http://localhost:5000
```

## Health check

`GET /healthz` returns `{"status": "ok"}` — Railway uses this to confirm the container started.

---

## Troubleshooting — `pip: command not found` build failure

If the first Railway build fails with:

```
RUN pip install --upgrade pip
/bin/bash: line 1: pip: command not found
exit code: 127
```

It's because an earlier `nixpacks.toml` overrode Nixpacks' default Python setup phase. The fix is already in this repo — `nixpacks.toml` is now minimal:

```toml
providers = ["python"]
```

That single line forces the Python provider but lets Nixpacks' default phases install pip and run `pip install -r requirements.txt` automatically.

**To apply the fix on a previously-deployed repo:**

```powershell
git add nixpacks.toml
git commit -m "Fix nixpacks: let default Python provider handle install"
git push
```

Railway will auto-redeploy on the new commit.
