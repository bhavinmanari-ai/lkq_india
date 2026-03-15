# LKQ India GCC — Website Source Code

## File Structure
```
lkq-india-gcc-code/
├── index.html              ← Main HTML file (all 4 pages as SPA)
├── assets/
│   ├── style.css           ← All styles
│   ├── main.js             ← Page navigation + scroll reveal logic
│   ├── fonts/
│   │   ├── Campton-400.otf
│   │   ├── Campton-600.otf
│   │   ├── Campton-700.otf
│   │   └── SharpGrotesk-500.ttf
│   ├── images/
│   │   ├── logo.png                ← LKQ India white logo
│   │   ├── single-noodle.svg       ← Brand accent (used on page heroes)
│   │   └── double-noodle.svg       ← Brand accent (used on home hero)
│   └── video/
│       └── hero.mp4                ← ⚠️  Copy this manually from source
```

## ⚠️  Video Setup
The hero background video (`hero.mp4`) is too large to include here.
Place your video file at: `assets/video/hero.mp4`

## Design Tokens
| Token       | Value     |
|-------------|-----------|
| Primary Blue | `#1A44F5` |
| Dark Navy    | `#040E32` |
| Accent Yellow| `#C8F000` |
| Heading Font | SharpGrotesk Medium |
| Body Font    | Campton Regular/SemiBold |

## Pages
- **Home** — Hero video, stats bar, company overview, services, culture
- **Gallery** — Filterable photo grid (All / Culture / Workspace / CSR / Milestones)
- **Careers** — Hero, perks, open positions
- **Our Culture** — Hero, values, life section, recognitions, CTA strip

## How to run locally
```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: Node
npx serve .
```
Then open http://localhost:8080
