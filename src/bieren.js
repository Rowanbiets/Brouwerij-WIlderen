"use strict";

// select all needed elements
const beerName = document.getElementById("beerName");
const beerTagline = document.getElementById("beerTagLine");
const beerDescription = document.getElementById("beerDescription");
const beerInfo = document.getElementById("beerInfo");
const beerImage = document.getElementById("bierImg");
const beerLogo = document.getElementById("beerLogo");
const colors = document.querySelectorAll(".themed");
const buyButton = document.querySelector(".buy-button2");
const neonborder = document.querySelector(".imgBorder");
const root = document.querySelector(":root");
const beerBackground = document.querySelector(".beerBackground");
const navLogo = document.querySelector(".logo");
const nav = document.querySelectorAll("nav > ul >  li  > a");

console.log("🚀 ~ nav:", nav);
const awards = document.querySelector(".awards");
const radios = document.querySelectorAll("input[type='radio']");
console.log(radios);

let beer = 0;
let allBeer = [];
const bierNames = [
  "wilderen-goud",
  "betty-ford",
  "tripel-kanunnik",
  "curvee-clarisse",
  "whiskey-infused",
  "rum-infused",
  "kriek",
  "clarrise-rouge",
];

const blackTextNeeded = [2];

const rightArrow = document.getElementById("arrowRight");
const leftArrow = document.getElementById("arrowLeft");

function getParamBeer() {
  // zoek de biernaam op in de url -> ?beer=""
  // selecteer de array index op basis van de naam
  const bierParams = new URLSearchParams(window.location.search).get("beer");

  const bierIndex = bierNames.indexOf(bierParams);

  return bierIndex;
}
function fetchBeer() {
  fetch("../src/data/beerData.json")
    .then((response) => response.json())
    .then((data) => {
      // showData(data);
      allBeer = data;
      renderBeer(data, getParamBeer());
    });
}
// const questionLang = new URLSearchParams(window.location.search).get(
//   "taal"
// );

function renderBeer(data, beer) {
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
  beerName.innerHTML = data[beer].beerName;
  beerTagline.innerHTML = data[beer].beerTagline;
  beerDescription.innerHTML = data[beer].beerDescription;
  beerInfo.innerHTML = "";
  beerBackground.src = data[beer].beerBG;

  data[beer].beerInfo.forEach((beer) => {
    beerInfo.innerHTML += `<li>${beer}</li>`;
  });

  // beerImage.src = data[beer].beerImg;
  beerLogo.innerHTML = data[beer].logo;
  if (blackTextNeeded.includes(data[beer].id)) {
    // beerName.style.color = "black";
    beerTagline.style.color = "black";
    beerDescription.style.color = "black";
    beerInfo.style.color = "black";

    navLogo.src = "WEBSITE/Logo/LOGO W 2020BW.png";
    nav.forEach((navItem) => {
      navItem.style.color = "black";
      navItem.style.textShadow = "none";
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
    leftArrow.style.display = "none";
  } else if (getParamBeer() == allBeer.length - 1) {
    rightArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  }
}

function buttonClick() {
  leftArrow.addEventListener("click", function () {
    if (getParamBeer() > 0) {
      beer--;
      updateParams(getParamBeer() - 1);
      renderBeer(allBeer, getParamBeer());
      handleRadio();
    }
  });
  rightArrow.addEventListener("click", function () {
    if (getParamBeer() < allBeer.length - 1) {
      beer++;
      updateParams(getParamBeer() + 1);
      renderBeer(allBeer, getParamBeer());
      handleRadio();
    }
  });
}

function updateParams(param) {
  const bierIndex = bierNames[param];
  history.pushState(null, null, `?beer=${bierIndex}`);
}

function handleRadio() {
  console.log(getParamBeer());
  // getParamBeer();
  const radios = document.querySelectorAll("input[type='radio']");
  console.log(radios);
  radios[getParamBeer()].checked = true;
}

function radioClick() {
  const form = document.querySelector("form");

  form.addEventListener("change", function (event) {
    console.log(event.target.id);
    const bierIndex = bierNames.indexOf(event.target.id);
    updateParams(bierIndex);
    renderBeer(allBeer, getParamBeer());
    handleRadio();
  });
}

fetchBeer();
buttonClick();
handleRadio();
radioClick();
