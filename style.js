
const text = "SELAMAT DATANG DI AROMA RASA";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

const animatables = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-5");
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, { threshold: 0.2 });

animatables.forEach(el => observer.observe(el));


window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("shadow-lg", "py-2");
  } else {
    nav.classList.remove("shadow-lg", "py-2");
  }
});
