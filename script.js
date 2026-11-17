// =========================
// MOBILE NAVIGATION
// =========================

const menuButton = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", open);

  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
  });
});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        obs.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

// Apply animation to all reveal elements

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
