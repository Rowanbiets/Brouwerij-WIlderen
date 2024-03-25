// Import i18next and its plugins
// import i18next from "./node_modules/i18next/dist/esm/i18next.bundled.js";
// import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const i18next = require("i18next");
const i18nextBrowserLanguageDetector = require("i18next-browser-languagedetector");

// i18next configuration
use(i18nextBrowserLanguageDetector) // Automatically detect user's language
  .init({
    // Path to translation files (not used without backend extension)
    // backend: {
    //   loadPath: '/locales/{{lng}}/{{ns}}.json'
    // },
    // Default language
    fallbackLng: "en",
    // Debug mode
    debug: true,
  });

// Function to update the DOM with translations
function updateTranslations() {
  document.getElementById("welcome").textContent = i18next.t("welcome");
  document.getElementById("about-us").textContent = i18next.t("aboutUs");
  document.getElementById("contact-us").textContent = i18next.t("contactUs");
}

// Wait for i18next initialization to complete
init().then(() => {
  // Update translations initially
  updateTranslations();

  // Add event listeners to language toggle buttons
  document.getElementById("toggle-lang-nl").addEventListener("click", () => {
    changeLanguage("nl", () => {
      console.log("test")
      updateTranslations(); // Update translations after language change
    });
  });

  document.getElementById("toggle-lang-en").addEventListener("click", () => {
    changeLanguage("en", () => {
      updateTranslations(); // Update translations after language change
    });
  });
});
