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

function toggleFab() {
const icons = document.getElementById('fabIcons');
const button = document.querySelector('.fab-button');

if (!icons) return;

const isOpen = icons.classList.toggle('show');

if (button) {
button.setAttribute('aria-expanded', String(isOpen));
button.setAttribute(
'aria-label',
isOpen ? 'بستن راه‌های تماس' : 'نمایش راه‌های تماس'
);
button.textContent = isOpen ? '×' : '+';
}
}

document.addEventListener('DOMContentLoaded', function () {
const icons = document.getElementById('fabIcons');
const button = document.querySelector('.fab-button');

if (!icons || !button) return;

button.addEventListener('click', toggleFab);
});