"use strict";

export default function addFooter() {
  console.log("footer.js is geladen");

  document.querySelector("footer").innerHTML = `
<div class="footerWrapper">
<div class="topFooter">
  <div class="logoContainer">
    <a href="index.html">
      <img
        loading="lazy"
        src="WEBSITE/Logo/Wilderen Logo 2020.png"
        alt=""
      />
    </a>
  </div>
  <div class="socialeMedia">
    <h4 data-i18n="footer.0">Ontdek meer over ons</h4>
    <div class="socialeMediaLinksFooter">
      <a href="https://www.facebook.com/BrouwerijW/">
        <img
          loading="lazy"
          src="WEBSITE/svg/facebook.svg"
          alt="Facebook"
        />
      </a>
      <a href="https://www.instagram.com/brouwerijwilderen/?hl=en">
        <img
          loading="lazy"
          src="WEBSITE/svg/instagram.svg"
          alt="Instagram"
        />
      </a>
    </div>
  </div>
</div>
<div class="bottomFooter">
  <div class="leftBottom">
    <p>Brouwerij Wilderen - extra info</p>
  </div>
  <div class="rightBottom">
    <a href="">Sitemap</a>
    <a href="">Privacy</a>
  </div>
</div>
</div>`;
}
