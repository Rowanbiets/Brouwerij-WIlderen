import i18next from "i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslations from "../docs/locales/en.json";
import nlTranslations from "../docs/locales/nl.json";
import frTranslations from "../docs/locales/fr.json";

import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";

const swup = new Swup({
  plugins: [new SwupHeadPlugin()],
});
new SwupHeadPlugin({
  awaitAssets: true,
});

// Define resources
const resources = {
  en: { translation: enTranslations },
  nl: { translation: nlTranslations },
  fr: { translation: frTranslations },
};

// Initialize i18next with language detection
i18next.use(i18nextBrowserLanguageDetector).init({
  resources,
  fallbackLng: "en",
  debug: true,
});

// Function to update translations
function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(key);
    
  });

  if(i18next.language === "nl") {
    document.getElementById("toggle-lang-nl").classList.add("enabled")
    document.getElementById("toggle-lang-en").classList.remove("enabled")
    document.getElementById("toggle-lang-fr").classList.remove("enabled")
  } else if(i18next.language === "en") {
    document.getElementById("toggle-lang-nl").classList.remove("enabled")
    document.getElementById("toggle-lang-en").classList.add("enabled")
    document.getElementById("toggle-lang-fr").classList.remove("enabled")
  } else if(i18next.language === "fr") {
    document.getElementById("toggle-lang-nl").classList.remove("enabled")
    document.getElementById("toggle-lang-en").classList.remove("enabled")
    document.getElementById("toggle-lang-fr").classList.add("enabled")
  }

  // document.querySelector("enabled").style.backgroundColor = "red";
}

// Update translations initially
updateTranslations();

// Add event listeners to language toggle buttons
document.getElementById("toggle-lang-nl").addEventListener("click", () => {
  i18next.changeLanguage("nl", updateTranslations);
});

document.getElementById("toggle-lang-en").addEventListener("click", () => {
  i18next.changeLanguage("en", updateTranslations);
});

document.getElementById("toggle-lang-fr").addEventListener("click", () => {
  i18next.changeLanguage("fr", updateTranslations);
});

// When the page loads or content is replaced by swup,
// check if there's a language saved in local storage
// If so, set i18next to use that language and update translations
const applySavedLanguage = () => {
  const savedLanguage = localStorage.getItem("i18nextLng");
  if (savedLanguage) {
    i18next.changeLanguage(savedLanguage, updateTranslations);

  }
};

swup.hooks.on("page:view", () => {
  console.warn("New page loaded:");
  applySavedLanguage();
});
