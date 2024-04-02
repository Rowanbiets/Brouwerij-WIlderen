//  ________________________________________________________________________
// #                                                                        #
// #              _____           _                 _  _____                #
// #              |_   _|         | |               | |/ ____|              #
// #                | |  _ __   __| | _____  __     | | (___                #
// #                | | | '_ \ / _` |/ _ \ \/ / _   | |\___ \               #
// #               _| |_| | | | (_| |  __/>  < | |__| |____) |              #
// #              |_____|_| |_|\__,_|\___/_/\_(_)____/|_____/               #
// #                                                                        #
// #       Global script that handles translations and SWUP transitions     #
// #                   I18Next: https://www.i18next.com/                    #
// #                   SWUP: https://v3.swup.js.org/                        #
// #                                                                        #
// #                         [-> npm install ]                              #
// #                                                                        #
//  ________________________________________________________________________





// SWUP -> page:view event trigger every time a new page is loaded

import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupScriptsPlugin from "@swup/scripts-plugin";

// import scripts (used for executing after page transition)

import fetchOpeningsuren from "./openingsuren.js";
// import test from "../docs/testExport.bundle.js";

// import test from "./testExport.js";
// import test from "../docs/testExport.bundle.js";

const swup = new Swup({
  plugins: [
    new SwupHeadPlugin({
      awaitAssets: true,
    }),
    new SwupScriptsPlugin(),
  ],
});

swup.hooks.on("page:view", () => {
  init();

  // console.warn("swup:view");
});

function init() {
  //  if transitioning to index
  if (document.querySelector(".index")) {
    fetchOpeningsuren();
    console.log("index");
    indexSlideShow();
  }
}

import i18next from "i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslations from "../docs/locales/en.json";
import nlTranslations from "../docs/locales/nl.json";
import frTranslations from "../docs/locales/fr.json";

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

  if (i18next.language === "nl") {
    document.getElementById("toggle-lang-nl").classList.add("enabled");
    document.getElementById("toggle-lang-en").classList.remove("enabled");
    document.getElementById("toggle-lang-fr").classList.remove("enabled");
  } else if (i18next.language === "en") {
    document.getElementById("toggle-lang-nl").classList.remove("enabled");
    document.getElementById("toggle-lang-en").classList.add("enabled");
    document.getElementById("toggle-lang-fr").classList.remove("enabled");
  } else if (i18next.language === "fr") {
    document.getElementById("toggle-lang-nl").classList.remove("enabled");
    document.getElementById("toggle-lang-en").classList.remove("enabled");
    document.getElementById("toggle-lang-fr").classList.add("enabled");
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

function indexSlideShow(){
    document.querySelector(".overlay").classList.add("show");



    var images = [
      "WEBSITE/Wilderen/Wilderen Sfeerbeeld.jpg",
      "WEBSITE/Brouwerijcaf‚/Geestrijk-4138-0811.jpg ",
    ]; // Voeg hier de paden toe van de afbeeldingen die je wilt laten zien
    var currentImageIndex = 0;
    var slideshowImage = document.getElementById("slideshow-image");

    setInterval(function () {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      slideshowImage.src = images[currentImageIndex];
    }, 10000); // Verander elke 10 seconden (10000 milliseconden)
}