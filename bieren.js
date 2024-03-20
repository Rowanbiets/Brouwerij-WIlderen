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

const blackTextNeeded = [2];

const rightArrow = document.getElementById("arrowRight");
const leftArrow = document.getElementById("arrowLeft");

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
  const beerBackground = document.querySelector(".beerBackground");
  const navLogo = document.querySelector(".logo");
  const nav = document.querySelectorAll("nav ul li a");
console.error(nav);
  // Verander thema kleur (zie css variabelen in bierDisplay.css)
  console.warn(data);
  root.style.setProperty("--themeColor", data[beer].themeColor);
  neonborder.style.filter = `drop-shadow(0 0 0.75rem ${data[beer].neonColor})`;
  console.warn(data[beer].beerLogo);

  // veranderd de styling van het logo wanner het het wilderen logo is
  if (data[beer].beerLogo == "WEBSITE/Logo/Wilderen Logo 2020.png") {
    console.warn(data[beer].beerlogo);
    beerLogo.style.border = "none";
    beerLogo.style.borderRadius = "0";
    beerLogo.style.height = "50%";
    // beerLogo.style.transform = "translate(0%, -100%)";
  } else {
    beerLogo.style.border = `5px solid ${data[beer].themeColor}`;
    // beerLogo.style.borderRadius = "0";
    // beerLogo.style.objectFit = "cover";
    // beerLogo.style.width = "40%";
    // beerLogo.style.height = "50%";
    // beerLogo.style.transform = "translate(0%, -130%)";
  }
  if(data[beer].beerLogo == ""){
    beerLogo.style.display = "none";
  console.log(data[beer].beerLogo);
  beerLogo.style.display = "none";
  } else {
    beerLogo.style.display = "block";
  }

  if(data[beer].id == 5 || data[beer].id == 6){
    console.log(data[beer].id);
    beerName.style.fontSize = "1.5rem";
  } else {
    beerName.style.fontSize = "2rem";
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
  beerBackground.src = data[beer].beerBG;

  data[beer].beerInfo.forEach((beer) => {
    beerInfo.innerHTML += `<li>${beer}</li>`;
    console.log(beer);
  });

  // beerImage.src = data[beer].beerImg;
  beerLogo.innerHTML = data[beer].logo;
console.warn(data[beer].id);
if(blackTextNeeded.includes(data[beer].id)){
  // beerName.style.color = "black";
  beerTagline.style.color = "black";
  beerDescription.style.color = "black";
  beerInfo.style.color = "black";

  navLogo.src = "WEBSITE/Logo/LOGO W 2020BW.png";
  nav.forEach((navItem) => {
navItem.style.color = "black";
  });
  // buyButton.style.color = "black";
} else{
  // beerName.style.color = "white";
  beerTagline.style.color = "white";
  beerDescription.style.color = "white";
  beerInfo.style.color = "white";
  navLogo.src = "WEBSITE/Logo/DISTILLEERDERIJ BROUWERIJ LOGO.png";
  nav.forEach((navItem) => {
    navItem.style.color = "white";
      });
  // buyButton.style.color = "white";

}

if (getParamBeer() == 0) {
  leftArrow.style.display = "none";
} else if (getParamBeer() > allBeer.length - 1) {
  rightArrow.style.display = "none";
} else{
  leftArrow.style.display = "block";
  rightArrow.style.display = "block";

}
}




function buttonClick() {
  leftArrow.addEventListener("click", function () {
    console.log("!!!!!!!CLICKED!!!!!!!!!");
    console.log(beer);
    console.log(getParamBeer())
    console.warn(getParamBeer());
    if (getParamBeer() > 0 ) {
      beer--;
      updateParams(getParamBeer() - 1);
      renderBeer(allBeer, getParamBeer());
    } 
  });
  rightArrow.addEventListener("click", function () {
    console.log("!!!!!!!CLICKED!!!!!!!!!");
    console.log(beer);
    console.log(getParamBeer())
    console.warn(allBeer.length - 1);
    if (getParamBeer() < allBeer.length - 1) {
      beer++;
      updateParams(getParamBeer() + 1);
      renderBeer(allBeer, getParamBeer());

      console.warn(getParamBeer());
    } 
  });
}

function updateParams(param) {
  console.warn("getting updated")
  const bierIndex = bierNames[param];
  console.log(bierIndex);
  history.pushState(null, null, `?beer=${bierIndex}`);
  console.log(history);
}

fetchBeer();
buttonClick();
