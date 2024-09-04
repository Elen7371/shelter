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
