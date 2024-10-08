/* идеи для игры:
1. игра открывается попапом с предложением ввести имя игрока и нажать кнопку старт
2. на 1 странице приветствие "привет ..."  и ниже стартует игра
3. под игрой' счет 10 игроков (имя, кол-во ходов, время, выигрыш) */

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
