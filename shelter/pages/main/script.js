const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);

CAROUSEL.addEventListener("animationend", () => {
  CAROUSEL.classList.remove("transition-left");
  BTN_LEFT.addEventListener("click", moveLeft);
});

// BTN_RIGHT.addEventListener("click", () => {
//   CAROUSEL.classList.add("transition-right");
// });
const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", () => {
  CAROUSEL.classList.remove("transition-right");
  BTN_RIGHT.addEventListener("click", moveRight);
});

// burger-menu: animation

const BTN_LOGO = document.querySelector(".burger-menu-btn");

const turnLogo = () => {
  BTN_LOGO.classList.toggle("burger-logo-turn");
};

BTN_LOGO.addEventListener("click", turnLogo);

// BTN_LOGO.addEventListener("click", (event) => {
//   if(event.target.classList.contains("burger-menu-logo")) {
//     BTN_LOGO.classList.toggle("burger-logo-turn");
//   }
// }
// )

// попапы старт

// const myButton = document.getElementById("myButton");
// const popup = document.querySelector(".pop-up");
// const closeButton = document.getElementById("closeButton");

// myButton.addEventListener("click", () => {
//   popup.classList.toggle("hidden");
// });

// popup.addEventListener("click", (event) => {
//   if(event.target.classList.contains("pop-up")) {
//     popup.classList.toggle("hidden");
//   }
// }
// )

// closeButton.addEventListener("click", () => {
//   popup.classList.toggle("hidden");
// });

// попапы финиш
