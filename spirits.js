"use strict";

let spirit = 0;
let allSpirits = [];
const spiritNames = [
  "double-you-gin",
  "double-you-gin-vanille",
  "ocus-organic-gin",
  "omerta-rum-liquor",
  "omerta-black-magnum",
  "wild-weasle-whiskey",
  "wiggle-red-fruits-apero",
  "wilderen-graanjenever",
  "eau-de-biere",
];

const spiritName = document.getElementById("spiritName");
const spiritTagline = document.getElementById("spiritTagLine");
const spiritDescription = document.getElementById("spiritDescription");
const spiritInfo = document.getElementById("spiritInfo");
const spiritImage = document.getElementById("spiritImage");
const spiritLogo = document.getElementById("spiritLogo");
const colors = document.querySelectorAll(".themed");
const buyButton = document.querySelector(".buy-button2");
const neonborder = document.querySelector(".imgBorder");
const root = document.querySelector(":root");
const spiritBackground = document.querySelector(".spiritBackground");
// const nav = document.querySelectorAll("nav ul li");

const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");

function getParamSpirit() {
  // zoek de spiritnaam op in de url -> ?spirit=""
  // selecteer de array index op basis van de naam
  const spiritParams = new URLSearchParams(window.location.search).get(
    "spirit"
  );

  const spiritIndex = spiritNames.indexOf(spiritParams);

  return spiritIndex;
}

function fetchSpirits() {
  fetch("data/spiritData.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allSpirits = data;
      console.log(data);
      renderSpirits(data, getParamSpirit());
    });
}

function renderSpirits(data, spirit) {
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
  } else if (getParamSpirit() == allSpirits.length - 1) {
    rightArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  }

  console.log(data[spirit].id);
  if (data[spirit].id == 6 || data[spirit].id == 8) {
    spiritDescription.style.color = "black";
    buyButton.style.color = "black";
    buyButton.style.backgroundcolor = "red";

    spiritTagline.style.color = "black ";
  } else {
    spiritDescription.style.color = "white";
    buyButton.style.color = "white";
    spiritTagline.style.color = "white";
  }
}

function buttonClick() {
  leftArrow.addEventListener("click", function () {
    if (getParamSpirit() > 0) {
      spirit--;
      updateParams(getParamSpirit() - 1);
      renderSpirits(allSpirits, getParamSpirit());
      handleRadio();
    }
  });
  rightArrow.addEventListener("click", function () {
    if (getParamSpirit() < allSpirits.length - 1) {
      spirit++;
      updateParams(getParamSpirit() + 1);
      renderSpirits(allSpirits, getParamSpirit());
      handleRadio();
    }
  });
}

function updateParams(param) {
  const spiritIndex = spiritNames[param];
  history.pushState(null, null, `?spirit=${spiritIndex}`);
}

function handleRadio(){
  console.log(getParamSpirit());
  // getParamSpirit();
  const radios = document.querySelectorAll("input[type='radio']");
  console.log(radios);
  radios[getParamSpirit()].checked = true;
}

function radioClick() {

  const form = document.querySelector("form");

form.addEventListener("change", function (event) {
console.log(event.target.id)
  const bierIndex = spiritNames.indexOf(event.target.id);
  updateParams(bierIndex);
  renderSpirits(allSpirits, getParamSpirit());
  handleRadio();
});
}

fetchSpirits();
buttonClick();
radioClick();
handleRadio();
