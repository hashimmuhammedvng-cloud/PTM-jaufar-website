# PTM Jaufar Swadiq — Official Website (Static HTML5 / CSS3 / Vanilla JS)

This repository contains the production-ready static website for **PTM Jaufar Swadiq**, Human Excellence Strategist. It is built strictly using **HTML5, CSS3, and vanilla JavaScript**, completely free of Node.js, React, or server-side build steps.

It is designed for immediate, zero-configuration deployment to **Hostinger Premium Web Hosting** directly inside `public_html`.

---

## 1. Project Directory Structure

```text
PTM-jaufar-website/
├── index.html                  # Homepage (Hero, About preview, What I Do, Expertise, Who I Help, Contact)
├── about/
│   └── index.html              # About Page (Profile, Foundation Pillars, Impact Numbers)
├── about.html                  # Direct file fallback for About page
├── courses/
│   └── index.html              # Courses & Learning Academy Redirect / Landing Page
├── courses.html                # Direct file fallback for Courses page
├── privacy/
│   └── index.html              # Privacy Policy & Transparency Document
├── privacy.html                # Direct file fallback for Privacy page
├── 404.html                    # Custom Branded 404 Error Page
├── assets/
│   ├── css/
│   │   └── style.css           # Compiled Tailwind & Custom Keyframe Animations (56 KB)
│   ├── js/
│   │   └── main.js             # Vanilla JavaScript Interactive Engine (Zero dependencies)
│   └── images/                 # All 26 optimized image assets & cutouts
│       ├── logo.jpg
│       ├── hero-portrait.jpg
│       ├── jaufar-stage-hero.png
│       ├── jaufar-front-pose-clean.png
│       ├── jaufar-arms-crossed.png
│       ├── auditorium-packed.png
│       ├── who-leaders.png
│       ├── who-students.png
│       ├── who-educators.png
│       ├── who-teams.png
│       ├── who-individuals.png
│       └── ...
├── robots.txt                  # Search engine crawler instructions
├── sitemap.xml                 # XML Sitemap for search indexing
├── .htaccess                   # Apache / LiteSpeed configuration (HTTPS, clean URLs, caching, gzip)
└── README.md                   # Project documentation & deployment guide
```

---

## 2. Interactive Features (Vanilla JavaScript Engine)

All interactive functionality is powered by `assets/js/main.js` with **zero external libraries or runtime requirements**:

1. **Sticky Navigation Header**:
   - Dynamic backdrop blur and height transition on scroll (`> 20px`).
2. **Mobile Drawer Menu**:
   - Smooth slide-out mobile navigation with backdrop blur and body scroll lock.
   - Automatically closes when any navigation link is tapped.
3. **What You Do — 3 Pillars Interactive Slider**:
   - 3 interactive slides (Developing People, Strengthening Leaders, Creating Impact).
   - Tab switching, previous/next buttons, and slide counter (`01 / 03`).
   - 5.5-second auto-advance timer with hover pause.
4. **Who You Help — 3D Coverflow Carousel**:
   - Mathematical 3D perspective transforms with scale, depth, and opacity layers.
   - Click-to-activate cards, arrow buttons, touch swipe on mobile, and dot navigation.
   - 5.5-second auto-rotation with hover pause.
5. **Animated Impact Number Counters**:
   - `IntersectionObserver` triggers smooth cubic-eased count-up animation when scrolling into view:
     - `25,000+` Individuals Reached
     - `650+` Sessions Facilitated
     - `200+` Keynotes & Events
     - `85+` Programs Delivered
6. **Executive Inquiry Form**:
   - Client-side validation for required fields and corporate email formats.
   - Generates unique reference code (`REQ-XXXXXX`).
   - Saves submission to browser `localStorage` for inquiry history.
   - Displays animated confirmation state.
7. **Courses Academy Redirect**:
   - Interactive 2-second countdown timer that seamlessly transitions visitors to `https://learn.hujixglobal.com`.

---

## 3. Hostinger Deployment Guide

This website is pre-configured for **Hostinger Premium Web Hosting** using GitHub Git integration:

### Step 1: Open Hostinger hPanel
1. Log in to your [Hostinger hPanel](https://hpanel.hostinger.com).
2. Go to **Websites** → Select your domain (`ptmjaufarswadiq.com`).
3. Under the **Advanced** section in the left sidebar, click **Git**.

### Step 2: Connect GitHub Repository
1. In the **Repository** field, enter:
   ```text
   https://github.com/hashimmuhammedvng-cloud/PTM-jaufar-website.git
   ```
2. In the **Branch** field, select:
   ```text
   main
   ```
3. In the **Install In Directory** field, leave empty or set to:
   ```text
   public_html
   ```
4. Click **Create** / **Deploy**.

Hostinger will pull the static files directly into `public_html`. The website goes live immediately with zero build commands needed!

### Step 3: Future Updates (Automatic or 1-Click Deployment)
- Whenever you push updates to `main`, click **Deploy** in Hostinger Git to update the live website in seconds.
- You can also enable Hostinger's **Auto-Deployment Webhook** by adding the webhook URL to your GitHub repository settings under **Settings** → **Webhooks**.

---

## 4. Editing the Website Locally in VS Code

You can open this project in VS Code with zero setup:
1. Double-click `index.html` to open it in any web browser.
2. Alternatively, install the **Live Server** extension in VS Code and click **"Go Live"** in the status bar to test changes in real time.
3. To update text content:
   - Edit the relevant HTML file (`index.html`, `about/index.html`, etc.).
4. To update images:
   - Replace or add images in `assets/images/` and reference them using relative paths.

---

## 5. Next.js Source Code Archive

The original Next.js / TypeScript source code has been permanently archived in the dedicated GitHub branch:
```text
nextjs-source
```
If you ever want to review or restore the React/Next.js source in the future:
```bash
git checkout nextjs-source
```

