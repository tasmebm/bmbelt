(function () {
  function toggleMenu() {
    const nav = document.getElementById('nav');
    const button = document.querySelector('.menu-btn');
    if (!nav || !button) return;
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'بستن منو' : 'باز کردن منو');
  }
  window.toggleMenu = toggleMenu;
  document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('nav');
    const button = document.querySelector('.menu-btn');
    if (!nav || !button) return;
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'باز کردن منو');
      });
    });
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !button.contains(event.target)) {
        nav.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'باز کردن منو');
      }
    });
  });
})();
