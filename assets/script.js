(() => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close nav when clicking a link (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Light form UX: trim whitespace on submit
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", () => {
      form.querySelectorAll("input[type='text'], input:not([type]), textarea").forEach(el => {
        if (typeof el.value === "string") el.value = el.value.trim();
      });
    });
  });
})();

