// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Formspree: show a thank-you message after submission
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute('action');

    if (action.includes('YOUR_FORMSPREE_ID')) {
      alert('Contact form not yet configured. Please email karla.yoder@gmail.com directly.');
      return;
    }

    try {
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.innerHTML = `
          <div style="text-align:center; padding: 2rem 0;">
            <p style="font-size:1.2rem; font-weight:600; color:var(--navy); margin-bottom:0.5rem;">Thank you for reaching out!</p>
            <p style="color:#555;">I'll be in touch soon.</p>
          </div>`;
      } else {
        alert('Something went wrong. Please email karla.yoder@gmail.com directly.');
      }
    } catch {
      alert('Something went wrong. Please email karla.yoder@gmail.com directly.');
    }
  });
}
