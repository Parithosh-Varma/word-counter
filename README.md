# Word Counter

Count words, characters, sentences and paragraphs, with a reading-time estimate — all instantly, in your browser.

[![Angular 20](https://img.shields.io/badge/Angular%2020-DD0031?style=flat-square&logo=angular&logoColor=white&labelColor=111)](https://angular.dev/) [![Modern Minimal design](https://img.shields.io/badge/Design%20Modern%20Minimal-6366f1?style=flat-square&labelColor=111)](https://github.com/parithosh-varma/word-counter) [![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white&labelColor=111)](https://www.netlify.com/) [![MIT](https://img.shields.io/badge/License%20MIT-3b82f6?style=flat-square&labelColor=111)](LICENSE)

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/277201506?v=4&size=64" width="80" style="border-radius: 50%;" alt="Word Counter logo" />
</p>

🌐 **Live:** https://word-counter-3.netlify.app
📂 **Source:** https://github.com/parithosh-varma/word-counter

> This is the live demo of the tool: https://word-counter-3.netlify.app

## Core Features

- **Live counting** — words, characters, sentences and paragraphs update as you type
- **Exclude spaces** — toggle character count with and without whitespace
- **Reading time** — estimated at ~200 words per minute
- **Large output cards** — scannable stats for quick reference
- **Clear button** — reset in one click
- **Light/dark mode** — theme toggle with persistence

## Tech Stack

- **Frontend:** Angular 20 (standalone components)
- **Styling:** Custom CSS with Modern Minimal design tokens
- **Hosting:** Netlify (SPA with `_redirects` fallback)
- **Monetization:** Google AdSense

## Getting Started

Prerequisites: Node.js 20+, npm.

```bash
git clone https://github.com/parithosh-varma/word-counter.git
cd word-counter
npm install
npm start          # dev server on http://localhost:4200
npm run build      # production build -> dist/word-counter/browser
```

## Project Architecture

```
src/
├── app/
│   ├── ad-slot.ts         # Reusable AdSense slot component
│   ├── ads-config.ts      # AD_CLIENT_ID wiring
│   ├── app.ts             # Shell: header, theme toggle, GitHub nav, footer
│   ├── app.html / app.css # Shell template + Modern Minimal styles
│   └── pages/
│       └── home.*         # The counter UI
├── environments/          # adClient per environment
├── index.html             # AdSense + Google CMP consent scripts
└── main.ts
public/
├── ads.txt                # AdSense verification file
├── _redirects             # SPA fallback for Netlify
└── logo.png
```

## Contributing

Open an [issue](https://github.com/parithosh-varma/word-counter/issues) for bugs or feature requests, or submit a pull request.

## License

[MIT](LICENSE)