const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  nav.id = nav.id || "primary-navigation";
  toggle.setAttribute("aria-controls", nav.id);
}
addEventListener("scroll", () =>
  header.classList.toggle("scrolled", scrollY > 40),
);
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  if (open) nav.querySelector("a")?.focus();
});
function closeMenu() {
  if (!nav || !toggle) return;
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.focus();
}
document
  .querySelectorAll(".nav a")
  .forEach((a) => a.addEventListener("click", closeMenu));
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav?.classList.contains("open")) closeMenu();
});
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.14 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
if (document.body.matches(".manga-page,.light-novel-page"))
  document.querySelector(".page-nav")?.remove();

// Repair legacy replacement characters in catalog copy.
if (document.body.matches(".light-novel-page")) {
  document.querySelectorAll("p,a,h2,span,b,div").forEach((el) => {
    if (el.children.length) return;
    el.textContent = el.textContent
      .replace(/mist.{0,2}rios/gi, "mistórios")
      .replace(/mang.{0,2}/gi, "mangá")
      .replace(/come[^a-z\s]{1,4}a/gi, "começa")
      .replace(/re[^a-z\s]{1,4}ne/gi, "reúne")
      .replace(/v[^a-z\s]{1,4}rios/gi, "vários")
      .replace(/experi[^a-z\s]{1,4}ncia/gi, "experiência")
      .replace(/cap[^a-z\s]{1,4}tulos/gi, "capítulos")
      .replace(/hist[^a-z\s]{1,4}ria/gi, "história")
      .replace(/in[^a-z\s]{1,4}cio/gi, "início")
      .replace(/ser[^a-z\s]{1,4}o/gi, "serão")
      .replace(/al[^a-z\s]{1,4}m/gi, "além");
  });
  document.querySelectorAll(".chapter p").forEach((el) => {
    if (el.textContent.includes("Primeiro cap"))
      el.innerHTML =
        'Primeiro cap&iacute;tulo <span aria-hidden="true">&bull;</span> Volume 1';
  });
  const journeyHeading = document.querySelector(
    ".novel-section .chapter-heading h2",
  );
  if (journeyHeading) journeyHeading.textContent = "A jornada começa";
}

// Corrige textos antigos salvos com caracteres de substituição na página de apoiadores.
if (document.querySelector(".thanks-copy")) {
  const copy = document.querySelector(".thanks-copy");
  copy.innerHTML =
    "<p>A cada pessoa que acreditou em Aerathis e ajudou a tornar esse projeto poss\u00edvel: muito obrigado. O apoio de voc\u00eas d\u00e1 for\u00e7a para continuar criando, melhorando e trazendo novos cap\u00edtulos do mang\u00e1 e da light novel.</p><p>Esta hist\u00f3ria est\u00e1 apenas come\u00e7ando, e voc\u00eas j\u00e1 fazem parte dela. Em nome do canal Um Cara Qualquer, fica aqui nosso carinho e agradecimento por caminharem conosco.</p>";
}
const honorTitle = document.querySelector(".honor-head h2");
if (honorTitle) honorTitle.textContent = "Apoiadores at\u00e9 aqui";
const anonymousCopy = document.querySelector(".anonymous p");
if (anonymousCopy)
  anonymousCopy.textContent =
    "Algumas contribui\u00e7\u00f5es chegaram sem nome ou nick. Se esse \u00e9 o seu caso, nosso agradecimento tamb\u00e9m \u00e9 para voc\u00ea.";
const homeLink = document.querySelector('a[href="index.html"].btn-ghost');
if (homeLink) homeLink.textContent = "Voltar ao in\u00edcio";

const chapterCarousel = document.querySelector(".chapter-carousel");
if (chapterCarousel) {
  const panels = [...chapterCarousel.querySelectorAll("[data-chapter-panel]")];
  const counter = chapterCarousel.querySelector(".chapter-pagination");
  let current = 0;
  const update = (next) => {
    current = (next + panels.length) % panels.length;
    panels.forEach((panel, index) => {
      const active = index === current;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
    counter.innerHTML = `Capítulo <b>${String(current + 1).padStart(2, "0")}</b> de ${String(panels.length).padStart(2, "0")}`;
  };
  chapterCarousel.querySelector(".chapter-prev").addEventListener("click", () => update(current - 1));
  chapterCarousel.querySelector(".chapter-next").addEventListener("click", () => update(current + 1));
  update(0);
}
