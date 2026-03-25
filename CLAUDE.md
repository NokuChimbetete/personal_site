# CLAUDE.md — Instructions for Claude Code

This is the portfolio site for **Noku Chimbetete** — developer, writer, and artist.
Site URL: `https://nokuchimbetete.vercel.app`
Stack: Astro 4, vanilla CSS, deployed on Vercel (free hobby plan).

Read this file fully before making any changes.

---

## 1. Stack & architecture

- **Framework**: Astro 4 (static site, no JS framework)
- **Styling**: Single global CSS file at `src/styles/global.css` — all design tokens are CSS variables at the top. Do NOT add Tailwind, CSS modules, or inline style objects unless asked.
- **Fonts**: Arvo (slab serif, body + headings) + DM Serif Display (display headings) — both via Google Fonts, already imported in global.css
- **Hosting**: Vercel, free hobby plan. `vercel.json` is already configured.
- **No framework components** — this is Astro-only. Do not introduce React, Vue, or Svelte unless explicitly asked.

---

## 2. Design system

All design decisions must respect these tokens (defined in `src/styles/global.css`):

```
--bg:        #0e0e0e   ← page background
--bg2:       #161616   ← card backgrounds
--surface:   #242424   ← elevated surfaces
--border:    #2e2e2e   ← all borders
--text:      #f0ece4   ← primary text
--muted:     #7a7672   ← secondary text, captions
--accent:    #d4a853   ← warm gold, used for highlights, hover states, active elements
--font:      'Arvo'    ← body and headings
--font-display: 'DM Serif Display' ← large display headings only
```

**Visual rules:**
- Dark mode is the ONLY mode. Do not add a light mode toggle unless asked.
- Accent colour (#d4a853) is used sparingly — borders on hover, eyebrow labels, active underlines, card CTAs.
- Border radius: 2px for buttons/tags, 10px for cards, 50% for the portrait circle.
- All section headings use `font-family: var(--font-display)`, weight 400, italic for emphasis.
- Grain texture overlay is applied via `body::before` — do not remove it.
- Animations use `cubic-bezier(0.16, 1, 0.3, 1)` — stored in `--ease`. Use this for all transitions.

---

## 3. Content to fill in

These are the placeholders Noku needs to replace with real content.
**Do not invent content** — flag these as TODOs and ask Noku directly.

### `src/pages/index.astro`
- [ ] `hero-desc` paragraph — personal bio, 2–3 sentences
- [ ] `about-grid` second column paragraphs — expanded bio
- [ ] `featuredProjects` array — add real project objects with title, category, tech, description, thumbnail path, URL
- [ ] Typewriter phrases (`typedPhrases`) — Noku may want to customise the cycle
- [ ] Hero links — update GitHub href to real handle

### `src/layouts/Base.astro`
- [ ] Footer social links — replace `YOUR_HANDLE` in GitHub, LinkedIn, Twitter hrefs

### `src/pages/work/index.astro`
- [ ] `projects` array — full list of all projects

### `src/pages/blog/first-post.md`
- [ ] Replace with real first post

---

## 4. Media assets (must be added by Noku)

Place these files in the `public/` directory before building:

| File | Purpose |
|------|---------|
| `public/images/portrait.jpg` | Portrait photo shown on homepage hero |
| `public/videos/portrait-video.mp4` | Short video that plays on hover over the portrait (keep under 5MB, ideally 10–15s) |
| `public/images/project-1.jpg` | Thumbnail for first project card front |
| `public/images/project-2.jpg` | Thumbnail for second project card front |
| `public/images/project-3.jpg` | Thumbnail for third project card front |

**Thumbnail guidance:** Project thumbnails work best as square or slightly portrait-oriented images (1:1.2 ratio). They'll be cropped to fill a 320×400px card. High contrast images with a strong focal point work best.

---

## 5. Key interactive features (already built)

### Typewriter effect (`src/pages/index.astro`)
- Cycles through `typedPhrases` array with a blinking cursor
- Phrases complete the sentence: "I'm Noku, and I ___"
- Edit the array to change what cycles
- Speeds controlled by `TYPE_SPEED`, `DELETE_SPEED`, `PAUSE_AFTER`, `PAUSE_BEFORE` constants

### Portrait video hover
- `public/images/portrait.jpg` shows by default
- `public/videos/portrait-video.mp4` crossfades in on hover, plays, pauses/resets on leave
- Video is muted and loops — keep it short and atmospheric
- The gold ring border is purely CSS (`.hero-portrait-ring`)

### Flip cards (projects)
- CSS `perspective` + `rotateY(180deg)` transform on hover
- Front: thumbnail image + project name overlay
- Back: category, title, tech stack, description, "View project" CTA link
- Tap-to-flip also works on mobile (the `.flipped` class toggles on touch)
- To add cards: add objects to the `featuredProjects` array in `index.astro` or `projects` in `work/index.astro`

---

## 6. Adding content — workflows

### Add a new blog post
1. Duplicate `src/pages/blog/first-post.md`
2. Rename it (the filename becomes the URL slug)
3. Update the frontmatter:
   ```md
   ---
   layout: ../../layouts/BlogPost.astro
   title: "Your actual title"
   date: 2025-03-15
   category: Essay
   readTime: 5 min read
   description: One sentence for SEO.
   published: true
   ---
   ```
4. Write the post in Markdown below the frontmatter
5. It appears automatically on `/blog` — sorted by date, newest first

### Add a new project card
Open `src/pages/index.astro` (for homepage) or `src/pages/work/index.astro` (for full list).
Add an object to the array:
```js
{
  title: 'My New Project',
  category: 'Web Development',
  tech: 'Next.js, Supabase',
  description: 'What it does and why it matters. 2–3 sentences.',
  thumbnail: '/images/my-new-project.jpg',  // place image in /public/images/
  url: 'https://github.com/YOUR_HANDLE/repo',
  year: '2025',
}
```

---

## 7. GitHub setup

This project should live in a GitHub repo. Here's how to initialise it:

```bash
# Inside the project folder:
git init
git add .
git commit -m "Initial commit — Noku Chimbetete portfolio"

# Create a repo on github.com named "nokuchimbetete" (or similar), then:
git remote add origin https://github.com/YOUR_HANDLE/nokuchimbetete.git
git branch -M main
git push -u origin main
```

Then connect the repo to Vercel:
1. Go to vercel.com → Add New Project
2. Import from GitHub → select the repo
3. Vercel auto-detects Astro — just click Deploy
4. Every future `git push` to `main` triggers an automatic redeploy

---

## 8. Running locally

```bash
npm install      # first time only
npm run dev      # starts dev server at http://localhost:4321
npm run build    # production build
npm run preview  # preview the production build locally
```

---

## 9. Things NOT to do

- Do NOT change the font stack away from Arvo/DM Serif Display without being asked
- Do NOT add a CSS framework (no Tailwind, no Bootstrap)
- Do NOT change the colour palette without being asked — especially do not replace `--accent: #d4a853`
- Do NOT add a React/Vue/Svelte component unless Noku explicitly asks for it
- Do NOT generate placeholder bio or project content — always ask Noku for the real words
- Do NOT remove the grain texture overlay on `body::before`
- Do NOT add a light mode unless asked
