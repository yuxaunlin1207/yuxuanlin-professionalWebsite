# Restoring the old Projects page

On 2026-09-01, the Projects page (`projects.html`) was converted into a
**Media page** — a grid of embedded YouTube videos — at the user's request.
Everything the old page needed is captured here so it can be brought back
byte-for-byte if the user ever wants that instead of (or alongside) Media.

The old Projects page held **placeholder/template content only** (fictional
projects: field-radio.py, Echo Atlas, Room of Small Bells, phrase-mirror,
Latent Choir — see `project_website.md` project memory: "all content is
placeholder that Yuxuan will update with her real information"). Nothing
real was lost, but the restore steps below are exact regardless.

## What changed, file by file

| File | What happened |
|---|---|
| `projects.html` | Rewritten from a project-card grid + modal into a video grid. Old version saved as `projects.html.original-backup.html` (exact copy, made before any edits). |
| `styles.css` | Removed the `.overlay`, `.project-grid`/`.project-card`/`.project-tag`/`.project-meta`/`.project-arrow`, and `.modal`/`.modal-inner`/`.modal-close` (+ children) rules — full CSS text preserved below. Added new `.media-grid`/`.media-video` rules for the video grid. |
| `main.js` | Removed `initProjectModals()` and `formatReadme()` (the second was only ever called by the first) and the `initProjectModals();` line in the `DOMContentLoaded` listener — full JS text preserved below. |
| `i18n.js` | Changed `nav.projects`, `projects.title`, `projects.lead` values (EN + ZH) — old values preserved below. Key *names* were left as-is (`projects.*`, not renamed to `media.*`) to keep the diff small; this is a cosmetic mismatch only, doesn't affect anything. |

## How to fully restore the old page

1. **HTML**: `cp projects.html.original-backup.html projects.html` (overwrites the Media page).
2. **CSS**: open `styles.css`, find the `.media-grid` / `.media-video` rules that replaced the old section (search for `MEDIA GRID`), delete them, and paste the "CSS to restore" block below in their place.
3. **JS**: open `main.js`:
   - In the `document.addEventListener('DOMContentLoaded', ...)` block near the top, add back `initProjectModals();` (put it where `initPerformancesAutoArchive();` is called, anywhere in that list works).
   - Paste the "JS to restore" block below back in, in the same relative position (it sat between `initWorkDetail()`'s section and `initContactForm()`'s section).
4. **i18n**: open `i18n.js`, replace the current `nav.projects` / `projects.title` / `projects.lead` values (both EN and ZH blocks) with the "i18n to restore" values below.
5. Delete this file and `projects.html.original-backup.html` once you've confirmed the restore worked, if you don't want them lingering.

If instead you just want the *old cards back alongside* the video grid (not
instead of it), the easiest path is to keep the Media page as its own
section on this file and paste the old `<section class="wrap
projects-section">...</section>` block (from the backup HTML) plus the
modal `<div id="project-modal">`/`<div id="modal-overlay">` block back in
below it, then restore the CSS/JS/i18n pieces above too.

---

## i18n to restore

EN block:
```js
'nav.projects':     'Projects',
...
'projects.title':   'Projects',
'projects.lead':    'Long-form projects, software instruments, and ongoing experiments — somewhere between a composition and a piece of code. Click any tile to open a demo and read the documentation.',
```

ZH block:
```js
'nav.projects':     '项目',
...
'projects.title':   '项目',
'projects.lead':    '长期项目、软件乐器与持续进行中的实验——介于作品与代码之间。点击任意卡片查看演示与文档。',
```

---

## CSS to restore

```css
/* ── OVERLAY ── */
/* Dark semi-transparent backdrop behind modals.
   Initially invisible (opacity: 0, pointer-events: none so it can't
   be clicked), becomes visible when JavaScript adds .visible */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(8, 8, 8, 0.72);  /* 72% piano black overlay */
  z-index: 150;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}
.overlay.visible { opacity: 1; pointer-events: auto; }


/* ============================================================
   PROJECTS — card grid and detail modal
============================================================ */

/* Background portrait trace */
.projects-bg-portrait {
  position: fixed;
  right: -4vw;
  top: -22vh;
  height: 108vh;
  width: auto;
  opacity: 0.07;
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: multiply;
}

/* 12-column grid — cards can span 6 (half-width) or 12 (full-width) */

.project-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Default card: spans 6 of 12 columns (half-width) */
.project-card {
  grid-column: span 6;
  background: var(--paper-warm);
  border: 1px solid var(--ink);
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
  position: relative;
  overflow: hidden; /* Clip the arrow that peeks from the corner */
}
/* Every 3rd card spans full width — creates visual rhythm */
.project-card:nth-child(3n) { grid-column: span 12; }
.project-card:hover {
  transform: translateY(-4px); /* Lift on hover */
  background: var(--paper);
}
/* Arrow in the corner moves diagonally on hover */
.project-card:hover .project-arrow { transform: translate(4px, -4px); }

/* Category tag (e.g., "Code · Software Instrument") */
.project-tag {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
/* Crimson dot before music/installation project tags */
.project-tag::before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%; /* Circle */
}
/* Black dot for code project tags */
.project-card.code .project-tag::before { background: var(--ink); }

.project-card h3 {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.5rem, 2.5vw, 2.1rem);
  font-weight: 400;
}
.project-card p { color: var(--ink-soft); margin: 0; }

/* Tag pills for tech stack / metadata (Python, SDR, etc.) */
.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.project-meta span {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.55rem;
  border: 1px solid var(--rule);
  color: var(--ink-soft);
}

/* Diagonal arrow in the top-right corner of each card */
.project-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-family: var(--font-display);
  font-size: 1.6rem;
  transition: transform 0.3s;
}

/* All cards go full-width on small screens */
@media (max-width: 880px) {
  .project-card { grid-column: span 12 !important; }
  /* !important overrides the nth-child rule above */
}

/* ── PROJECT MODAL ── */
/* Full-screen overlay that appears when a project card is clicked */
.modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: none;       /* Hidden by default */
  padding: 2rem;
  overflow-y: auto;    /* The inner content can scroll */
}
.modal.open { display: block; } /* JavaScript adds .open to show it */

/* The white box centred inside the full-screen overlay */
.modal-inner {
  max-width: 920px;
  margin: 3rem auto;
  background: var(--paper);
  border: 1px solid var(--ink);
  padding: clamp(2rem, 5vw, 4rem);
  position: relative;
  box-shadow: 8px 8px 0 var(--accent); /* Crimson offset shadow */
}

/* "Close ×" button in the top-right corner */
.modal-close {
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.modal-close:hover { color: var(--accent); }

/* Modal heading and tag */
.modal h2 {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin: 0 0 0.5rem;
  letter-spacing: -0.015em;
}
.modal .modal-tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 1.5rem;
}

/* Demo embed area: 16:9 box with a diagonal hatch pattern background */
.modal .demo {
  margin: 2rem 0;
  border: 1px solid var(--ink);
  aspect-ratio: 16/9;
  background: var(--paper-warm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
  /* repeating-linear-gradient creates a diagonal stripe pattern */
  background-image:
    repeating-linear-gradient(45deg, transparent 0, transparent 8px, var(--rule) 8px, var(--rule) 9px);
}
/* Stretch embedded media to fill the box */
.modal .demo iframe,
.modal .demo audio,
.modal .demo video { width: 100%; height: 100%; }

/* README block: dark terminal-style text panel */
.modal .readme {
  background: var(--ink);
  color: var(--paper);
  padding: 2rem;
  margin-top: 2rem;
  font-family: var(--font-mono);
  font-size: 0.88rem;
  line-height: 1.7;
  white-space: pre-wrap; /* Preserves line breaks from the source text */
  overflow-x: auto;      /* Horizontal scroll if lines are too long */
}
/* Headings inside the README rendered in signal red */
.modal .readme h4 {
  font-family: var(--font-mono);
  color: var(--signal);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 1.4rem 0 0.5rem;
}
.modal .readme h4:first-child { margin-top: 0; }
/* Inline code spans */
.modal .readme code {
  background: var(--ink-soft);
  padding: 0.1rem 0.4rem;
  color: var(--paper);
}
```

---

## JS to restore

Goes between the `initWorkDetail()` section and the `CONTACT FORM` section
in `main.js`:

```js
/* ─────────────────────────────────────────────────────
   PROJECT MODALS  (projects.html only)
   Clicking a project card opens a full-screen detail panel
   populated from that card's data-* attributes:
     data-title       → modal heading
     data-kind        → tag line under the heading
     data-description → main paragraph
     data-demo        → URL to embed (audio, video, or iframe)
     data-readme      → documentation text (markdown-ish)
───────────────────────────────────────────────────── */
function initProjectModals() {
  const modal   = document.getElementById('project-modal');
  if (!modal) return; // Not on the Projects page — exit early

  const inner   = modal.querySelector('.modal-inner');  // The white box inside the overlay
  const overlay = document.getElementById('modal-overlay'); // Dark semi-transparent backdrop

  // ── Open modal when a card is clicked ──────────────────
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const data = card.dataset; // Shortcut to all data-* attributes

      // Populate modal fields from the card's data attributes
      inner.querySelector('.modal-tag').textContent  = data.kind        || '';
      inner.querySelector('h2').textContent          = data.title       || '';
      inner.querySelector('.modal-desc').textContent = data.description || '';

      // ── Demo embed ──────────────────────────────────────
      const demoBox = inner.querySelector('.demo');
      if (data.demo) {
        // Detect file type by extension and create the right HTML element:
        if (/\.(mp3|wav|ogg)$/i.test(data.demo)) {
          // Audio file → <audio> player
          demoBox.innerHTML = `<audio controls src="${data.demo}"></audio>`;
        } else if (/\.(mp4|webm)$/i.test(data.demo)) {
          // Video file → <video> player
          demoBox.innerHTML = `<video controls src="${data.demo}"></video>`;
        } else {
          // Anything else (YouTube, Vimeo, p5 sketch, etc.) → <iframe>
          demoBox.innerHTML = `<iframe src="${data.demo}" frameborder="0" allowfullscreen></iframe>`;
        }
      } else {
        // No demo URL provided
        demoBox.textContent = '— Demo coming soon —';
      }

      // ── README text ─────────────────────────────────────
      // formatReadme() converts basic markdown (## headings, `code`)
      // to HTML that the CSS styles like a terminal window
      inner.querySelector('.readme').innerHTML = formatReadme(data.readme || '');

      // ── Show modal ──────────────────────────────────────
      modal.classList.add('open');          // CSS makes the modal visible
      overlay.classList.add('visible');     // CSS shows the dark backdrop
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // ── Close modal ─────────────────────────────────────────
  const close = () => {
    modal.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = ''; // Restore background scrolling
    inner.querySelector('.demo').innerHTML = ''; // Clear the embedded player
    // (important: stops audio/video from continuing to play after close)
  };

  // Three ways to close: the X button, clicking the backdrop, pressing Escape
  inner.querySelector('.modal-close').addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}


/* ─────────────────────────────────────────────────────
   README FORMATTER
   Converts the plain-text readme strings stored in
   data-readme attributes into basic HTML.

   Supported formatting:
     ## Heading text   →  <h4>Heading text</h4>
     `inline code`     →  <code>inline code</code>
     Blank lines       →  skipped (no empty divs)
     Anything else     →  wrapped in a <div>

   This is intentionally minimal — not a full Markdown parser.
───────────────────────────────────────────────────── */
function formatReadme(src) {
  return src
    .split(/\n/)          // Split the string into individual lines
    .map(line => {
      const t = line.trim(); // Remove leading/trailing whitespace

      // Line starts with "## " → treat as a heading
      if (/^##\s/.test(t)) return `<h4>${t.replace(/^##\s/, '')}</h4>`;

      // Empty line → output nothing
      if (t === '') return '';

      // Anything else → wrap in a div, converting `backtick spans` to <code>
      return `<div>${t.replace(/`([^`]+)`/g, '<code>$1</code>')}</div>`;
    })
    .join('\n'); // Reassemble lines with newlines between them
}
```
