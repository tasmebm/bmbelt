/* ========================================
   Bigmehr - Site Interactions
   ======================================== */

/* ===== Mobile Menu ===== */

function getMenuElements() {
  return {
    nav: document.getElementById('nav'),
    button: document.querySelector('.menu-btn')
  };
}

function closeMenu() {
  const { nav, button } = getMenuElements();

  if (!nav) return;

  nav.classList.remove('open');

  if (button) {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'باز کردن منو');
  }
}

function toggleMenu() {
  const { nav, button } = getMenuElements();

  if (!nav) return;

  const isOpen = nav.classList.contains('open');

  if (isOpen) {
    closeMenu();
    return;
  }

  nav.classList.add('open');

  if (button) {
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'بستن منو');
  }
}

/* ===== FAQ ===== */

function initializeFAQ() {
  document.querySelectorAll('.faq-section').forEach(function (section) {
    if (section.dataset.faqInitialized === 'true') return;

    section.dataset.faqInitialized = 'true';

    section.addEventListener('click', function (event) {
      const button = event.target.closest('.faq-question');

      if (!button || !section.contains(button)) return;

      const item = button.closest('.faq-item');

      if (!item) return;

      const isOpen = item.classList.contains('active');

      // بستن سایر سوالات همین بخش
      section.querySelectorAll('.faq-item').forEach(function (faq) {
        faq.classList.remove('active');

        const faqButton = faq.querySelector('.faq-question');

        if (faqButton) {
          faqButton.setAttribute('aria-expanded', 'false');
        }
      });

      // باز کردن سوال انتخاب‌شده، در صورت بسته بودن
      if (!isOpen) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ===== Global Event Initialization ===== */

function initializeSiteInteractions() {
  if (document.documentElement.dataset.siteInteractionsInitialized === 'true') {
    initializeFAQ();
    return;
  }

  document.documentElement.dataset.siteInteractionsInitialized = 'true';

  // بستن منو با کلیک بیرون از منو
  document.addEventListener('click', function (event) {
    const { nav, button } = getMenuElements();

    if (!nav || !nav.classList.contains('open')) return;

    if (
      !nav.contains(event.target) &&
      (!button || !button.contains(event.target))
    ) {
      closeMenu();
    }
  });

  // بستن منو با کلید Escape
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;

    const { nav, button } = getMenuElements();

    if (nav && nav.classList.contains('open')) {
      closeMenu();

      if (button) {
        button.focus();
      }
    }
  });

  // بستن منوی موبایل پس از انتخاب لینک
  document.addEventListener('click', function (event) {
    const { nav } = getMenuElements();

    if (!nav || !nav.classList.contains('open')) return;

    const link = event.target.closest('#nav a');

    if (link && nav.contains(link)) {
      closeMenu();
    }
  });

  initializeFAQ();
}

/* ===== Start ===== */

if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    initializeSiteInteractions,
    { once: true }
  );
} else {
  initializeSiteInteractions();
}
