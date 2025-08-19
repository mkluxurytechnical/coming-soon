// =======================
// 1) particles.js config
// =======================
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: ["#6E5A18", "#D4AF37", "#F5E6A1"] },
    shape: { type: "circle" },
    opacity: { value: 0.35, random: true },
    size: { value: 2.2, random: true },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#7a6b2b",
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.0,
      direction: "none",
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.35 } },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
});

// =======================
// 2) GSAP animations
// =======================
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
tl.from("#logo", { y: 20, opacity: 0, duration: 0.8 })
  .from("#headline", { y: 16, opacity: 0, duration: 0.8 }, "-=0.4")
  .from("#tagline", { y: 10, opacity: 0, duration: 0.7 }, "-=0.5")
  .from("#notify-form", { y: 12, opacity: 0, duration: 0.7 }, "-=0.45");

// =======================
// 3) Countdown logic
// =======================
const LAUNCH_DATE = new Date("2025-12-01T10:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = LAUNCH_DATE - now;
  if (diff <= 0) return;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(d).padStart(2, "0");
  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// =======================
// 4) Cursor sparkle
// =======================
const sparkle = document.getElementById("sparkle");
const xSet = gsap.quickSetter(sparkle, "x", "px");
const ySet = gsap.quickSetter(sparkle, "y", "px");
window.addEventListener("pointermove", (e) => {
  xSet(e.clientX);
  ySet(e.clientY);
  gsap.fromTo(
    sparkle,
    { scale: 0.6, opacity: 0.6 },
    { scale: 1, opacity: 0.95, duration: 0.2, overwrite: true }
  );
});

// =======================
// 5) Form validation
// =======================
const form = document.getElementById("notify-form");
form.addEventListener("submit", (e) => {
  const email = form.querySelector('input[name="email"]').value.trim();
  if (!email) {
    e.preventDefault();
    alert("Please enter a valid email");
  }
});

// =======================
// 6) Footer year
// =======================
document.getElementById("year").textContent = new Date().getFullYear();