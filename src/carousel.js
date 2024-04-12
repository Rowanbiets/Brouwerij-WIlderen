"use strcit";

export default function carousel() {
  const aRight = document.querySelector(".arrowRight");
  const aLeft = document.querySelector(".arrowLeft");

  console.log(aRight);
  let x = 1;
  let y = 1;
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

    console.log("🚀 ~ carousel ~ carouselIndex:", carouselIndex);

    let i = 0;

    console.log("click");

    x++;
    console.log(x - 1);
console.log(reverseIndex)
    child1.classList.remove(`item${reverseIndex[0]}`); // new value => item2
    child2.classList.remove(`item${reverseIndex[1]}`);
    child3.classList.remove(`item${reverseIndex[2]}`);
    child4.classList.remove(`item${reverseIndex[3]}`);
    child5.classList.remove(`item${reverseIndex[4]}`);
    child6.classList.remove(`item${reverseIndex[5]}`);
    child7.classList.remove(`item${reverseIndex[6]}`);
    child8.classList.remove(`item${reverseIndex[7]}`);

    if (x == 8) {
      x = 1;
    }

    child1.classList.add(`item${carouselIndex[1]}`);
    child2.classList.add(`item${carouselIndex[2]}`);
    child3.classList.add(`item${carouselIndex[3]}`);
    child4.classList.add(`item${carouselIndex[4]}`);
    child5.classList.add(`item${carouselIndex[5]}`);
    child6.classList.add(`item${carouselIndex[6]}`);
    child7.classList.add(`item${carouselIndex[7]}`);
    child8.classList.add(`item${carouselIndex[0]}`);
    console.log("🚀 ~ carousel ~ child1:", child1);

    i++;
    // carouselIndex.pop();
    console.log("🚀 ~ carousel ~ carouselIndex:", carouselIndex);

    carouselIndex.push(carouselIndex.shift());
    // reverseIndex.unshift(reverseIndex.pop());
    reverseIndex.push(reverseIndex.shift());
  });

  aRight.addEventListener("click", function () {
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
  });
}
// carousel();
