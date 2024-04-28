"use strcit";

import SwipeListener from "swipe-listener";

export default function carousel() {
  const aRight = document.querySelector(".arrowRight");
  const aLeft = document.querySelector(".arrowLeft");
  let carouselIndex = [1, 2, 3, 4, 5, 6, 7, 8];
  let reverseIndex = [1, 2, 3, 4, 5, 6, 7, 8];
  // new index =>  [8, 1, 2, 3, 4, 5, 6, 7]
  //  new reverse index => [2, 3, 4, 5, 6, 7, 8, 1]
  const carousel = document.querySelector(".carouselContainer");

  const child1 = carousel.children[0];
  const child2 = carousel.children[1];
  const child3 = carousel.children[2];
  const child4 = carousel.children[3];
  const child5 = carousel.children[4];
  const child6 = carousel.children[5];
  const child7 = carousel.children[6];
  const child8 = carousel.children[7];
  aLeft.addEventListener("click", function () {
    moveLeft();
  });

  aRight.addEventListener("click", function () {
    moveRight();
  });

  function moveLeft() {
    child1.classList.remove(`item${reverseIndex[0]}`); // new value => item2
    child2.classList.remove(`item${reverseIndex[1]}`);
    child3.classList.remove(`item${reverseIndex[2]}`);
    child4.classList.remove(`item${reverseIndex[3]}`);
    child5.classList.remove(`item${reverseIndex[4]}`);
    child6.classList.remove(`item${reverseIndex[5]}`);
    child7.classList.remove(`item${reverseIndex[6]}`);
    child8.classList.remove(`item${reverseIndex[7]}`);

    child1.classList.add(`item${carouselIndex[1]}`);
    child2.classList.add(`item${carouselIndex[2]}`);
    child3.classList.add(`item${carouselIndex[3]}`);
    child4.classList.add(`item${carouselIndex[4]}`);
    child5.classList.add(`item${carouselIndex[5]}`);
    child6.classList.add(`item${carouselIndex[6]}`);
    child7.classList.add(`item${carouselIndex[7]}`);
    child8.classList.add(`item${carouselIndex[0]}`);
    carouselIndex.push(carouselIndex.shift());
    reverseIndex.push(reverseIndex.shift());
  }
  function moveRight() {
    child1.classList.remove(`item${carouselIndex[0]}`); // new value => item2
    child2.classList.remove(`item${reverseIndex[1]}`);
    child3.classList.remove(`item${reverseIndex[2]}`);
    child4.classList.remove(`item${reverseIndex[3]}`);
    child5.classList.remove(`item${reverseIndex[4]}`);
    child6.classList.remove(`item${reverseIndex[5]}`);
    child7.classList.remove(`item${reverseIndex[6]}`);
    child8.classList.remove(`item${reverseIndex[7]}`);

    child1.classList.add(`item${carouselIndex[7]}`);
    child2.classList.add(`item${carouselIndex[0]}`);
    child3.classList.add(`item${carouselIndex[1]}`);
    child4.classList.add(`item${carouselIndex[2]}`);
    child5.classList.add(`item${carouselIndex[3]}`);
    child6.classList.add(`item${carouselIndex[4]}`);
    child7.classList.add(`item${carouselIndex[5]}`);
    child8.classList.add(`item${carouselIndex[6]}`);

    carouselIndex.unshift(carouselIndex.pop());
    reverseIndex.unshift(reverseIndex.pop());
  }

  const container = document.querySelector(".carousel");
  var listener = SwipeListener(container);
  container.addEventListener("swipe", function (e) {
    var directions = e.detail.directions;
    var x = e.detail.x;
    var y = e.detail.y;

    if (directions.left) {
      moveRight();

      // console.log("Swiped left.");
    }

    if (directions.right) {
      // console.log("Swiped right.");
      moveLeft();
    }

    // console.log("Started horizontally at", x[0], "and ended at", x[1]);
    // console.log("Started vertically at", y[0], "and ended at", y[1]);
  });
}
// carousel();
