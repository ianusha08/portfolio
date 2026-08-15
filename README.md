# Anusha Singh — Portfolio

> **AI/ML Engineer & Builder** · Models • Systems • Code • Coffee • Curiosity

Personal portfolio and engineering journal built with React + Vite. Features a dual dark/light theme, editorial design language, and a fully functional contact form.

🔗 **Live:** [ianusha08.github.io/portfolio](https://ianusha08.github.io/portfolio) *(deploy to activate)*

---

## ✨ Features

- **Dark / Light Theme** — full dual-theme system with `localStorage` persistence and zero flash on load
- **Achievements Section** — ICPC Algo Queen 2023, 14th Rank Nationwide
- **Live Contact Form** — validates, submits, and delivers directly to email via FormSubmit
- **Project Case Studies** — modal deep-dives for each project with problem → solution → impact
- **Editorial Moon Quote** — *"She was like the moon — part of her was always hidden away"*
- **Command Palette** — `Cmd + K` quick navigation and theme switching
- **Responsive** — mobile-first layout with adaptive sidebar index nav
- **Circular Butterfly Favicon** — personal calligraphy artwork as favicon

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + custom CSS variables |
| Theme | Dual dark/light via CSS semantic tokens |
| Contact Form | FormSubmit.co (no backend needed) |
| Icons | Lucide React |
| Fonts | JetBrains Mono + Plus Jakarta Sans |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed nav + theme toggle
│   ├── Hero.jsx            # Landing section
│   ├── About.jsx           # About + philosophy
│   ├── Experience.jsx      # Timeline
│   ├── FeaturedWork.jsx    # Projects grid
│   ├── ProjectModal.jsx    # Case study modal
│   ├── Achievements.jsx    # ICPC & competitive programming
│   ├── OpenSource.jsx      # OSS contributions
│   ├── Toolbox.jsx         # Skills grid
│   ├── Contact.jsx         # Live contact form
│   ├── MoonVisual.jsx      # Closing editorial quote
│   ├── Footer.jsx
│   ├── IndexNav.jsx        # Sidebar scroll navigation
│   ├── CommandPalette.jsx  # Cmd+K palette
│   └── ResumeModal.jsx     # Printable resume
├── context/
│   └── ThemeContext.jsx    # Theme provider + localStorage
├── data/
│   └── portfolioData.js    # All content in one place
└── services/
    └── contactService.js   # Form validation + email dispatch
```

---

## 🚀 Running Locally

```bash
# Clone
git clone https://github.com/ianusha08/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Environment Variables

Create a `.env` file (see `.env.example`):

```env
# Optional: override recipient email for contact form
VITE_RECIPIENT_EMAIL=your@email.com

# Optional: use Web3Forms instead of FormSubmit
VITE_WEB3FORMS_KEY=your_web3forms_key
```

> The contact form works out of the box via [FormSubmit.co](https://formsubmit.co) — no API key needed. First submission will trigger an activation email.

---

## 📬 Contact

- **Email:** [ianushaa09@gmail.com](mailto:ianushaa09@gmail.com)
- **GitHub:** [@ianusha08](https://github.com/ianusha08)
- **LinkedIn:** [anushasingh18](https://www.linkedin.com/in/anushasingh18/)
- **X / Twitter:** [@imanusha09](https://x.com/imanusha09)

---

<p align="center">Built with ☕ and curiosity · Anusha Singh © 2026</p>
