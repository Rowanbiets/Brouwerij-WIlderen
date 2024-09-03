//  ________________________________________________________________________
// #                                                                        #
// #              _____           _                 _  _____                #
// #              |_   _|         | |               | |/ ____|              #
// #                | |  _ __   __| | _____  __     | | (___                #
// #                | | | '_ \ / _` |/ _ \ \/ / _   | |\___ \               #
// #               _| |_| | | | (_| |  __/>  < | |__| |____) |              #
// #              |_____|_| |_|\__,_|\___/_/\_(_)____/|_____/               #
// #                                                                        #
// #       Global script that handles translations, SWUP transitions        #
// #                   and code for responsiveness (nav)                    #
// #                                                                        #
// #                   I18Next: https://www.i18next.com/                    #
// #                   SWUP: https://v3.swup.js.org/                        #
// #                                                                        #
// #                         [-> npm install ]                              #
// #                                                                        #
//  ________________________________________________________________________

// SWUP -> page:view event triggers every time a new page is loaded

import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";

// import SwupScriptsPlugin from "@swup/scripts-plugin";

// import scripts (used for executing after page transition)

import fetchOpeningsuren from "./openingsuren.js";
import addFooter from "./footer.js";
import fetchBeer from "./bieren.js";
import fetchSpirit from "./spirits.js";
import carousel from "./carousel.js";
import getEmailData from "./email.js";
import { getParamBeer } from "./bieren.js";
import { getParamSpirit } from "./spirits.js";

// import test from "../docs/testExport.bundle.js";

// import test from "./testExport.js";
// import test from "../docs/testExport.bundle.js";

const swup = new Swup({
  plugins: [
    new SwupHeadPlugin({
      awaitAssets: true,
    }),
    // new SwupScriptsPlugin(),
  ],
});

// swup.hooks.on("page:afterRender", () => {
//   init();
// });

function initCarousel() {
  $(".carousel").carousel(); // Use Bootstrap's carousel method provided by jQuery
}

// Run the script tags when Swup replaces the content
swup.hooks.on("content:replace", () => {
  // Manually load jQuery and Bootstrap's JavaScript libraries
  const jqueryScript = document.createElement("script");
  jqueryScript.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
  jqueryScript.onload = function () {
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
    bootstrapScript.onload = initCarousel; // Initialize the carousel after Bootstrap is loaded
    document.head.appendChild(bootstrapScript);
  };
  document.head.appendChild(jqueryScript);
});

if (document.readyState === "complete") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", () => init());
}

swup.hooks.on("page:view", () => {
  init();
});

function init() {
  // console.warn("INIT");
  reAddEventListeners();

  if (document.querySelector("footer")) {
    addFooter();
  }
  //  if transitioning to index
  if (document.querySelector(".index")) {
    carousel();
    // console.log("index");
  }

  if (
    document.querySelector(".cafeSwup") ||
    document.querySelector(".winkelSwup") ||
    document.querySelector(".index")
  ) {
    fetchOpeningsuren().then(() => {
      updateTranslations();
    });
  }

  if (document.querySelector("#horecaSwup")) {
    // console.log("EMAIL SCRIPT PRESENT");
    setTimeout(() => {
      // initCarousel();
    }, 5000);
    getEmailData();
  }

  if (document.querySelector(".bierDisplaySwup")) {
    // console.warn("FETCHING BIEREN");
    fetchBeer();
  }

  if (document.querySelector(".spiritDisplaySwup")) {
    // console.warn("FETCHING SPIRITS");
    fetchSpirit();
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
export function updateTranslations() {
  const beerIndex = getParamBeer();
  const spiritIndex = getParamSpirit();
  // console.warn(beerIndex);

  // beer translations
  document.querySelectorAll("[data-i18n-beer]").forEach((element) => {
    // console.log("element", element);
    const key = element.getAttribute("data-i18n-beer");
    // console.log("🚀 ~ document.querySelectorAll ~ key:", key);

    const selectedBeer = beerIndex;
    const beerKey = key.replace("{index}", selectedBeer);
    // console.log("beerKey", beerKey);
    element.innerHTML = i18next.t(beerKey);
  });

  // spirit translations
  document.querySelectorAll("[data-i18n-spirit]").forEach((element) => {
    // console.log("element", element);
    const key = element.getAttribute("data-i18n-spirit");
    // console.log("🚀 ~ document.querySelectorAll ~ key:", key);

    const selectedSpirit = spiritIndex;
    const spiritKey = key.replace("{index}", selectedSpirit);
    // console.log("spiritKey", spiritKey);
    element.innerHTML = i18next.t(spiritKey);
  });

  // console.warn("Translations updated");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(key);
  });

  if (document.querySelector("#horecaSwup")) {
    document
      .querySelector("#interest")
      .setAttribute("placeholder", i18next.t("contact.2"));
    document
      .querySelector("#message")
      .setAttribute("placeholder", i18next.t("contact.4"));
  }

  const toggleLangNl = document.querySelectorAll(".toggle-lang-nl");
  const toggleLangEn = document.querySelectorAll(".toggle-lang-en");
  const toggleLangFr = document.querySelectorAll(".toggle-lang-fr");

  if (i18next.language === "nl") {
    toggleLangEn.forEach((element) => {
      element.classList.remove("enabled");
    });
    toggleLangFr.forEach((element) => {
      element.classList.remove("enabled");
    });

    toggleLangNl.forEach((element) => {
      element.classList.add("enabled");
    });
  } else if (i18next.language === "en") {
    toggleLangNl.forEach((element) => {
      element.classList.remove("enabled");
    });
    toggleLangFr.forEach((element) => {
      element.classList.remove("enabled");
    });

    toggleLangEn.forEach((element) => {
      element.classList.add("enabled");
    });
  } else if (i18next.language === "fr") {
    toggleLangNl.forEach((element) => {
      element.classList.remove("enabled");
    });
    toggleLangEn.forEach((element) => {
      element.classList.remove("enabled");
    });

    toggleLangFr.forEach((element) => {
      element.classList.add("enabled");
    });
  }

  // if (i18next.language === "nl") {
  //   document.querySelector(".toggle-lang-nl").classList.add("enabled");
  //   document.querySelector(".toggle-lang-en").classList.remove("enabled");
  //   document.querySelector(".toggle-lang-fr").classList.remove("enabled");
  // } else if (i18next.language === "en") {
  //   document.querySelector(".toggle-lang-nl").classList.remove("enabled");
  //   document.querySelector(".toggle-lang-en").classList.add("enabled");
  //   document.querySelector(".toggle-lang-fr").classList.remove("enabled");
  // } else if (i18next.language === "fr") {
  //   document.querySelector(".toggle-lang-nl").classList.remove("enabled");
  //   document.querySelector(".toggle-lang-en").classList.remove("enabled");
  //   document.querySelector(".toggle-lang-fr").classList.add("enabled");
  // }

  // document.querySelector("enabled").style.backgroundColor = "red";
}

// add event listeners back to the hamburger menu lang buttons
// (they are removed by swup transitions => base nav doesn not get reloaded, hamburger does, hence the need to readd event listeners)
function reAddEventListeners() {
  // console.warn("Readding event listeners");
  const toggleLangNl = document.querySelectorAll(".toggle-lang-nl");
  const toggleLangEn = document.querySelectorAll(".toggle-lang-en");
  const toggleLangFr = document.querySelectorAll(".toggle-lang-fr");
  // console.log("🚀 ~ reAddEventListeners ~ toggleLangFr:", toggleLangFr);
  // console.log(toggleLangFr[1]);
  toggleLangFr.innerHTML = "WJW WJW";
  toggleLangNl[2].addEventListener("click", () => {
    i18next.changeLanguage("nl", updateTranslations);
  });

  toggleLangFr[2].addEventListener("click", () => {
    i18next.changeLanguage("nl", updateTranslations);
  });

  toggleLangEn[2].addEventListener("click", () => {
    i18next.changeLanguage("nl", updateTranslations);
  });

  // console.log(toggleLangNl[1]);
}

// Update translations initially
updateTranslations();

const toggleLangNl = document.querySelectorAll(".toggle-lang-nl");
const toggleLangEn = document.querySelectorAll(".toggle-lang-en");
const toggleLangFr = document.querySelectorAll(".toggle-lang-fr");

toggleLangNl.forEach((element) => {
  element.addEventListener("click", () => {
    i18next.changeLanguage("nl", updateTranslations);
  });
});
toggleLangFr.forEach((element) => {
  element.addEventListener("click", () => {
    i18next.changeLanguage("nl", updateTranslations);
  });
});
toggleLangEn.forEach((element) => {
  element.addEventListener("click", () => {
    i18next.changeLanguage("nl", updateTranslations);
  });
});
// reAddEventListeners();
// // Add event listeners to language toggle buttons
// document.querySelector(".toggle-lang-nl").addEventListener("click", () => {
//   i18next.changeLanguage("nl", updateTranslations);
// });

// document.querySelector(".toggle-lang-en").addEventListener("click", () => {
//   i18next.changeLanguage("en", updateTranslations);
// });
// // document.querySelector
// document.querySelector(".toggle-lang-fr").addEventListener("click", () => {
//   i18next.changeLanguage("fr", updateTranslations);
// });

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
  // console.warn("New page loaded:");
  applySavedLanguage();
  hamburgerToggle();
  updateTranslations();
});

function indexSlideShow() {
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

function hamburgerToggle() {
  const toggleHamburgerMenu = document.querySelector("#toggleHamburgerMenu");

  toggleHamburgerMenu.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("showHamburger");
    document.querySelector(".hamburger").classList.toggle("display");
    toggleHamburgerMenu.classList.toggle("absolute");
    const hamburgerLines = document.querySelectorAll(
      "#toggleHamburgerMenu > span"
    );
    hamburgerLines.forEach((line) => {
      line.classList.toggle("activeLine");
    });

    hamburgerLines[0].classList.toggle("activeLine1");
    hamburgerLines[1].classList.toggle("activeLine2");
    hamburgerLines[2].classList.toggle("activeLine3");

    // console.log("hamburgerToggle");
  });

  const hamButtons = document.querySelectorAll(".hamButton");
  const hamlus = document.querySelectorAll(".hamul");

  // TODO: refactor this to be more DRY

  hamButtons[0].addEventListener("click", () => {
    hamlus[0].classList.toggle("active");
    hamlus[1].classList.remove("active");
    hamlus[2].classList.remove("active");
    // ----------------
    hamButtons[0].classList.toggle("active");
    hamButtons[1].classList.remove("active");
    hamButtons[2].classList.remove("active");
  });
  hamButtons[1].addEventListener("click", () => {
    hamlus[1].classList.toggle("active");
    hamlus[0].classList.remove("active");
    hamlus[2].classList.remove("active");
    // ----------------

    hamButtons[1].classList.toggle("active");
    hamButtons[0].classList.remove("active");
    hamButtons[2].classList.remove("active");
  });

  hamButtons[2].addEventListener("click", () => {
    hamlus[2].classList.toggle("active");
    hamlus[0].classList.remove("active");
    hamlus[1].classList.remove("active");
    // ----------------

    hamButtons[2].classList.toggle("active");
    hamButtons[0].classList.remove("active");
    hamButtons[1].classList.remove("active");
  });
}

// // Functie om de link en tekst aan te passen op basis van het schermformaat
// function adjustLinkAndText() {
//   // Controleer de schermgrootte
//   if (window.innerWidth <= 768) {
//     // Verander de href naar een andere pagina voor mobiel
//     document.getElementById("page-link").href = "horeca.html";
//     // Verander de afbeeldingsbron voor mobiel
//     document.querySelector(".image-wrapper img").src =
//       "WEBSITE/Brouwerij Vroeger en Nu/DSC_3988.JPG";
//     // Verander de tekst naar "Horeca" voor mobiel
//     document.querySelector(".image-title").innerText = "Horeca";
//   } else {
//     // Verander de href naar de oorspronkelijke pagina voor desktop
//     document.getElementById("page-link").href = "vroeger&nu.html";
//     // Verander de afbeeldingsbron naar de desktopversie
//     document.querySelector(".image-wrapper img").src =
//       "WEBSITE/wetransfer_UNIEKE OUDE FOTOS Wilderen_2022-03-15_1008/wilderen oud034.jpg";
//     // Verander de tekst naar "Vroeger en Nu" voor desktop
//     document.querySelector(".image-title").innerText = "Vroeger en Nu";
//   }
// }

// // Roept de functie aan wanneer de pagina wordt geladen
// window.onload = adjustLinkAndText;

// // Roept de functie aan wanneer het schermformaat wordt gewijzigd
// window.onresize = adjustLinkAndText;

function checkAgeAndLang() {
  const ageButton = document.querySelectorAll(".ageButton");
  const ageCheck = document.querySelector(".ageCheck");
  const imageAgeBG = document.querySelector(".imageAgeBG");
  const body = document.querySelector("body");

  if (localStorage.getItem("age") !== "true") {
    ageCheck.classList.remove("hide");
    imageAgeBG.classList.remove("hide");
    // console.error("age not set");
    // body.classList.add("noScroll");
    body.style.overflow = "hidden";
    // console.log(body);
  }

  ageButton.forEach((element) => {
    element.addEventListener("click", () => {
      localStorage.setItem("age", "true");
      // console.log("age set");
      ageCheck.classList.add("lowerOpacity");
      imageAgeBG.classList.add("lowerOpacity");
      body.style.overflow = "auto";
      setTimeout(() => {
        ageCheck.classList.add("hide");
        imageAgeBG.classList.add("hide");
      }, 500);
    });
  });
  // console.log(ageButton);
}

hamburgerToggle();
checkAgeAndLang();
// fetchBeer();
window.addEventListener("popstate", () => {
  // console.error("popstate");
  fetchBeer();
});
