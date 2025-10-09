// D-Homecare Services - Scripts
// - Mobile nav toggle
// - Smooth scroll for in-page anchors
// - Basic contact form validation and mock submission

(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Close nav when clicking a link (mobile)
  nav?.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    })
  );

  // Smooth scroll (enhanced)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href')?.substring(1);
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });

  // Contact form validation + mock submit
  const form = document.getElementById('contactForm');
  const status = document.querySelector('.form-status');

  function setError(id, message) {
    const el = document.querySelector(`.error[data-for="${id}"]`);
    if (el) el.textContent = message || '';
  }

  function validate() {
    let ok = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    setError('name'); setError('email'); setError('message');

    if (!name.value.trim()) { setError('name', 'Please enter your name.'); ok = false; }
    const emailVal = email.value.trim();
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setError('email', 'Please enter a valid email.'); ok = false;
    }
    if (!message.value.trim()) { setError('message', 'Please enter a message.'); ok = false; }

    return ok;
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    if (!validate()) return;

    // Mock delay and success (replace with your backend/API if needed)
    status.textContent = 'Sending...';
    try {
      await new Promise((r) => setTimeout(r, 800));
      status.textContent = 'Thanks! Your message has been sent.';
      form.reset();
    } catch (err) {
      status.textContent = 'Something went wrong. Please try again later.';
    }
  });
})();
