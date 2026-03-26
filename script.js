// const toggleBtn = document.getElementById("lang-toggle");
// let currentLang = "en";

// toggleBtn.addEventListener("click", () => {
//   const elements = document.querySelectorAll("[data-en]");
//   currentLang = currentLang === "en" ? "zh" : "en";

//   elements.forEach((el) => {
//     el.textContent = el.getAttribute(`data-${currentLang}`);
//   });

//   toggleBtn.textContent = currentLang === "en" ? "中文" : "EN";
//   document.documentElement.lang = currentLang === "en" ? "en" : "zh";
// });

const toggleBtn = document.getElementById("lang-toggle");
let currentLang = "en";

toggleBtn.addEventListener("click", () => {
  const elements = document.querySelectorAll("[data-en]");
  currentLang = currentLang === "en" ? "zh" : "en";

  elements.forEach((el) => {
    const newContent = el.getAttribute(`data-${currentLang}`);
    el.innerHTML = newContent;
  });

  toggleBtn.textContent = currentLang === "en" ? "中文" : "EN";
  document.documentElement.lang = currentLang === "en" ? "en" : "zh";
});