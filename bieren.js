"use strict";

let beer = 0;
let allBeer = [];

function fetchBeer() {
  fetch("beerData.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // showData(data);
      allBeer = data;
      renderBeer(data, 0);
    });
}

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


    root.style.setProperty("--themeColor", data[beer].themeColor);
    console.log(root)

  neonborder.style.filter = `drop-shadow(0 0 0.75rem ${data[beer].neonColor})`;
//   const buttonFill = document.querySelector(".button-fill");
  // buyButton.href = data[beer].buyLink;
  console.warn(data[beer].beerLogo);

  if(data[beer].beerLogo == "WEBSITE/Logo/Wilderen Logo 2020.png"){
    console.warn(data[beer].beerlogo);
beerLogo.style.border = "none";
beerLogo.style.borderRadius = "0";
// beerLogo.style.objectFit = "none";
// beerLogo.style.width = "50%";
beerLogo.style.height = "50%";
beerLogo.style.transform = "translate(0%, -100%)";
// buyButton.style.backgroundColor = data[beer].themeColor;

  }else{
    beerLogo.style.border = `5px solid ${data[beer].themeColor}`;
    beerLogo.style.borderRadius = "50%";
    beerLogo.style.objectFit = "cover";
    beerLogo.style.width = "40%";
    beerLogo.style.height = "40%";
    beerLogo.style.transform = "translate(0%, -130%)";
  }
  beerLogo.src = data[beer].beerLogo;
//   console.log(beerLogo)
//   console.log(data[beer].beerLogo);
  buyButton.innerHTML = `Koop ${data[beer].buyname}`;
//   console.log(data[beer].buyname);

//   console.log(colors);
  colors.forEach((color) => {
    color.style.borderColor = data[beer].themeColor;
    console.log(data[beer].themeColor);
    console.log(colors);
  });

  console.log(beerImage);
  beerName.innerHTML = data[beer].beerName;
  beerTagline.innerHTML = data[beer].beerTagline;
  beerDescription.innerHTML = data[beer].beerDescription;
  //   beerInfo.innerHTML = data[beer].beerInfo;
  beerInfo.innerHTML = "";

  data[beer].beerInfo.forEach((beer) => {
    beerInfo.innerHTML += `<li>${beer}</li>`;
    console.log(beer);
  });

  beerImage.src = data[beer].beerImg;
  beerLogo.innerHTML = data[beer].logo;
  // colors.innerHTML = data.color;
}

const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");
function buttonClick() {
  leftArrow.addEventListener("click", function () {
    if (beer > 0) {
      beer--;
      renderBeer(allBeer, beer);
    }
  });
  rightArrow.addEventListener("click", function () {
    if (beer < allBeer.length - 1) {
      beer++;
      renderBeer(allBeer, beer);
    }
  });
}

fetchBeer();
buttonClick();
