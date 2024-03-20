let spirit = 0;
let allSpirits = [];

function fetchSpirits(){
    fetch("data/spiritData.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        allSpirits = data;
        renderSpirits(data, 0);
    });
}

function renderSpirits(data, spirit){
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



    // spiritLogo.src = data[spirit].spiritLogo;
    // buyButton.innerHTML = `Koop ${data[spirit].buyname}`;
    colors.forEach((color) => {
        color.style.borderColor = data[spirit].themeColor;
    });

    spiritName.innerHTML = data[spirit].spiritName;
    spiritTagline.innerHTML = data[spirit].spiritTagLine;
    spiritDescription.innerHTML = data[spirit].spiritDescription;
    spiritImage.src = data[spirit].spiritImg;
}

const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");
function buttonClick() {
  leftArrow.addEventListener("click", function () {
    if (spirit > 0) {
      spirit--;
      renderSpirits(allSpirits, spirit);
    }
  });
  rightArrow.addEventListener("click", function () {
    if (spirit < allSpirits.length - 1) {
      spirit++;
      renderSpirits(allSpirits, spirit);
    }
  });
}

fetchSpirits();
buttonClick();