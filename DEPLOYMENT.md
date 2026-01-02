# Deployment (GitHub Pages)

This site deploys via GitHub Actions to GitHub Pages on every push to `main` using `.github/workflows/deploy.yml`.

## One-time GitHub setup

1. Push this repo to GitHub.
2. In GitHub: **Repo → Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

## Deployed URL

GitHub Pages URL format:

`https://<github-username>.github.io/<repo-name>/`

After the first push, watch **Actions → “Deploy to GitHub Pages”** until it completes, then open the URL above.

