document.addEventListener("DOMContentLoaded", function() {
    var titleElement = document.querySelector(".title.typemachine-text");
    var titleText = titleElement.textContent;
    titleElement.textContent = ""; // Leeg de inhoud van de titel

    var pElement = document.querySelector(".typemachine-text-p");
    var pText = pElement.textContent;
    pElement.textContent = ""; // Leeg de inhoud van de paragraaf

    var indexTitle = 0;
    var indexP = 0;

    var titleInterval = setInterval(function() {
        if (indexTitle < titleText.length) {
            titleElement.textContent += titleText[indexTitle];
            indexTitle++;
        } else {
            clearInterval(titleInterval); // Stop de interval wanneer alle tekst van de titel is getypt
        }
    }, 100); // Interval van 100 milliseconden voor de titel

    var pInterval = setInterval(function() {
        if (indexP < pText.length) {
            pElement.textContent += pText[indexP];
            indexP++;
        } else {
            clearInterval(pInterval); // Stop de interval wanneer alle tekst van de paragraaf is getypt
        }
    }, 50); // Interval van 50 milliseconden voor de paragraaf (snellere snelheid)
});