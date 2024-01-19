/*============== Scroll Reveal ===============*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".navbar", { origin: "right" });
ScrollReveal().reveal(".logo, .home-content h1", {
  origin: "left",
});
ScrollReveal().reveal(".home-content h3, .home-soc a", { origin: "top" });
ScrollReveal().reveal(".home-content p, .btn", {
  origin: "bottom",
});
