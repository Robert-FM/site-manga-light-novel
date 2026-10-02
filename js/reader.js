const TOTAL = 22;
let current = 1;
const sheet = document.querySelector("#sheet"),
  counter = document.querySelector("#counter"),
  placeholderNo = document.querySelector("#placeholderNo"),
  paged = document.querySelector("#pagedReader"),
  vertical = document.querySelector("#verticalReader"),
  pagedBtn = document.querySelector("#pagedBtn"),
  verticalBtn = document.querySelector("#verticalBtn");
const path = (n) => `assets/manga/chapter-01/${String(n).padStart(2, "0")}.jpg`;
function renderPage() {
  counter.textContent = `${String(current).padStart(2, "0")} / ${TOTAL}`;
  const img = new Image();
  img.alt = `Aerathis \u2014 cap\u00edtulo 1, p\u00e1gina ${current}`;
  img.onload = () => {
    sheet.innerHTML = "";
    sheet.appendChild(img);
  };
  img.onerror = () => {
    sheet.innerHTML = `<div class="reader-placeholder"><div class="page-no">${String(current).padStart(2, "0")}</div><h2>P\u00e1gina do cap\u00edtulo</h2><p>A imagem original desta p\u00e1gina ainda n\u00e3o foi adicionada ao projeto.</p></div>`;
  };
  img.src = path(current);
}
function move(delta) {
  current = Math.min(TOTAL, Math.max(1, current + delta));
  renderPage();
}
document.querySelector("#prevBtn").onclick = () => move(-1);
document.querySelector("#nextBtn").onclick = () => move(1);
document.addEventListener("keydown", (e) => {
  if (!paged.classList.contains("hidden")) {
    if (e.key === "ArrowLeft") move(1);
    if (e.key === "ArrowRight") move(-1);
  }
});
function buildVertical() {
  if (vertical.children.length) return;
  for (let i = 1; i <= TOTAL; i++) {
    const box = document.createElement("div");
    box.className = "vertical-page";
    const img = new Image();
    img.alt = `Aerathis \u2014 cap\u00edtulo 1, p\u00e1gina ${i}`;
    img.onload = () => {
      box.innerHTML = "";
      box.appendChild(img);
    };
    img.onerror = () =>
      (box.innerHTML = `<span>${String(i).padStart(2, "0")}</span>`);
    img.src = path(i);
    box.appendChild(img);
    vertical.appendChild(box);
  }
}
pagedBtn.onclick = () => {
  paged.classList.remove("hidden");
  vertical.classList.remove("active");
  pagedBtn.classList.add("active");
  verticalBtn.classList.remove("active");
  counter.style.display = "inline";
};
verticalBtn.onclick = () => {
  buildVertical();
  paged.classList.add("hidden");
  vertical.classList.add("active");
  verticalBtn.classList.add("active");
  pagedBtn.classList.remove("active");
  counter.style.display = "none";
};
document.querySelector("#fullscreenBtn").onclick = () => {
  if (!document.fullscreenElement)
    document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
};
renderPage();
