# DTAC Label

NHS-styled "food label" for Digital Technology Assessment Criteria (DTAC) submissions.

## Local dev

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

```bash
npm run deploy
```

Or via Claude Code:

```bash
npm install && npm run build
npx wrangler pages deploy dist --project-name=dtac-label
```
