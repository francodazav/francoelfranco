# Franco Daza — portfolio

Personal site. React 19 + Vite 8 + TypeScript, Tailwind CSS v4, deployed on Vercel.

**Live:** _(pending)_

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run lint
```

## How it's put together

- **Bilingual.** All copy lives in `src/content/en.ts` and `es.ts`, both satisfying
  one `Content` type in `types.ts` — adding a key to one fails the build until
  the other has it. The switch persists to `localStorage` and falls back to
  `navigator.language`; it also updates `<html lang>`, the title and the meta
  description, not just the visible text.
- **Theming.** 20 semantic tokens (`--ground`, `--ink`, `--accent`…) generated
  into three states: light on bare `:root`, a `prefers-color-scheme` block, and
  an explicit `[data-theme]`. A blocking script in `index.html` stamps the stored
  choice before first paint so the wrong palette never flashes. Every ink/surface
  pairing the design uses clears WCAG AA in both themes — the safe pairings are
  documented at the top of `src/index.css`.
- **Responsive** mobile-first, two real breakpoints: `md` for two-column content,
  `xl` for the split hero. Below that the hero stacks.
- **CV.** `cv/build-cv.mjs` renders one data object per language to HTML; headless
  Chrome prints each to a one-page A4 PDF in `public/cv/`, so both carry the
  site's own fonts. Regenerate with:

  ```bash
  node cv/build-cv.mjs && \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --headless --no-pdf-header-footer --print-to-pdf=public/cv/Franco-Daza-CV-EN.pdf \
    "file://$PWD/cv/cv-en.html"
  ```

## Licence

Code is free to read and learn from. The content — copy, CV, photograph — is mine.
