// chuck.findlayis.me — vanilla JS, no jQuery
// Soft crossfade between views via CSS opacity transition.

const views = {
  home: () => `
    <h3 class="display-6 fw-semibold mb-3">Backend Developer &amp; SRE, Canada</h3>
    <p class="lead mb-4">
      <a target="_blank" rel="noopener" href="https://chuck.findlayis.me/pubkey.asc">My public GPG key</a>
    </p>
    <p>Go developer with a strong SRE/DevOps background. I work across the stack — from application code to infrastructure — and run a homelab that's grown well past any reasonable justification.</p>
    <p>I write occasionally at <a href="https://darkfoe.ca" target="_blank" rel="noopener">darkfoe.ca</a> — technical posts on DevOps, infrastructure, and security research, including malware analysis from a self-built SSH honeypot.</p>
    <img src="img/vscode-sshot.png" class="img-fluid rounded shadow-sm mb-4" alt="Visual Studio Code Screenshot">
    <p class="text-muted-soft">
      Site handcrafted without a WYSIWYG editor, shipped via CI/CD pipeline. Bootstrap for the looks.
    </p>
  `,

  contact: () => `
    <h3 class="display-6 fw-semibold mb-3">Contact</h3>
    <p>Email is the preferred way to reach me async; LinkedIn works too. Not on Twitter/X, Facebook, or anything else.</p>
    <p class="mb-4">
      PGP key is available
      <a href="https://chuck.findlayis.me/pubkey.asc" target="_blank" rel="noopener">here</a>
      if you want to send encrypted mail.
    </p>
    <ul class="list-group list-group-flush-soft">
      <li class="list-group-item">
        <span class="list-label">Email</span>
        <a href="mailto:chuck@findlayis.me">chuck@findlayis.me</a>
      </li>
      <li class="list-group-item">
        <span class="list-label">LinkedIn</span>
        <a href="https://www.linkedin.com/in/charlesrfindlay/" target="_blank" rel="noopener">charlesrfindlay</a>
      </li>
    </ul>
  `,

  portfolio: () => `
    <h3 class="display-6 fw-semibold mb-3">Coding Portfolio</h3>
    <p class="mb-4">
      Not an exhaustive list of what I've worked with &mdash; a sample across a few languages.
      Most have automated builds; some have full CI/CD. Go is where the bulk of my serious work lives.
    </p>
    <div class="portfolio-stack">
      <section class="portfolio-section">
        <h4 class="portfolio-lang">Go <span class="portfolio-lang-sub">/ Golang</span></h4>
        <ul class="portfolio-links">
          <li><a href="https://github.com/cfindlayisme/wmb" target="_blank" rel="noopener">wmb</a> <span class="link-desc">webhook message bot for IRC</span></li>
          <li><a href="https://github.com/cfindlayisme/rss-wmb" target="_blank" rel="noopener">rss-wmb</a> <span class="link-desc">rss feed → wmb → IRC message</span></li>
          <li><a href="https://github.com/cfindlayisme/go-utils" target="_blank" rel="noopener">go-utils</a> <span class="link-desc">utility functions for Go development</span></li>
          <li><a href="https://github.com/cfindlayisme/go-types" target="_blank" rel="noopener">go-types</a> <span class="link-desc">extended types/structs (e.g. Temperature)</span></li>
          <li><a href="https://github.com/cfindlayisme/ssh-bastion" target="_blank" rel="noopener">ssh-bastion</a> <span class="link-desc">SSH bastion host</span></li>
        </ul>
      </section>
      <section class="portfolio-section">
        <h4 class="portfolio-lang">JavaScript <span class="portfolio-lang-sub">/ Node</span></h4>
        <ul class="portfolio-links">
          <li><a href="https://github.com/cfindlayisme/chuck.findlayis.me-docker" target="_blank" rel="noopener">this site</a> <span class="link-desc">repo for chuck.findlayis.me</span></li>
          <li><a href="https://gsmanager.serverfail.party" target="_blank" rel="noopener">gsmanager</a> <span class="link-desc">game server control panel (closed source)</span></li>
          <li><a href="https://darkfoe.ca" target="_blank" rel="noopener">darkfoe.ca</a> <span class="link-desc">my blog (closed source, NodeJS)</span></li>
        </ul>
      </section>
      <section class="portfolio-section">
        <h4 class="portfolio-lang">Docker</h4>
        <ul class="portfolio-links">
          <li><a href="https://github.com/cfindlayisme/factorio-docker" target="_blank" rel="noopener">factorio-docker</a></li>
          <li><a href="https://github.com/cfindlayisme/terraria-docker" target="_blank" rel="noopener">terraria-docker</a></li>
        </ul>
      </section>
    </div>
  `,
};

const content = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-masthead .nav-link[data-view]');

let current = null;

function showView(name) {
  if (current === name) return;
  current = name;

  // Mark active nav link
  navLinks.forEach((l) => {
    l.classList.toggle('active', l.dataset.view === name);
  });

  // Soft crossfade: fade out → swap → fade in
  content.classList.remove('is-visible');
  const FADE_MS = 200;
  setTimeout(() => {
    content.innerHTML = (views[name] || views.home)();
    // Force reflow so the next class change actually transitions
    void content.offsetWidth;
    content.classList.add('is-visible');
  }, FADE_MS);
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showView(link.dataset.view);
  });
});

// Initial render — pop in without fading from blank
content.innerHTML = views.home();
requestAnimationFrame(() => content.classList.add('is-visible'));
