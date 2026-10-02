(() => {
  const root = document.documentElement;
  const progress = document.querySelector("#readingProgress");
  let size = Number(localStorage.getItem("aerathisNovelFont")) || 19;
  let wide = localStorage.getItem("aerathisNovelWide") === "true";
  const savedTheme = localStorage.getItem("aerathisNovelTheme") || "night";

  function applyPrefs() {
    root.style.setProperty("--reader-size", `${size}px`);
    root.style.setProperty("--reader-width", wide ? "900px" : "760px");
    root.dataset.theme = savedTheme;
  }
  applyPrefs();

  document.querySelector("#fontDown")?.addEventListener("click", () => {
    size = Math.max(15, size - 1);
    root.style.setProperty("--reader-size", `${size}px`);
    localStorage.setItem("aerathisNovelFont", size);
  });
  document.querySelector("#fontUp")?.addEventListener("click", () => {
    size = Math.min(27, size + 1);
    root.style.setProperty("--reader-size", `${size}px`);
    localStorage.setItem("aerathisNovelFont", size);
  });
  document.querySelector("#widthToggle")?.addEventListener("click", () => {
    wide = !wide;
    root.style.setProperty("--reader-width", wide ? "900px" : "760px");
    localStorage.setItem("aerathisNovelWide", wide);
  });
  document.querySelectorAll("[data-theme-set]").forEach((btn) =>
    btn.addEventListener("click", () => {
      root.dataset.theme = btn.dataset.themeSet;
      localStorage.setItem("aerathisNovelTheme", btn.dataset.themeSet);
    }),
  );
  function updateProgress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const pct = max > 0 ? (scrollY / max) * 100 : 0;
    progress.style.width = `${Math.min(100, pct)}%`;
  }
  addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
})();
