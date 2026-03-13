# ADRIAN Master Trainer

A portable, AI-powered adaptive learning app. Build a prompt, paste it into any LLM, track what you learn.

**[Live App →](https://kamaflage.github.io/master_trainer/)**

---

## What It Is

ADRIAN Master Trainer is a single-file progressive web app that turns any LLM into a personal tutor. You pick a lesson, the app generates a structured session prompt, you paste it into any AI (Claude, ChatGPT, Gemini, Perplexity — anything), and you log what you learned. No API keys. No subscriptions. No data leaves your device.

The app tracks your confidence, session history, streaks, and learning path across every lesson. Everything is stored locally in your browser.

---

## Features

- **Works with any LLM** — paste prompts into any AI, or use multiple AIs for the same lesson
- **Visual learning path** — every lesson shows its prerequisites and what it unlocks
- **Adaptive prompts** — session prompts are built from your profile, role, and Bloom taxonomy level
- **Multi-profile** — separate learning profiles for different domains or goals
- **Lesson packs** — import domain-specific lesson sets as `.json` files
- **Custom lessons** — add your own lessons with full control over prompts
- **PWA** — installable on Android and desktop, works offline
- **Zero dependencies** — one HTML file, no build step, no backend

---

## How to Use

1. Open the [live app](https://kamaflage.github.io/master_trainer/)
2. Create a profile — set your name, role, and learning context
3. Pick a lesson from the sidebar
4. Tap **Get Prompt** — the app generates a session prompt
5. Paste the prompt into any LLM
6. Complete the session, then log your confidence score and what the AI suggested as next steps
7. Repeat — the app tracks your progress and suggests what to study next

---

## Lesson Packs

The app ships with two built-in packs:

| Pack | Lessons | Description |
|------|---------|-------------|
| Transferable Core | 6 | How to learn, systems thinking, mental models |
| RPA Tech Lead | 12 | Automation Anywhere A360, bot architecture, process design |

### Importing a Pack

1. Download a `.json` pack file
2. In the app: **＋ Add → Import Pack** → select the file
3. Lessons are added to your active profile immediately

### Creating Your Own Pack

See the [Pack Creation Guide](https://kamaflage.github.io/master_trainer/pack-guide.html) — it includes a prompt you paste into any LLM with a description of what you want to learn, and it outputs a ready-to-import pack.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full app — single file, zero dependencies |
| `guide.html` | User guide — how to use every feature |
| `pack-guide.html` | How to create and import lesson packs |
| `manifest.json` | PWA manifest for installability |
| `sw.js` | Service worker for offline support |

---

## Installing as an App

**Android (Chrome or Brave):** Open the live URL → tap the install prompt or use the browser menu → **Add to Home Screen**

**Desktop (Chrome):** Open the live URL → click the install icon in the address bar

---

## Self-Hosting

The app is a single HTML file with no external dependencies. To host your own copy:

1. Clone or download this repo
2. Serve `index.html` from any static host (GitHub Pages, Netlify, Vercel, or just open it locally in a browser)

No build step. No configuration.

---

## Built With

- Vanilla HTML, CSS, and JavaScript
- No frameworks, no libraries, no build tools
- localStorage for all data persistence

---

## License

MIT — use it, fork it, build on it.

---

## Author

Built by [Chris R](https://github.com/kamaflage) as part of the ADRIAN framework for structured AI collaboration.
