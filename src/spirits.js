"use strict";
import SwipeListener from "swipe-listener";
import { updateTranslations } from "./index.js";


// deze madness is nodig om elementen te selecteren na de transitie animatie (Swup)
let spiritName,
  spiritTagline,
  spiritDescription,
  spiritInfo,
  spiritImage,
  spiritLogo,
  colors,
  buyButton,
  neonborder,
  root,
  spiritBackground,
  navLogo,
  nav,
  awards,
  rightArrow,
  leftArrow;


  function initDom() {
    spiritName = document.getElementById("spiritName");
    spiritTagline = document.getElementById("spiritTagLine");
    spiritDescription = document.getElementById("spiritDescription");
    spiritInfo = document.getElementById("spiritInfo");
    spiritImage = document.getElementById("spiritImage");
    spiritLogo = document.getElementById("spiritLogo");
    colors = document.querySelectorAll(".themed");
    buyButton = document.querySelector(".buy-button2");
    neonborder = document.querySelector(".imgBorder");
    root = document.querySelector(":root");
    spiritBackground = document.querySelector(".spiritBackground");
    navLogo = document.querySelector(".logo");
    nav = document.querySelectorAll("nav > ul >  li  > a");
    awards = document.querySelector(".awards");
    leftArrow = document.getElementById("arrowLeft");
    rightArrow = document.getElementById("arrowRight");
  }

let spirit = 0;
let allSpirits = [];
const spiritNames = [
  "double-you-gin",
  "double-you-gin-vanille",
  "ocus-organic-gin",
  "omerta-rum-liquor",
  "omerta-black-magnum",
  "wild-weasel-cask-strength",
  "wild-weasel-finest-blend",
  "wild-weasel-single-malt-single-cask",
  "wiggle-red-fruits-apero",
  "wilderen-graanjenever",
  "eau-de-biere",
];

const blackTextNeeded = [3];



export function getParamSpirit() {
  // zoek de spiritnaam op in de url -> ?spirit=""
  // selecteer de array index op basis van de naam
  const spiritParams = new URLSearchParams(window.location.search).get(
    "spirit"
  );

  const spiritIndex = spiritNames.indexOf(spiritParams);

  return spiritIndex;
}

export default function fetchSpirits() {
  initDom();
  fetch("data/spiritData.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allSpirits = data;
      console.log(data);
      renderSpirits(data, getParamSpirit());
      buttonClick();
      handleRadio();
      radioClick();
      swipe();
    });
}

function renderSpirits(data, spirit) {
  //   setTimeout(function() {
  //     spiritBackground.style.transition = '';
  // }, 500); // Adjust delay as needed

  // // Fade in the image after a short delay
  // setTimeout(function() {
  //     spiritBackground.style.opacity = 1;
  // }, 500); // Adjust delay as needed
  if (data[spirit].awards) {
    awards.innerHTML = "";
    // awards.innerHTML = `<h2>-Awards-</h2>`;
    data[spirit].awards.forEach((award) => {
      awards.innerHTML += `<li> <img src="${award}" alt="award"></li>`;
    });
  } else {
    awards.innerHTML = "";
  }

  // spiritLogo.src = data[spirit].spiritLogo;
  root.style.setProperty("--themeColor", data[spirit].themeColor);
  // neonborder.style.filter = `drop-shadow(0 0 0.75rem ${data[spirit].neonColor})`;
  console.log(data[spirit]);
  buyButton.innerHTML = `Koop ${data[spirit].buyname}`;
  colors.forEach((color) => {
    color.style.borderColor = data[spirit].themeColor;
  });

  spiritName.innerHTML = data[spirit].spiritName;
  spiritTagline.innerHTML = data[spirit].spiritTagLine;
  spiritDescription.innerHTML = data[spirit].spiritDescription;
  buyButton.href = data[spirit].buyLink;

  console.log(spirit);
  spiritBackground.src = data[spirit].spiritBG;
  console.log(data[spirit].spiritBG);
  // spiritImage.src = data[spirit].spiritImg;

  if (data[spirit].id == null) {
    spiritName.style.fontSize = "1.5rem";
  } else {
    spiritName.style.fontSize = "2rem";
  }
  if (getParamSpirit() == 0) {
    leftArrow.style.display = "none";
    rightArrow.style.display = "block";
  } else if (getParamSpirit() == allSpirits.length - 1) {
    rightArrow.style.display = "none";
    leftArrow.style.display = "block";
  } else {
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  }

  console.log(data[spirit].id);
  if (data[spirit].id == "none") {
    spiritDescription.style.color = "black";
    buyButton.style.color = "black";
    buyButton.style.backgroundcolor = "red";

    spiritTagline.style.color = "black ";
  } else {
    spiritDescription.style.color = "white";
    buyButton.style.color = "white";
    spiritTagline.style.color = "white";
  }

  console.log(
    "the spirit id is " + data[spirit].id,
    "and array has " + blackTextNeeded[0]
  );
  console.log(typeof data[spirit].id);
  console.log(typeof blackTextNeeded[0]);

  console.log(data[spirit].id);
  console.log(blackTextNeeded.includes(data[spirit].id));
  console.log("🚀 ~ renderSpirits ~ blackTextNeeded:", blackTextNeeded);

  if (blackTextNeeded[1] == data[spirit].id) {
    console.log("black");
    // beerName.style.color = "black";
    spiritTagline.style.color = "black";
    spiritDescription.style.color = "black";

    navLogo.src = "WEBSITE/Logo/LOGO W 2020BW.png";
    nav.forEach((navItem) => {
      navItem.style.color = "black";
      navItem.style.textShadow = "none";
    });
    // buyButton.style.color = "black";
  } else {
    // spiritName.style.color = "white";
    spiritTagline.style.color = "white";
    spiritDescription.style.color = "white";
    navLogo.src = "WEBSITE/Logo/DISTILLEERDERIJ BROUWERIJ LOGO.png";
    nav.forEach((navItem) => {
      navItem.style.color = "white";
      navItem.style.textShadow = "#333333 1px 1px 1px";
    });
    // buyButton.style.color = "white";
  }

  // Toon logo als deze bestaat anders niet
  if (data[spirit].logo) {
    spiritLogo.src = data[spirit].logo;
    spiritLogo.style.display = "block";
  } else {
    spiritLogo.style.display = "none";
  }

  // wild whiskey logo
  if (
    data[spirit].id == "6" ||
    data[spirit].id == "7" ||
    data[spirit].id == "8"
  ) {
    spiritLogo.style.filter = "drop-shadow(0px 0px 5px #fff)";
    console.warn("wild whiskey logo");
  } else {
    spiritLogo.style.filter = "none";
  }

  updateTranslations();
}

function buttonClick() {
  leftArrow.addEventListener("click", function () {
moveLeft();
  });
  rightArrow.addEventListener("click", function () {
moveRight();
  });
}

function updateParams(param) {
  const spiritIndex = spiritNames[param];
  history.pushState(null, null, `?spirit=${spiritIndex}`);
}

function handleRadio() {
  console.log(getParamSpirit());
  console.error("test");
  // getParamSpirit();
  const radios = document.querySelectorAll("input[type='radio']");
  console.log(radios);
  radios[getParamSpirit()].checked = true;
  console.warn("🚀 ~ handleRadio ~ getParamSpirit():", getParamSpirit());
}

function radioClick() {
  const form = document.querySelector("form");

  form.addEventListener("change", function (event) {
    console.warn(event.target.id);
    const bierIndex = spiritNames.indexOf(event.target.id);
    updateParams(bierIndex);
    renderSpirits(allSpirits, getParamSpirit());
    handleRadio();
  });
}


function moveLeft(){
      // spiritBackground.style.opacity = 0;

      if (getParamSpirit() > 0) {
        spirit--;
        updateParams(getParamSpirit() - 1);
        renderSpirits(allSpirits, getParamSpirit());
        handleRadio();
        updateTranslations();
      }
}
function moveRight(){
      // spiritBackground.style.transition = 'none';
    // spiritBackground.style.opacity = 0;

    if (getParamSpirit() < allSpirits.length - 1) {
      spirit++;
      updateParams(getParamSpirit() + 1);
      renderSpirits(allSpirits, getParamSpirit());
      handleRadio();
      updateTranslations();
    }
}


function swipe(){
  const container = document.querySelector(".position-relative");
  var listener = SwipeListener(container);
  container.addEventListener("swipe", function (e) {
    var directions = e.detail.directions;
    var x = e.detail.x;
    var y = e.detail.y;

    if (directions.left) {
      moveRight();

      console.log("Swiped left.");
    }

    if (directions.right) {
      console.log("Swiped right.");
      moveLeft();
    }

    console.log("Started horizontally at", x[0], "and ended at", x[1]);
    console.log("Started vertically at", y[0], "and ended at", y[1]);
  });
}

// fetchSpirits();
// buttonClick();
// radioClick();
// handleRadio();
