# Sumit Singh — Portfolio

React + Vite + Tailwind + GSAP + Lenis.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Apna content kahan badlein
- `src/data.js` — naam, email, GitHub/LinkedIn links, about text, aur **projects** (placeholders hain, real projects daalo).
- `public/resume.pdf` — apna resume yahan rakho.
- `src/components/Car.jsx` — F1 car SVG. Apna car image/video lagana ho to is component ko replace karo.
- `src/components/Intro.jsx` — intro animation (car speed: `duration: 4.4`, smoke: `spawn()` aur `draw()`).
- `src/index.css` — colors (`--color-paper`, `--color-racing`) aur fonts.

## Deploy
GitHub par push karo, phir Vercel mein "Import Project". Build command `npm run build`, output `dist`.
