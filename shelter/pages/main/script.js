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

// задаем высоту затемнения для страницы
document.querySelector(".overlay").style.height =
  document.documentElement.scrollHeight;

// burger-menu: appearance and animation

const BTN_BURGER = document.querySelector(".burger-menu-btn");
const SIDEBAR = document.querySelector(".header-nav");
const BODY = document.querySelector("body");

const burgerToggler = () => {
  document.body.marginRight = BTN_BURGER.classList.toggle("burger-logo-turn");
  SIDEBAR.classList.toggle("burger-open");
  SIDEBAR.classList.add("transition-burger");
  BODY.classList.toggle("disable-scroll");
  document.querySelector(".overlay").classList.toggle("overlay-on");
};

// BTN_BURGER.addEventListener("click", pressBurger);

BODY.addEventListener("click", pressSomethere);

function pressSomethere(event) {
  let target = event.target;
  if (
    target === BTN_BURGER /* клик на кнопку бургера*/ ||
    target.classList.contains("header-link") /* клик на ссылку */ ||
    (SIDEBAR.classList.contains("burger-open") &&
      target !== SIDEBAR) /* клик за пределами sidebar при открытом меню */
  ) {
    burgerToggler();
  }
}

// modal window (pop-up with pets-information on btn learn_more)

const BTN_MODAL = document.querySelectorAll(".btn-to-pets");
const PET_CARD = document.querySelectorAll(".pet-card");
const WINDOW_MODAL = document.querySelector(".modal");
const OVERLAY = document.querySelector(".overlay");
const HTML = document.documentElement;

// проверка по правильности расчетов
// alert(
//   "Высота экрана просмотра: " +
//     document.documentElement.clientHeight +
//     " Ширина экрана просмотра: " +
//     document.documentElement.clientWidth +
//     " Высота modal: " +
//     WINDOW_MODAL.offsetHeight +
//     " Ширина modal: " +
//     WINDOW_MODAL.offsetWidth +
//     " Скролл окна (ВЕРХ): " +
//     window.scrollY
// );

const modalToggler = () => {
  BODY.classList.toggle("disable-scroll"); /* выключаем скролл */
  OVERLAY.classList.toggle("overlay-on"); /* включаем затемнение */
  WINDOW_MODAL.classList.toggle("hidden"); /* открываем мод.окно */
};

BODY.addEventListener("click", pressModal);

function pressModal(event) {
  let target = event.target;
  if (
    // открытие модального окна
    WINDOW_MODAL.classList.contains("hidden") &&
    target.matches(".btn-to-pets")
  ) {
    // вычисляем центр и задаем параметры для модального окна
    WINDOW_MODAL.style = `
  top: ${
    window.scrollY + (HTML.clientHeight - WINDOW_MODAL.offsetHeight) / 2
  }px;
  left: ${window.scrollX + (HTML.clientWidth - WINDOW_MODAL.offsetWidth) / 2}px;
`;
    OVERLAY.style.height = `${document.documentElement.scrollHeight}px`;
    // запускаем функцию вкл/выкл
    modalToggler();
  } else if (
    // закрытие модального окна
    !WINDOW_MODAL.classList.contains("hidden") &&
    (target.classList.contains("modal-close-btn") || target === OVERLAY)
  ) {
    modalToggler();
  }
}


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
