const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {

  // Menu toggle
  const btn = document.querySelector('#theButton');
  const menu = document.querySelector('.nav-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.toggle('open');
      menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked (nice mobile UX)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        btn.classList.remove('open');
        menu.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

});