/* идеи для игры:
1. игра открывается попапом с предложением ввести имя игрока и нажать кнопку старт
2. на 1 странице приветствие "привет ..."  и ниже стартует игра
3. под игрой' счет 10 игроков (имя, кол-во ходов, время, выигрыш) */

// modal window - start screen welcome

function showWelcomeModalPopup() {}

// const BTN_MODAL = document.querySelectorAll(".btn-to-pets");
const WINDOW_MODAL = document.querySelector(".modal-welcome-window");
const OVERLAY = document.querySelector(".overlay");
const HTML = document.documentElement;

// расположение welcome-modal по центру
WINDOW_MODAL.style = `
  top: ${
    window.scrollY + (HTML.clientHeight - WINDOW_MODAL.offsetHeight) / 2
  }px;
  left: ${window.scrollX + (HTML.clientWidth - WINDOW_MODAL.offsetWidth) / 2}px;
`;
OVERLAY.style.height = `${document.documentElement.scrollHeight}px`;

// выключение welcome-modal

const modalToggler = () => {
  BODY.classList.toggle("able-scroll"); /* выключаем скролл */
  OVERLAY.classList.toggle("overlay-off"); /* включаем затемнение */
  WINDOW_MODAL.classList.toggle("hidden"); /* закрываем мод.окно */
};

const BUTTON_START = document.querySelector(".btn-submit-start");

const livePlayer = document.querySelector(".btn-submit-start").input;

console.log(livePlayer);

BUTTON_START.addEventListener("click", gameStart);

function gameStart(event) {
  let target = event.target;

  if (
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

document.querySelector(".btn-submit-start");

// game logic template for 2 players

const statusDisplay = document.querySelector(".game-status");

let gameActive = true;

let currentPlayer = "x";

let gameState = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `${currentPlayer}, you're won!`;

const drawMessage = () => `Game ended in a draw!`;

const currentPlayerTurn = () => `Your turn, ${currentPlayer}!`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer === "x" ? (currentPlayer = "o") : (currentPlayer = "x");
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
  let gameWon = false;
  // проверить почему в рекомендациях <= 9
  for (let i = 0; i < 8; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      gameWon = true;
      break;
    }
  }

  if (gameWon) {
    statusDisplay.innerHTML = winMessage();
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleRestart() {
  gameActive = true;
  currentPlayer = "x";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".data-cell").forEach((el) => (el.innerHTML = ""));
}

document
  .querySelectorAll(".data-cell")
  .forEach((el) => el.addEventListener("click", handleCellClick));

document.querySelector(".btn-restart").addEventListener("click", handleRestart);

// save result in local storage

const user = {
  name: "Giwi",
  time: 10,
  result: "win",
};

localStorage.setItem("user", JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user")));

// localStorage.removeItem('user')

// localStorage.clear();

window.addEventListener("storage", (event) => alert(event));
