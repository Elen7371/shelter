const PETS = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.jpg",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.jpg",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.jpg",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

// fetch("../../assets/pets.json")
//   .then((response) => response.json())
//   .then((jsonData) => console.log(jsonData.indexOf("Jennifer")));

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

// div.remove();

// document.documentElement.scrollHeight;

// burger-menu: appearance and animation

const BTN_BURGER = document.querySelector(".burger-menu-btn");
const SIDEBAR = document.querySelector(".header-nav");
const BODY = document.querySelector("body");

const burgerToggler = () => {
  document.body.marginRight = BTN_BURGER.classList.toggle("burger-logo-turn");
  document
    .querySelector(".start-screen-wrapper")
    .classList.toggle("start-screen-wrapper-add-padding");
  SIDEBAR.classList.toggle("burger-open");
  SIDEBAR.classList.add("transition-burger");
  BODY.classList.toggle("disable-scroll");
  document.querySelector(".overlay").classList.toggle("overlay-on");
};

BODY.addEventListener("click", pressBurger);

function pressBurger(event) {
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
  // let petName = target.previousElementSibling.innerHTML;

  if (
    // клик для открытия модального окна
    WINDOW_MODAL.classList.contains("hidden") &&
    target.matches(".btn-to-pets")
  ) {
    // нахождение карточки животного выбранного пользователем (его индекс)
    for (let i = 0; i < PETS.length; i++) {
      if (PETS[i].name === target.previousElementSibling.innerHTML) {
        // притяжка данных по животному (по индексу)
        WINDOW_MODAL.querySelector(".modal-image > img").setAttribute(
          "src",
          PETS[i].img
        );
        WINDOW_MODAL.querySelector(".title").innerHTML = PETS[i].name;
        WINDOW_MODAL.querySelector("h3").innerHTML =
          PETS[i].type + " - " + PETS[i].breed;
        WINDOW_MODAL.querySelector("p").innerHTML = PETS[i].description;
        WINDOW_MODAL.querySelector(
          ".modal-list > li:nth-child(1) > span"
        ).innerHTML = PETS[i].age;
        WINDOW_MODAL.querySelector(
          ".modal-list > li:nth-child(2) > span"
        ).innerHTML = PETS[i].inoculations.join(", ");
        WINDOW_MODAL.querySelector(
          ".modal-list > li:nth-child(3) > span"
        ).innerHTML = PETS[i].diseases.join(", ");
        WINDOW_MODAL.querySelector(
          ".modal-list > li:nth-child(4) > span"
        ).innerHTML = PETS[i].parasites.join(", ");
      }
    }
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
    (target.classList.contains("modal-close-btn") ||
      target === OVERLAY ||
      target.classList.contains("btn-close"))
  )
    modalToggler();
}
