# Programmik Website

Official website for Programmik (Next.js + static export for GitHub Pages).

## Live Website

- Production URL: https://ahmedalsaleh.github.io/programmik/

## Local Development

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000/programmik/

Note:

- This project uses `basePath: "/programmik"` in `next.config.ts`.
- Opening `http://localhost:3000/` directly may show 404 by design.

## Build

```bash
npm run build
```

Static output is generated in `out/` (`output: "export"`).

## Deployment (GitHub Pages)

Deployment is automatic through GitHub Actions on every push to `main`:

- Workflow: `.github/workflows/deploy-pages.yml`

If Pages ever shows README content again:

1. Go to **Settings > Pages** in the repo.
2. Ensure source/build is set to **GitHub Actions**.
3. Re-run the latest workflow from **Actions** tab.

## Main Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
