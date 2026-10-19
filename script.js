/* ===== Mobile Menu ===== */

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

/* ===== Menu + FAQ Initialization ===== */

function initializeSiteInteractions() {
  // بستن منو با کلیک بیرون از آن
  document.addEventListener('click', function (event) {
    const nav = document.getElementById('nav');
    const button = document.querySelector('.menu-btn');

    if (!nav || !button) return;

    if (
      !nav.contains(event.target) &&
      !button.contains(event.target)
    ) {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'باز کردن منو');
    }
  });

  // عملکرد سوالات متداول
  document.querySelectorAll('.faq-section').forEach(function (section) {
    section.addEventListener('click', function (event) {
      const button = event.target.closest('.faq-question');

      if (!button || !section.contains(button)) return;

      const item = button.closest('.faq-item');

      if (!item) return;

      const isOpen = item.classList.contains('active');

      // ابتدا تمام سوالات همین بخش بسته شوند
      section.querySelectorAll('.faq-item').forEach(function (faq) {
        faq.classList.remove('active');

        const faqButton = faq.querySelector('.faq-question');

        if (faqButton) {
          faqButton.setAttribute('aria-expanded', 'false');
        }
      });

      // اگر سوال بسته بود، آن را باز کن
      if (!isOpen) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// اجرا چه قبل از آماده شدن صفحه و چه بعد از آن
if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    initializeSiteInteractions,
    { once: true }
  );
} else {
  initializeSiteInteractions();
}
