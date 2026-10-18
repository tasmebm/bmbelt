
function toggleMenu() {
  const nav = document.getElementById('nav');
  const button = document.querySelector('.menu-btn');

  if (!nav) return;

  const isOpen = nav.classList.toggle('open');

  if (button) {
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute(
      'aria-label',
      isOpen ? 'بستن منو' : 'باز کردن منو'
    );
  }
}

document.addEventListener('click', function (event) {
  const nav = document.getElementById('nav');
  const button = document.querySelector('.menu-btn');

  if (!nav || !button) return;

  if (!nav.contains(event.target) && !button.contains(event.target)) {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'باز کردن منو');
  }
});
