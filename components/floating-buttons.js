
(async function () {
  const fabPlaceholder = document.querySelector("[data-shared-fab]");
  const contactPlaceholder = document.querySelector("[data-shared-contact-links]");

  if (!fabPlaceholder && !contactPlaceholder) return;

  try {
    const response = await fetch("/components/floating-buttons.html");

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    const doc = new DOMParser().parseFromString(
      await response.text(),
      "text/html"
    );

    if (fabPlaceholder && !document.querySelector(".fab")) {
      const fab = doc.querySelector(".fab");
      if (fab) fabPlaceholder.replaceWith(fab);
    }

    if (contactPlaceholder) {
      const links = doc.querySelector(".contact-links");
      if (links) contactPlaceholder.replaceWith(links);
    }
  } catch (error) {
    console.error("خطا در بارگذاری دکمه‌های مشترک:", error);
  }
})();
