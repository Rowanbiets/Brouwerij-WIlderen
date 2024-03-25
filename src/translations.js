// Import i18next and its plugins
// import i18next from "./node_modules/i18next/dist/esm/i18next.bundled.js";
// import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
console.log("i18next initialized");

import i18next from "i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
// import fs from "fs";
// import path from "path";

import enTranslations from "./locales/en.json";
import nlTranslations from "./locales/nl.json";
import frTranslations from "./locales/fr.json";
// Import other translations as needed

const resources = {
  en: { translation: enTranslations },
  nl: { translation: nlTranslations },
  fr: { translation: frTranslations },
  // Add other languages here
};

// i18next configuration
i18next
  .use(i18nextBrowserLanguageDetector) // Automatically detect user's language
  .init({
    // Path to translation files (not used without backend extension)
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json'
    // },
    // Default language
    resources,
    fallbackLng: "en",
    // Debug mode
    debug: true,
  });

function changeLanguage(lang, callback) {
  i18next.changeLanguage(lang, callback);
}

// Function to update the DOM with translations
function updateTranslations() {
  console.log(document.getElementById("production"));

// Nav
  document.getElementById("production").textContent = i18next.t("nav.0");
  document.getElementById("visit").textContent = i18next.t("nav.1");
  document.getElementById("horeca").textContent = i18next.t("nav.2");
  document.getElementById("fanpage").textContent = i18next.t("nav.3");
  document.getElementById("contact").textContent = i18next.t("nav.4");

// Index
document.getElementById("indexTitle").textContent = i18next.t("indexTitles.0");
document.getElementById("indexSubtitle").textContent = i18next.t("indexSubtitle");
document.querySelectorAll(".butt a").forEach((button) => {
  const key = button.dataset.translationKey; // Get the translation key from data attribute
  console.log(key);
  console.log(document.querySelectorAll(".butt a"))
  button.textContent = i18next.t(key);

});

document.getElementById("IndexBierenTitle").textContent = i18next.t("indexTitles.1");
document.querySelectorAll(".image-title").forEach((title) => {
  const key = title.dataset.translationKey; // Get the translation key from data attribute
  title.textContent = i18next.t(key);
});

document.getElementById("openingsurenTitle").textContent = i18next.t("indexTitles.5");



}
// en.translation[0].nav[0]
// Wait for i18next initialization to complete
i18next.init().then(() => {
  // Update translations initially
  updateTranslations();

  // Add event listeners to language toggle buttons
  document.getElementById("toggle-lang-nl").addEventListener("click", () => {
    console.log("test");

    changeLanguage("nl", () => {
      updateTranslations(); // Update translations after language change
    });
  });

  document.getElementById("toggle-lang-en").addEventListener("click", () => {
    changeLanguage("en", () => {
      updateTranslations(); // Update translations after language change
    });
  });

  document.getElementById("toggle-lang-fr").addEventListener("click", () => {
    changeLanguage("fr", () => {
      updateTranslations(); // Update translations after language change
    });
  });
});
