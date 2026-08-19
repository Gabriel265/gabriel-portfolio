# 👾 Gabriel Kadiwa — Developer Portfolio

My personal developer portfolio — a retro 8-bit/16-bit game-themed site built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Showcases my skills, projects, experience, and certifications as a "Player 1" world map you scroll through, complete with a HUD nav bar, day/night mode, and sound cues.

## 🚀 Live Site

🔗 [gabrielkadiwa.vercel.app](https://gabrielkadiwa.vercel.app)

---

## 🔧 Built With

- ▲ Next.js (App Router)
- 🟦 TypeScript
- 🎨 Tailwind CSS + hand-rolled "pixel chrome" (CSS-only pixel borders/notched corners, no bitmap art required)
- 🎬 Framer Motion for animation
- 🕹️ Retro pixel display font (Press Start 2P) for HUD/headings, Inter for readable body text
- 📦 GitHub API integration (server-rendered, ISR-cached) for the project showcase
- ✉️ EmailJS for the contact form

## 📚 Sections

Single continuous scrolling page, navigated via a sticky "HUD" bar that reframes each section as a level:

- **Hero** ("START") — character-select style profile card
- **About** ("Player 1") — typewriter-effect bio with sound, RPG dialogue-box styling
- **Skills** ("Skill Tree") — grouped skill cards with sequential reveal + sound
- **Projects** ("Level Select") — live project previews (iframe) + GitHub repos, both with language filters
- **Experience** ("World Map") — vertical timeline with a "mission brief" modal per role
- **Certifications** ("Trophy Room") — certificate cards with Google Drive previews
- **Pricing** ("Shop") — service packages with a live currency converter
- **Contact** ("Save Point") — EmailJS-powered contact form

---

## 📦 Getting Started

### 1. Clone the repo

```
git clone https://github.com/Gabriel265/gabriel-portfolio.git
cd gabriel-portfolio
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your own EmailJS/GitHub values:

```
cp .env.example .env.local
```

### 4. Run the dev server

```
npm run dev
```

## 🧪 Folder Structure

```
app/                  # Next.js App Router: layout, page, metadata, robots/sitemap
components/
  layout/             # HUD nav, pause menu, title screen, footer
  sections/           # Hero, About, Skills, Projects, Experience, Certifications, Pricing, Contact
  providers/          # Theme (day/night) and sound (mute) context
  ui/                 # Shared pixel-chrome primitives (PixelPanel, PixelButton, PixelBadge, Toast)
lib/
  data/               # Typed content (skills, experience, certifications, pricing, projects, nav)
  github.ts           # Server-side GitHub repo fetch (ISR)
  hooks/              # useActiveSection (HUD scrollspy)
public/               # icons, sounds, images
```

## 📧 Contact

Feel free to reach out through the contact form or:

📧 Email: gabrielkadiwa@gmail.com

🔗 LinkedIn - https://www.linkedin.com/in/gabriel-kadiwa-b2832b1b7/

## 📄 License

This project is open-source and available under the MIT License.
