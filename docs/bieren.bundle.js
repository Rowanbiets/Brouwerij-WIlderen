(()=>{"use strict";var e=document.getElementById("beerName"),o=document.getElementById("beerTagLine"),n=document.getElementById("beerDescription"),t=document.getElementById("beerInfo"),r=(document.getElementById("bierImg"),document.getElementById("beerLogo")),l=document.querySelectorAll(".themed"),c=document.querySelector(".buy-button2"),i=(document.querySelector(".imgBorder"),document.querySelector(":root")),d=document.querySelector(".beerBackground"),a=document.querySelector(".logo"),u=document.querySelectorAll("nav > ul >  li  > a");console.log("🚀 ~ nav:",u);var s=document.querySelector(".awards"),y=document.querySelectorAll("input[type='radio']");console.log(y);var m=[],g=["wilderen-goud","betty-ford","tripel-kanunnik","cuvee-clarisse","whiskey-infused","rum-infused","kriek","clarrise-rouge"],b=[2],f=document.getElementById("arrowRight"),h=document.getElementById("arrowLeft");function L(){var e=new URLSearchParams(window.location.search).get("beer");return g.indexOf(e)}function E(y,g){i.style.setProperty("--themeColor",y[g].themeColor),y[g].awards?(s.innerHTML="",y[g].awards.forEach((function(e){s.innerHTML+='<li> <img src="'.concat(e,'" alt="award"></li>')}))):s.innerHTML="","WEBSITE/Logo/Wilderen Logo 2020.png"==y[g].beerLogo&&(r.style.border="none",r.style.borderRadius="0",r.style.height="50%"),""==y[g].beerLogo?(r.style.display="none",r.style.display="none"):r.style.display="block",5==y[g].id||6==y[g].id?e.style.fontSize="1.5rem":e.style.fontSize="2rem",r.src=y[g].beerLogo,y[g].buyname?c.innerHTML="Koop ".concat(y[g].buyname):c.innerHTML="Online bestellen",l.forEach((function(e){e.style.borderColor=y[g].themeColor})),c.href=y[g].buyLink,e.innerHTML=y[g].beerName,o.innerHTML=y[g].beerTagline,n.innerHTML=y[g].beerDescription,t.innerHTML="",d.src=y[g].beerBG,y[g].beerInfo.forEach((function(e){t.innerHTML+="<li>".concat(e,"</li>")})),r.innerHTML=y[g].logo,b.includes(y[g].id)?(o.style.color="black",n.style.color="black",t.style.color="black",a.src="WEBSITE/Logo/LOGO W 2020BW.png",u.forEach((function(e){e.style.color="black",e.style.textShadow="none"}))):(o.style.color="white",n.style.color="white",t.style.color="white",a.src="WEBSITE/Logo/DISTILLEERDERIJ BROUWERIJ LOGO.png",u.forEach((function(e){e.style.color="white",e.style.textShadow="#333333 1px 1px 1px"}))),0==L()?h.style.display="none":L()==m.length-1?f.style.display="none":(h.style.display="block",f.style.display="block")}function p(e){var o=g[e];history.pushState(null,null,"?beer=".concat(o))}function S(){console.log(L());var e=document.querySelectorAll("input[type='radio']");console.log(e),e[L()].checked=!0}fetch("data/beerData.json").then((function(e){return e.json()})).then((function(e){m=e,E(e,L())})),h.addEventListener("click",(function(){L()>0&&(p(L()-1),E(m,L()),S())})),f.addEventListener("click",(function(){L()<m.length-1&&(p(L()+1),E(m,L()),S())})),S(),document.querySelector("form").addEventListener("change",(function(e){console.log(e.target.id),p(g.indexOf(e.target.id)),E(m,L()),S()}))})();