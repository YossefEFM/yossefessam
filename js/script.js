
// js/script.js

// استخراج اللغة من رابط الصفحة
function getLangFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "en";
}

// تطبيق الترجمة
function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // تحديث روابط التنقل لتضمين lang
  const navLinks = document.querySelectorAll("a[href$='.html']");
  navLinks.forEach(link => {
    const url = new URL(link.href, window.location.origin);
    url.searchParams.set("lang", lang);
    link.href = url.pathname + "?lang=" + lang;
  });
}

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = getLangFromURL();
  document.getElementById("languageSwitcher").value = currentLang;
  applyTranslations(currentLang);

  // تغيير اللغة من القائمة
  document.getElementById("languageSwitcher").addEventListener("change", function () {
    const selectedLang = this.value;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", selectedLang);
    window.location.href = url.toString(); // يعيد تحميل الصفحة مع اللغة الجديدة
  });
});





document
  .getElementById("languageSwitcher")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[selectedLanguage][key]) {
        element.textContent = translations[selectedLanguage][key];
      }
    });
  });

let currentLanguage = 'en'; // Default language

// Function to change the language
function changeLanguage(language) {
  currentLanguage = language;
  renderContent();
}

// Function to render the content based on the current language
function renderContent() {
  document.getElementById('hero-title').innerText = translations[currentLanguage]['hero-title'];
  document.getElementById('hero-subtitle').innerText = translations[currentLanguage]['hero-subtitle'];
  document.getElementById('hero-cta').innerText = translations[currentLanguage]['hero-cta'];
  
  document.getElementById('about-title').innerText = translations[currentLanguage]['about-title'];
  document.getElementById('about-text').innerText = translations[currentLanguage]['about-text'];
  
  document.getElementById('experience-title').innerText = translations[currentLanguage]['experience-title'];
  
  // Loop through experiences
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`experience${i}`).innerText = translations[currentLanguage][`experience${i}`];
    document.getElementById(`experience${i}_text`).innerText = translations[currentLanguage][`experience${i}_text`];
    document.getElementById(`date${i}`).innerText = translations[currentLanguage][`date${i}`];
  }
}

// Event listeners for language buttons
document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
document.getElementById('lang-ar').addEventListener('click', () => changeLanguage('ar'));
document.getElementById('lang-fr').addEventListener('click', () => changeLanguage('fr'));
document.getElementById('lang-es').addEventListener('click', () => changeLanguage('es'));
document.getElementById('lang-de').addEventListener('click', () => changeLanguage('de'));

// Initial render
renderContent();
   
  
