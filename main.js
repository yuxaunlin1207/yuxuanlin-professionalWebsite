/* =====================================================
   main.js — Yuxuan Lin site behavior
   =====================================================
   This is the ONLY JavaScript file for the whole site.
   It runs once the page has finished loading (see the
   DOMContentLoaded listener at the bottom of this block).

   Each feature lives in its own function so you can
   edit one thing without accidentally breaking another.
   ===================================================== */


/* ─────────────────────────────────────────────────────
   STARTUP
   When the browser has finished reading the HTML and
   building the page structure, it fires "DOMContentLoaded".
   We wait for that event before running any code so we
   don't try to interact with elements that don't exist yet.
───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();           // Mobile hamburger menu
  initBioSwitcher();   // Short / Medium / Long bio tabs
  initCopyButtons();   // "Copy" buttons that copy bio text to clipboard
  initWorkFilters();   // Filter bar on the Works page
  initWorkDetail();    // Individual work detail page (work.html)
  initContactForm();   // Contact form validation & submission
  initPerformancesAutoArchive(); // Moves past-dated Upcoming rows into Archive
  initYouTubeFacades(); // Click-to-load YouTube thumbnails on the Media page
  highlightActiveNav();// Bolds the nav link for the current page
});


/* ─────────────────────────────────────────────────────
   MOBILE NAVIGATION TOGGLE
   On small screens the nav links are hidden by default.
   A "Menu" button appears instead. Clicking it adds/removes
   the class "open" on the <nav>, which the CSS uses to
   show or hide the links.
───────────────────────────────────────────────────── */
function initNav() {
  // Find the "Menu" button and the navigation element
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('nav.primary');

  // If neither element exists on this page, do nothing
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    // classList.toggle adds the class if it's missing,
    // removes it if it's already there
    nav.classList.toggle('open');
  });
}


/* ─────────────────────────────────────────────────────
   ACTIVE NAV LINK HIGHLIGHT
   Reads the current page's filename from the URL and adds
   the class "active" to whichever nav link points to it.
   The CSS turns that link crimson with an underline.
───────────────────────────────────────────────────── */
function highlightActiveNav() {
  // location.pathname is the URL path, e.g. "/bio.html"
  // .split('/').pop() takes the last part after the final slash → "bio.html"
  // || 'index.html' handles the root URL "/" where pop() returns ""
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  // Loop through every nav link
  document.querySelectorAll('nav.primary a').forEach(a => {
    const target = a.getAttribute('href').toLowerCase();

    // Mark the link active if its href matches the current page,
    // or if we're at the root and the link points to index.html
    if (target === here || (here === '' && target === 'index.html')) {
      a.classList.add('active');
    }
  });
}


/* ─────────────────────────────────────────────────────
   PERFORMANCES AUTO-ARCHIVE  (performances.html only)
   Runs every time the page loads. Compares each Upcoming
   row's data-date against today and, for any date that has
   passed, moves that row down into the Archive — inserted in
   the correct newest-first position, not just appended.

   This is a static site with no server, so "every day" means
   "whenever a visitor next loads the page" — it can't move a
   row while the tab is left open and unused across midnight.

   HOW TO ADD A ROW: see the comments above the Upcoming and
   Archive sections in performances.html. Every .perf-row needs
   a data-date="YYYY-MM-DD" attribute for this to work.
───────────────────────────────────────────────────── */
function initPerformancesAutoArchive() {
  const upcomingSection = document.getElementById('perf-upcoming-section');
  const archiveSection = document.getElementById('perf-archive-section');
  if (!upcomingSection || !archiveSection) return; // Not on the Performances page — exit early

  // Midnight today, in the visitor's local time — dates are compared
  // as whole days, not exact timestamps.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // NodeList → array so it's safe to move elements while iterating
  const upcomingRows = Array.from(upcomingSection.querySelectorAll('.perf-row.upcoming'));

  upcomingRows.forEach(row => {
    const rowDate = new Date(row.dataset.date + 'T00:00:00'); // local midnight, not UTC
    if (rowDate >= today) return; // Still upcoming — leave it alone

    row.classList.remove('upcoming');

    // Find the first existing archive row that's the same date or older,
    // and insert this row right before it, keeping newest-first order.
    const archiveRows = archiveSection.querySelectorAll('.perf-row');
    let inserted = false;
    for (const existing of archiveRows) {
      if (new Date(existing.dataset.date + 'T00:00:00') <= rowDate) {
        existing.before(row);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      // Older than everything currently in the archive (or archive is empty) — append at the end
      archiveSection.appendChild(row);
    }
  });

  // If Upcoming is now empty, show a placeholder instead of a blank section
  if (!upcomingSection.querySelector('.perf-row')) {
    let empty = upcomingSection.querySelector('.perf-empty');
    if (!empty) {
      empty = document.createElement('p');
      empty.className = 'subtle perf-empty';
      empty.style.padding = '2rem 0 1rem';
      empty.textContent = 'No performances currently scheduled — check back soon.';
      upcomingSection.querySelector('h2').after(empty);
    }
  }
}


/* ─────────────────────────────────────────────────────
   BIO VERSION SWITCHER  (bio.html only)
   Three buttons let you switch between Short, Medium, and
   Long versions of the bio text.
   - The buttons live inside .bio-switch
   - The text blocks are <article class="bio-version">
   Each button and each article has a data-version attribute
   (e.g., data-version="short") so they can be matched up.
───────────────────────────────────────────────────── */
function initBioSwitcher() {
  const switcher = document.querySelector('.bio-switch');
  if (!switcher) return; // Not on the bio page — exit early

  // Listen for clicks anywhere inside the switcher container
  switcher.addEventListener('click', e => {
    // e.target is whichever element was clicked.
    // .closest('button') walks up the DOM tree to find the
    // nearest enclosing <button> (handles clicks on child elements)
    const btn = e.target.closest('button');
    if (!btn) return; // Click was on the container itself, not a button

    const v = btn.dataset.version; // e.g., "short", "medium", or "long"

    // Mark only the clicked button as active (all others become inactive)
    switcher.querySelectorAll('button').forEach(b =>
      b.classList.toggle('active', b === btn)
    );

    // Show only the bio-version article whose data-version matches
    document.querySelectorAll('.bio-version').forEach(el => {
      el.classList.toggle('active', el.dataset.version === v);
    });
  });
}


/* ─────────────────────────────────────────────────────
   COPY-TO-CLIPBOARD BUTTONS  (bio.html only)
   Each version of the bio has a small "Copy" button.
   Clicking it copies the bio text to the user's clipboard.

   How to set one up in HTML:
     <button class="copy-btn" data-target="#bio-short-text">Copy</button>
   data-target is a CSS selector pointing to the element
   whose text you want copied.
───────────────────────────────────────────────────── */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Find the target element using the selector stored in data-target
      const target = document.querySelector(btn.dataset.target);
      if (!target) return;

      // .innerText gives us the visible text content (no HTML tags)
      // .trim() removes any leading/trailing whitespace
      const text = target.innerText.trim();

      // navigator.clipboard.writeText() copies to the system clipboard.
      // It returns a Promise (asynchronous), so we use .then() to run
      // code after the copy succeeds.
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent; // Save the original label
        btn.textContent = 'Copied ✓';     // Temporarily change label
        // After 1.5 seconds, restore the original label
        setTimeout(() => (btn.textContent = original), 1500);
      });
    });
  });
}


/* ─────────────────────────────────────────────────────
   WORKS FILTER BAR  (works.html only)
   Buttons at the top of the Works page let visitors filter
   the catalogue by category (Solo, Chamber, Ensemble, etc.)

   How it works:
   - Each filter button has data-filter="solo" (or whatever)
   - Each work row has data-category="solo" (matching the filter)
   - Clicking a button shows only rows whose category matches
   - The "All" button (data-filter="all") shows everything
───────────────────────────────────────────────────── */
function initWorkFilters() {
  const bar = document.querySelector('.filter-bar');
  if (!bar) return; // Not on the Works page — exit early

  // Hide any filter button whose category has no matching work rows.
  // Runs on load, so a category button reappears automatically as
  // soon as a work is tagged data-category="that-category".
  const categories = new Set(
    Array.from(document.querySelectorAll('.work-row')).map(row => row.dataset.category)
  );
  bar.querySelectorAll('button[data-filter]').forEach(btn => {
    if (btn.dataset.filter === 'all') return;
    btn.style.display = categories.has(btn.dataset.filter) ? '' : 'none';
  });

  bar.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;

    // Mark the clicked button active, all others inactive
    bar.querySelectorAll('button').forEach(b =>
      b.classList.toggle('active', b === btn)
    );

    const f = btn.dataset.filter; // The category to filter by

    // Loop through every work row and show or hide it
    document.querySelectorAll('.work-row').forEach(row => {
      // Show if: filter is "all"  OR  row's category matches the filter
      // Setting display to '' (empty string) restores the default display
      row.style.display = (f === 'all' || row.dataset.category === f) ? '' : 'none';
    });
  });
}


/* ─────────────────────────────────────────────────────
   WORK DETAIL PAGE  (work.html only)
   Reads ?id=echo-atlas from the URL, looks up the work
   in WORKS_DATA (defined in works-data.js), and populates
   every section of the detail page.
───────────────────────────────────────────────────── */
function initWorkDetail() {
  // Only run on work.html
  if (!document.getElementById('work-title')) return;

  // Read the ?id= parameter from the URL
  const id = new URLSearchParams(window.location.search).get('id');
  const work = (typeof WORKS_DATA !== 'undefined') && WORKS_DATA[id];

  if (!work) {
    document.getElementById('work-title').textContent = 'Work not found';
    return;
  }

  // Update the browser tab title
  document.title = `${work.title} — Yuxuan Lin`;

  // Header fields
  document.getElementById('work-title').textContent = work.title;
  document.getElementById('work-year').textContent = work.year || '—';
  document.getElementById('work-instrumentation').textContent = work.instrumentation || '—';
  document.getElementById('work-duration').textContent = work.duration || '—';
  document.getElementById('work-premiere').textContent = work.premiere || '—';

  // Program note
  const noteEl = document.getElementById('work-program-note-text');
  noteEl.innerHTML = work.programNote || '<p style="color:var(--ink-faint)">—</p>';

  // Video
  const videoSection = document.getElementById('work-video-section');
  const videoWrap = document.getElementById('work-video-wrap');
  if (work.video) {
    videoWrap.innerHTML = `<iframe src="${work.video}" allowfullscreen loading="lazy"></iframe>`;
  } else {
    videoSection.style.display = 'none';
  }

  // Second video (optional) — e.g. a different recording worth also showing,
  // with an optional caption overlay crediting that specific performance
  const videoWrap2 = document.getElementById('work-video-wrap-2');
  if (work.video2 && videoWrap2) {
    videoWrap2.style.display = '';
    videoWrap2.innerHTML = `<iframe src="${work.video2}" allowfullscreen loading="lazy"></iframe>` +
      (work.video2Caption ? `<div class="work-video-caption">${work.video2Caption}</div>` : '');
  }

  // Performances
  const perfSection = document.getElementById('work-performances-section');
  const perfList = document.getElementById('work-performances-list');
  if (work.performances && work.performances.length > 0) {
    perfList.innerHTML = work.performances.map(p => `
      <div class="perf-row">
        <div class="perf-date">${p.date}</div>
        <div>${p.venue || '—'}</div>
        <div style="color:var(--ink-faint); font-style:italic;">${p.ensemble || ''}</div>
      </div>
    `).join('');
  } else {
    perfSection.style.display = 'none';
  }

  // Score preview — Issuu embed
  const scoreSection = document.getElementById('work-score-section');
  const issuuWrap = document.getElementById('work-issuu-wrap');

  if (work.issuuEmbed && issuuWrap) {
    issuuWrap.innerHTML = `<iframe src="${work.issuuEmbed}" allowfullscreen
      sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
      loading="lazy"></iframe>`;
  } else if (scoreSection) {
    scoreSection.style.display = 'none';
  }
}



/* ─────────────────────────────────────────────────────
   CONTACT FORM  (contact.html only)
   Validates that email and message are filled in, then
   logs the submission to the browser console.

   TO MAKE THIS SEND REAL EMAIL:
   Option A — Formspree: add action="https://formspree.io/f/YOUR_ID"
              to the <form> tag in contact.html and remove e.preventDefault()
   Option B — Netlify Forms: add netlify attribute to <form>
   See README.md for full instructions.
───────────────────────────────────────────────────── */
function initContactForm() {
  const form = document.querySelector('form.contact-form');
  if (!form) return; // Not on the Contact page — exit early

  form.addEventListener('submit', e => {
    e.preventDefault();

    const status = form.querySelector('.form-status');
    const btn = form.querySelector('button[type="submit"]');

    status.textContent = '';
    btn.disabled = true;
    btn.textContent = 'Sending…';

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
    .then(res => {
      if (res.ok) {
        status.textContent = '✓ Message sent. Yuxuan will be in touch.';
        status.style.color = 'var(--ink)';
        form.reset();
        showPopup('Sent!');
      } else {
        status.textContent = '× Something went wrong. Please try again.';
        status.style.color = 'var(--accent)';
        showPopup('Failed to connect, please try again.');
      }
    })
    .catch(() => {
      status.textContent = '× Network error. Please try again.';
      status.style.color = 'var(--accent)';
      showPopup('Failed to connect, please try again.');
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send note <span class="arrow">→</span>';
    });
  });
}

/* Shows the popup (#sent-popup in contact.html) with the given
   message for a couple seconds, or until the visitor clicks
   anywhere to dismiss it early. Used for both the success ("Sent!")
   and failure ("Failed to connect...") cases. */
function showPopup(message) {
  const popup = document.getElementById('sent-popup');
  if (!popup) return;

  popup.querySelector('.popup-box').textContent = message;
  popup.classList.add('show');
  const hide = () => popup.classList.remove('show');

  popup.addEventListener('click', hide, { once: true });
  setTimeout(hide, 2500);
}


/* ─────────────────────────────────────────────────────
   YOUTUBE FACADES  (Media page)
   Each .yt-facade div shows a thumbnail image + play button
   instead of a live iframe. The real, heavy YouTube iframe
   (player JS, UI, tracking) only loads once the visitor
   actually clicks — a big page-weight saving on a page with
   many embeds most visitors won't watch.
───────────────────────────────────────────────────── */
function initYouTubeFacades() {
  const facades = document.querySelectorAll('.yt-facade');
  if (!facades.length) return; // Not on the Media page — exit early

  facades.forEach(facade => {
    facade.addEventListener('click', () => {
      const id = facade.dataset.ytId;

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      iframe.title = 'YouTube video player';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.allowFullscreen = true;

      facade.innerHTML = '';
      facade.appendChild(iframe);
      facade.classList.remove('yt-facade'); // Stop listening for further clicks
    }, { once: true });
  });
}
