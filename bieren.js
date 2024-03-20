"use strict";

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
function getParamBeer() {
  // zoek de biernaam op in de url -> ?beer=""
  // selecteer de array index op basis van de naam
  const bierParams = new URLSearchParams(window.location.search).get("beer");
  console.log(bierParams);

  const bierIndex = bierNames.indexOf(bierParams);
  return bierIndex;
}
function fetchBeer() {
  fetch("data/beerData.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // showData(data);
      allBeer = data;
      console.warn(getParamBeer());
      renderBeer(data, getParamBeer());
    });
}
// const questionLang = new URLSearchParams(window.location.search).get(
//   "taal"
// );
function renderBeer(data, beer) {
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

  // Verander thema kleur (zie css variabelen in bierDisplay.css)
  root.style.setProperty("--themeColor", data[beer].themeColor);
  neonborder.style.filter = `drop-shadow(0 0 0.75rem ${data[beer].neonColor})`;
  console.warn(data[beer].beerLogo);

  // veranderd de styling van het logo wanner het het wilderen logo is
  if (data[beer].beerLogo == "WEBSITE/Logo/Wilderen Logo 2020.png") {
    console.warn(data[beer].beerlogo);
    beerLogo.style.border = "none";
    beerLogo.style.borderRadius = "0";
    beerLogo.style.height = "50%";
    beerLogo.style.transform = "translate(0%, -100%)";
  } else {
    beerLogo.style.border = `5px solid ${data[beer].themeColor}`;
    beerLogo.style.borderRadius = "50%";
    beerLogo.style.objectFit = "cover";
    beerLogo.style.width = "40%";
    beerLogo.style.height = "40%";
    beerLogo.style.transform = "translate(0%, -130%)";
  }

  beerLogo.src = data[beer].beerLogo;
  buyButton.innerHTML = `Koop ${data[beer].buyname}`;
  colors.forEach((color) => {
    color.style.borderColor = data[beer].themeColor;
    console.log(data[beer].themeColor);
    console.log(colors);
  });

  console.log(beerImage);
  beerName.innerHTML = data[beer].beerName;
  beerTagline.innerHTML = data[beer].beerTagline;
  beerDescription.innerHTML = data[beer].beerDescription;
  beerInfo.innerHTML = "";

  data[beer].beerInfo.forEach((beer) => {
    beerInfo.innerHTML += `<li>${beer}</li>`;
    console.log(beer);
  });

  beerImage.src = data[beer].beerImg;
  beerLogo.innerHTML = data[beer].logo;
}

const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");
function buttonClick() {
  leftArrow.addEventListener("click", function () {
    if (beer > 0) {
      beer--;
      updateParams();
      renderBeer(allBeer, getParamBeer());
    }
  });
  rightArrow.addEventListener("click", function () {
    if (beer < allBeer.length - 1) {
      beer++;
      updateParams();
      renderBeer(allBeer, getParamBeer());

      console.warn(getParamBeer());
    }
  });
}

function updateParams() {
  const bierIndex = bierNames[beer];
  history.pushState(null, null, `?beer=${bierIndex}`);
  console.log(history);
}

fetchBeer();
buttonClick();
