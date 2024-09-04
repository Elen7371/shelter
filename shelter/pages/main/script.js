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

// burger-menu: appearance and animation

const BTN_BURGER = document.querySelector(".burger-menu-btn");
const SIDEBAR = document.querySelector(".header-nav");
const BODY = document.querySelector("body")

const burgerToggler = () => {
  BTN_BURGER.classList.toggle("burger-logo-turn");
  SIDEBAR.classList.toggle("burger-open");
  SIDEBAR.classList.add("transition-burger");
  BODY.classList.toggle("body-scroll")
  document.querySelector(".overlay").classList.toggle("burger-overlay");
}

// BTN_BURGER.addEventListener("click", pressBurger);

BODY.addEventListener("click", pressSomethere);


function pressSomethere(event) {
let target = event.target;

if (target === BTN_BURGER /* клик на кнопку бургера*/ 
   || target.classList.contains("header-link") /* клик на ссылку */ 
   || (SIDEBAR.classList.contains("burger-open") && target !== SIDEBAR) /* клик за пределами sidebar при открытом меню */ ) {
      burgerToggler(); 
} 
}



// реализовать по бургеру: 
// 3. поставить бургер на страницу pets



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
