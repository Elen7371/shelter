// modal window - start screen welcome

const WINDOW_MODAL = document.querySelector(".modal-welcome-window");
const OVERLAY = document.querySelector(".overlay");
const BODY = document.querySelector("body");
const HTML = document.documentElement;

// расположение welcome-modal по центру

WINDOW_MODAL.style = `
  top: ${
    window.scrollY + (HTML.clientHeight - WINDOW_MODAL.offsetHeight) / 2
  }px;
  left: ${window.scrollX + (HTML.clientWidth - WINDOW_MODAL.offsetWidth) / 2}px;
`;
OVERLAY.style.height = `${document.documentElement.scrollHeight}px`;

alert(
  "Привет! Если музыка покажется слишком навязчивой - ее можно отключить в футере"
);

// выключение welcome-modal

const modalToggler = () => {
  BODY.classList.toggle("able-scroll"); /* включаем скролл */
  OVERLAY.classList.toggle("hidden"); /* выключаем затемнение */
  document
    .querySelector(".start-screen")
    .classList.toggle("hidden"); /* закрываем мод.окно */
};

const BUTTON_START = document.querySelector(".btn-submit-start");

const input = document.querySelector("#input[type='text']");

// let SCORE_LIST = document.querySelectorAll(".winner");

const addName = () => {
  const winner = document.querySelectorAll(".winner");
  const xMove = document.querySelectorAll(".x-move");
  const oMove = document.querySelectorAll(".o-move");
  for (let i = 0; i < winner.length; i++) {
    if (winner[i].innerHTML === "") {
      winner[i].innerHTML = currentPlayer;
      xMove[i].innerHTML = gameState.filter((el) => el === "✖").length;
      oMove[i].innerHTML = gameState.filter((el) => el === "⭘").length;
      return;
    }
  }
};

// function getResult() {
//   const result = {
//     winner: `${currentPlayer}`,
//     xMove: `${gameState.filter((el) => el === "✖").length}`,
//     oMove: `${gameState.filter((el) => el === "⭘").length}`,
//   };
//   localStorage.setItem("result", JSON.stringify(result));
//   return JSON.parse(localStorage.getItem("result"));
// }

BUTTON_START.addEventListener("click", function (event) {
  event.preventDefault();
  audioBtn.play();
  modalToggler();
});

// game logic template for 2 players

const statusDisplay = document.querySelector(".game-status");

let gameActive = true;

let currentPlayer = "✖";

let gameState = ["", "", "", "", "", "", "", "", ""];

const winMessage = () => `${currentPlayer} WON! <br> <br>
✖ - ${gameState.filter((el) => el === "✖").length} moves <br>
⭘ - ${gameState.filter((el) => el === "⭘").length} moves`;

const drawMessage = () => `Game ended in a draw!  <br> <br>
✖ - 5 moves <br>
⭘ - 4 moves`;

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
  audioMove.play();
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer === "✖" ? (currentPlayer = "⭘") : (currentPlayer = "✖");
  statusDisplay.innerHTML = currentPlayerTurn();
}

const audioFinish = new Audio();
audioFinish.preload = "auto";
audioFinish.src = "assets/sounds/finish-sound.mp3";

function handleResultValidation() {
  let gameWon = false;
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
      audioFinish.play();
      addName();
      break;
    }
  }

  if (gameWon) {
    statusDisplay.innerHTML = winMessage();
    gameActive = false;
    audioFinish.play();
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    audioFinish.play();
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

const audioBtn = new Audio();
audioBtn.preload = "auto";
audioBtn.src = "assets/sounds/push-btn.mp3";

function handleRestart() {
  gameActive = true;
  audioBtn.play();
  currentPlayer = "✖";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".data-cell").forEach((el) => (el.innerHTML = ""));
}

document
  .querySelectorAll(".data-cell")
  .forEach((el) => el.addEventListener("click", handleCellClick));

document.querySelector(".btn-restart").addEventListener("click", handleRestart);

const audioMove = new Audio();
audioMove.preload = "auto";
audioMove.src = "assets/sounds/move-sound.wav";
