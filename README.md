# Daniel Chege — React Portfolio

A professional, multipage React portfolio with dark/light mode, smooth animations, and a clean architecture.

---

## Project Structure

```
daniel-portfolio/
├── index.html                        # Vite HTML entry point
├── package.json                      # Dependencies & scripts
├── vite.config.js                    # Vite configuration
└── src/
    ├── index.jsx                     # React root mount
    ├── App.jsx                       # Root shell — routing + layout
    │
    ├── data/
    │   └── portfolioData.js          # ★ ALL content lives here (projects, skills, etc.)
    │
    ├── context/
    │   └── ThemeContext.jsx          # Dark/light mode state + design tokens
    │
    ├── hooks/
    │   └── hooks.js                  # useInView, useTypewriter, useScrollY
    │
    ├── styles/
    │   └── global.css                # Reset, fonts, keyframes, scrollbar
    │
    ├── components/
    │   ├── Navbar.jsx                # Fixed nav with mobile menu & theme toggle
    │   ├── Footer.jsx                # Footer with social links
    │   └── SharedUI.jsx              # SectionHeader, SkillBar, Tag, Card, Button
    │
    └── pages/
        ├── Home.jsx                  # Hero, typewriter, stats, CTAs
        ├── About.jsx                 # Bio, traits, contact info
        ├── Education.jsx             # Timeline layout
        ├── Projects.jsx              # Filterable project grid
        ├── Skills.jsx                # Animated skill bars + tech cloud
        └── Contact.jsx               # EmailJS form + social links
```

---

## Getting Started

### 1. Install pnpm (if you haven't already)
```bash
npm install -g pnpm
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Start dev server
```bash
pnpm dev
```
Opens at `http://localhost:3000`

### 4. Build for production
```bash
pnpm build
```

---

## Adding a New Project

Open `src/data/portfolioData.js` and add an entry to the `PROJECTS` array:

```js
{
  id: 8,                          // next sequential id
  name: "My New Project",
  icon: YourIconComponent,
  tag: "Full-Stack",              // used for filter tab
  category: "Full-Stack / React", // displayed on card
  description: "What it does...",
  demo: "https://your-demo-url.com",
  github: "https://github.com/danchege/repo",
  stack: ["React", "Node.js", "MongoDB"],
  featured: false,                // true = shows "★ Featured" badge
},
```

That's it — the Projects page picks it up automatically.

---

## Customising the Theme

Design tokens are centralised in `src/context/ThemeContext.jsx` inside the `tokens()` function. Change accent colours, backgrounds, shadows, etc. in one place and they apply everywhere.

---

## EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Update these three values in `src/data/portfolioData.js`:
```js
emailjsServiceId:  "your_service_id",
emailjsTemplateId: "your_template_id",
emailjsPublicKey:  "your_public_key",
```

---

## Deployment

Works out of the box on **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
# Vercel (recommended)
pnpm dlx vercel

# Netlify
pnpm dlx netlify-cli deploy --prod --dir=dist
```

---

## Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Framework | React 18                      |
| Bundler   | Vite 5                        |
| Styling   | Inline styles + CSS variables |
| Fonts     | Syne + DM Sans (Google Fonts) |
| Email     | EmailJS                       |
| Icons     | react-icons                   |
| Hosting   | Vercel / Firebase             |
