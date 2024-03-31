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

 const blackTextNeeded =['6'];

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
const navLogo = document.querySelector(".logo");
const nav = document.querySelectorAll("nav > ul >  li  > a");
const awards = document.querySelector(".awards");

console.log("🚀 ~ nav:", nav);
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
  if (data[spirit].id == 6) {
    spiritDescription.style.color = "black";
    buyButton.style.color = "black";
    buyButton.style.backgroundcolor = "red";

    spiritTagline.style.color = "black ";
  } else {
    spiritDescription.style.color = "white";
    buyButton.style.color = "white";
    spiritTagline.style.color = "white";
  }

console.log( "the spirit id is " + data[spirit].id, "and array has " + blackTextNeeded[0]);
console.log(typeof(data[spirit].id));
console.log(typeof(blackTextNeeded[0]));

  console.log(data[spirit].id);
console.log(blackTextNeeded.includes(data[spirit].id));
console.log("🚀 ~ renderSpirits ~ blackTextNeeded:", blackTextNeeded);

  if (blackTextNeeded.includes(data[spirit].id)) {
    console.log("black");
    // beerName.style.color = "black";
    spiritTagline.style.color = "black";
    spiritDescription.style.color = "black";


    navLogo.src = "WEBSITE/Logo/LOGO W 2020BW.png";
    nav.forEach((navItem) => {
      navItem.style.color = "black";
      navItem.style.textShadow ="none"
    });
    // buyButton.style.color = "black";
  } else {
    // spiritName.style.color = "white";
    spiritTagline.style.color = "white";
    spiritDescription.style.color = "white";
    navLogo.src = "WEBSITE/Logo/DISTILLEERDERIJ BROUWERIJ LOGO.png";
    nav.forEach((navItem) => {
      navItem.style.color = "white";
      navItem.style.textShadow ="#333333 1px 1px 1px"

    });
    // buyButton.style.color = "white";
  }


}

function buttonClick() {
  leftArrow.addEventListener("click", function () {
    // spiritBackground.style.opacity = 0;

    if (getParamSpirit() > 0) {
      spirit--;
      updateParams(getParamSpirit() - 1);
      renderSpirits(allSpirits, getParamSpirit());
      handleRadio();
    }
  });
  rightArrow.addEventListener("click", function () {
    // spiritBackground.style.transition = 'none';
    // spiritBackground.style.opacity = 0;


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
