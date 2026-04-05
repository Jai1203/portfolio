# Jai Chadha — Personal Portfolio

A futuristic, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Deployed on Vercel.

🌐 **Live Site:** [https://jaichadhaportfolio.vercel.app/]

---

## Preview

> Splash screen → Hero → Experience → Projects → Gallery → Achievements → Skills → Education → Publications → Certifications → Contact

---

## Features

- **Animated splash screen** with JC monogram and loading bar
- **Particle canvas background** — soft gradient mesh with drifting particles and connecting lines
- **Scroll progress bar** at the top of the page
- **Scroll-spy navigation** dots on the right (desktop)
- **Dark / Light theme toggle**
- **Accordion experience cards** with metric highlight chips
- **3D tilt effect** on project cards
- **3D photo carousel** — 5 photos rotating every 35 seconds
- **Animated achievement cards** with gold variant for honours
- **PDF resume download** linked directly to CV
- **Mobile responsive** — burger menu + bottom navigation bar
- **Smooth reveal animations** on scroll with staggered timing
- **Auto-updating footer year** via JavaScript

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, glassmorphism, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Background | Canvas API |
| Fonts | Google Fonts — Syne + DM Sans |
| Hosting | Vercel |

No frameworks. No dependencies. No build step.

---

## Project Structure

```
portfolio/
├── index.html               # Main HTML — all sections and content
├── style.css                # All styles — themes, components, animations
├── script.js                # All JavaScript — interactions, carousel, canvas
├── Jai_Chadha_CV_April_2026.pdf  # Resume PDF (linked from download button)
├── photo1.jpg               # Gallery photo 1
├── photo2.jpg               # Gallery photo 2
├── photo3.jpg               # Gallery photo 3
├── photo4.jpg               # Gallery photo 4
├── photo5.jpg               # Gallery photo 5
└── README.md
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, role, summary, CTAs, key stats |
| **Experience** | IBM SkillsBuild AI Internship with accordion + metric chips |
| **Projects** | AI Chatbot, GameXP, PicturesQue, Car Parking System |
| **Gallery** | 3D rotating photo carousel |
| **Achievements** | CGPA, projects, marks, Dean's List ×2, Excellence Award ×2 |
| **Skills** | Languages, frameworks, domains, activities |
| **Education** | B.Tech MUJ, Class 12th DPS, Class 10th Father Agnel |
| **Publications** | 2 research papers (IJERT, IJRPR — 2025) |
| **Certifications** | 5 certifications from Tata, Google, Coursera |
| **Contact** | Email, LinkedIn, GitHub links |

---

## Running Locally

No installation or build step needed. Just open the file:

```bash
# Clone the repo
git clone https://github.com/Jai1203/portfolio.git

# Open in browser
cd portfolio
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Or use VS Code's **Live Server** extension for hot reload during development.

---

## Deployment

This site is deployed on **Vercel** with automatic deployments on every push to `main`.

To deploy your own copy:

1. Fork this repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Framework Preset: **Other**
4. Build Command: *(leave empty)*
5. Output Directory: *(leave empty)*
6. Click **Deploy**

---

## Updates & Maintenance

To update the portfolio after making changes:

```bash
git add .
git commit -m "describe your change"
git push
```

Vercel automatically redeploys within ~30 seconds.

**Note:** The footer year updates automatically via JavaScript — no manual changes needed each year.

---

## Author

**Jai Chadha**
B.Tech CSE (IoT & Intelligent Systems) — Manipal University Jaipur
CGPA: 8.95

- 📧 jaichadha04@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/jai-chadha-870407273/)
- 🐙 [GitHub](https://github.com/Jai1203)

---

## License

This project is open source. Feel free to use it as inspiration for your own portfolio — just don't copy the content (name, projects, achievements, photos).
