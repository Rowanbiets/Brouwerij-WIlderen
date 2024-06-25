"use strict";

import SwipeListener from "swipe-listener";
import { updateTranslations } from "./index.js";

// deze madness is nodig om elementen te selecteren na de transitie animatie (Swup)
let beerName,
  beerTagline,
  beerDescription,
  beerInfo,
  beerImage,
  beerLogo,
  colors,
  buyButton,
  neonborder,
  root,
  beerBackground,
  navLogo,
  nav,
  awards,
  radios,
  rightArrow,
  leftArrow,
  form;

function initDom() {
  // select all needed elements
  beerName = document.getElementById("beerName");
  beerTagline = document.getElementById("beerTagLine");
  beerDescription = document.getElementById("beerDescription");
  beerInfo = document.getElementById("beerInfo");
  beerImage = document.getElementById("bierImg");
  beerLogo = document.getElementById("beerLogo");
  colors = document.querySelectorAll(".themed");
  buyButton = document.querySelector(".buy-button2");
  neonborder = document.querySelector(".imgBorder");
  root = document.querySelector(":root");
  beerBackground = document.querySelector(".beerBackground");
  navLogo = document.querySelector(".logo");
  nav = document.querySelectorAll("nav > ul >  li  > a");
  awards = document.querySelector(".awards");
  radios = document.querySelectorAll("input[type='radio']");
  rightArrow = document.getElementById("arrowRight");
  leftArrow = document.getElementById("arrowLeft");
  form = document.querySelector("form");
}

let beer = 0;
let allBeer = [];
const bierNames = [
  "tripel-kanunnik",
  "betty-ford",

  "wilderen-goud",

  "cuvee-clarisse",
  "whiskey-infused",
  "rum-infused",
  "kriek",
  "clarrise-rouge",
];

const textShadowNeeded = [2];

export default function fetchBeer() {
  initDom();
  // console.log("fetching beer data");
  // console.log("elements exist?", beerName);
  fetch("data/beerData.json")
    .then((response) => response.json())
    .then((data) => {
      // showData(data);
      allBeer = data;
      renderBeer(data, getParamBeer());
      console.log(data);
      buttonClick();
      handleRadio();
      radioClick();
      swipe();
      //       buttonClick();
      // handleRadio();
      // radioClick();
    });
}

export function getParamBeer() {
  // zoek de biernaam op in de url -> ?beer=""
  // selecteer de array index op basis van de naam
  const bierParams = new URLSearchParams(window.location.search).get("beer");
  const bierIndex = bierNames.indexOf(bierParams);
  console.log(bierIndex);
  console.log(bierParams);
  return bierIndex;
}

// const questionLang = new URLSearchParams(window.location.search).get(
//   "taal"
// );

// function radioPlacement(){
//   const body = document.querySelector("body");
//   if(window.innerWidth <= 768){
//   body.removeAttribute(form);
// console.warn("form removed");
//     beerTagline.insertAdjacentHTML("afterend", form.outerHTML);
//   } else{
// console.warn("form is already in place");
//   }
// }

// window.addEventListener("resize", radioPlacement);

function renderBeer(data, beer) {
  // beerTagline.inserAdjecentHTML("afterend", form)
  // console.warn(form);

  // console.warn("🚀 ~ renderBeer ~ beer", beer);
  // Verander thema kleur (zie css variabelen in bierDisplay.css)
  root.style.setProperty("--themeColor", data[beer].themeColor);
  // neonborder.style.filter = `drop-shadow(0 0 0.75rem ${data[beer].neonColor})`;

  if (data[beer].awards) {
    awards.innerHTML = "";
    // awards.innerHTML = `<h2>-Awards-</h2>`;
    data[beer].awards.forEach((award) => {
      awards.innerHTML += `<li> <img src="${award}" alt="award"></li>`;
    });
  } else {
    awards.innerHTML = "";
  }

  // veranderd de styling van het logo wanner het het wilderen logo is
  if (data[beer].beerLogo == "WEBSITE/Logo/Wilderen Logo 2020.png") {
    beerLogo.style.border = "none";
    beerLogo.style.borderRadius = "0";
    beerLogo.style.height = "50%";
    // beerLogo.style.transform = "translate(0%, -100%)";
  } else {
    // beerLogo.style.border = `5px solid ${data[beer].themeColor}`;
  }
  if (data[beer].beerLogo == "") {
    beerLogo.style.display = "none";
    beerLogo.style.display = "none";
  } else {
    beerLogo.style.display = "block";
  }

  if (data[beer].id == 5 || data[beer].id == 6) {
    beerName.style.fontSize = "1.5rem";
  } else {
    beerName.style.fontSize = "2rem";
  }

  beerLogo.src = data[beer].beerLogo;
  if (data[beer].buyname) {
    buyButton.innerHTML = `Koop ${data[beer].buyname}`;
  } else {
    buyButton.innerHTML = "Online bestellen";
  }
  colors.forEach((color) => {
    color.style.borderColor = data[beer].themeColor;
  });

  buyButton.href = data[beer].buyLink;
  console.warn(data[beer].beerTagline);
  console.warn(data[beer]);
  beerName.innerHTML = data[beer].beerName;
  beerTagline.innerHTML = data[beer].beerTagline;
  beerDescription.innerHTML = data[beer].beerDescription;
  console.warn(beerTagline.innerHTML);

  beerInfo.innerHTML = "";
  // media query voor de achtergrond van de bieren
  if (window.innerWidth <= 768) {
    beerBackground.src = data[beer].beerBGMobile;
  } else {
    beerBackground.src = data[beer].beerBG;
  }
  console.log("🚀 ~ renderBeer ~ beerBackground:", beerBackground);
  console.error(data[beer]);
  data[beer].beerInfo.forEach((beer) => {
    beerInfo.innerHTML += `<li>${beer}</li>`;
  });

  // beerImage.src = data[beer].beerImg;
  beerLogo.innerHTML = data[beer].logo;
  if (textShadowNeeded.includes(data[beer].id)) {
    // beerName.style.color = "black";
    beerTagline.style.textShadow = "0 1px 5px black";
    beerDescription.style.textShadow = "0 1px 5px black";
    beerInfo.style.textShadow = "0 1px 5px black";

    // navLogo.src = "WEBSITE/Logo/LOGO W 2020BW.png";
    nav.forEach((navItem) => {
      navItem.style.textShadow = "0 1px 5px black";
      navItem.style.textShadow = "0 1px 5px black";
    });
    // buyButton.style.color = "black";
  } else {
    // beerName.style.color = "white";
    beerTagline.style.color = "white";
    beerDescription.style.color = "white";
    beerInfo.style.color = "white";
    navLogo.src = "WEBSITE/Logo/DISTILLEERDERIJ BROUWERIJ LOGO.png";
    nav.forEach((navItem) => {
      navItem.style.color = "white";
      navItem.style.textShadow = "#333333 1px 1px 1px";
    });
    // buyButton.style.color = "white";
  }

  if (getParamBeer() == 0) {
    // console.warn("🚀 ~ renderBeer ~ getParamBeer():", getParamBeer());

    leftArrow.style.display = "none";
    rightArrow.style.display = "block";
  } else if (getParamBeer() == allBeer.length - 1) {
    rightArrow.style.display = "none";
    leftArrow.style.display = "block";
  } else {
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  }

  // console.warn("🚀 ~ renderBeer ~ getParamBeer():", getParamBeer());
  // return arrary index for transitions
  updateTranslations();
  return getParamBeer();
}

const beerNameTitle = document.getElementById("beerName");

function buttonClick() {
  leftArrow.addEventListener("click", function () {
    moveLeft();
  });
  rightArrow.addEventListener("click", function () {
    moveRight();
  });
}

function updateParams(param) {
  const bierIndex = bierNames[param];
  history.pushState(null, null, `?beer=${bierIndex}`);
}

function handleRadio() {
  // console.log("TEESTING");
  // console.log(getParamBeer());
  // getParamBeer();
  const radios = document.querySelectorAll("input[type='radio']");
  // console.log(radios);
  radios[getParamBeer()].checked = true;
}

function radioClick() {
  // console.error(beerName);
  const form = document.querySelector("form");

  form.addEventListener("change", function (event) {
    // console.log(event.target.id);
    const bierIndex = bierNames.indexOf(event.target.id);
    updateParams(bierIndex);
    renderBeer(allBeer, getParamBeer());
    handleRadio();
  });
}

function moveLeft() {
  if (getParamBeer() > 0) {
    // beerNameTitle.style.transform = "scaleX(0)";

    beer--;
    updateParams(getParamBeer() - 1);
    renderBeer(allBeer, getParamBeer());
    handleRadio();
    updateTranslations();
  }
}
function moveRight() {
  if (getParamBeer() < allBeer.length - 1) {
    // beerNameTitle.style.transform = "scaleX(0)";

    beer++;
    updateParams(getParamBeer() + 1);
    renderBeer(allBeer, getParamBeer());
    handleRadio();
    updateTranslations();
  }
}

function swipe() {
  const container = document.querySelector(".position-relative");
  var listener = SwipeListener(container);
  container.addEventListener("swipe", function (e) {
    var directions = e.detail.directions;
    var x = e.detail.x;
    var y = e.detail.y;

    if (directions.left) {
      moveRight();

      // console.log("Swiped left.");
    }

    if (directions.right) {
      // console.log("Swiped right.");
      moveLeft();
    }

    // console.log("Started horizontally at", x[0], "and ended at", x[1]);
    // console.log("Started vertically at", y[0], "and ended at", y[1]);
  });
}

// fetchBeer();
// buttonClick();
// handleRadio();
// radioClick();

// this is globally available
// const selector = document.querySelector(".selector");

// export default function example(){
// this won't work for some reason with swup
//   selector.src ="img/selector.png"

// this will work with swup for some reason
//   document.querySelector(".selector").src = "img/selector.png";
// }
