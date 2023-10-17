const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const resultText = document.querySelector("#finalResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

for (const el of choiceBtns) {
  el.addEventListener("click", () => {
    player = el.textContent;
    computerTurn();
    playerChoice.textContent = `Player: ${player}`;
    computerChoice.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  });
}
function computerTurn() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) {
    computer = "ROCK";
  } else if (randomNum == 2) {
    computer = "PAPER";
  } else {
    computer = "SCISSORS";
  }
}

function checkWinner() {
  if (player == computer) {
    return "DRAW!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You win!" : "You lose!";
  }
  else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You win!" : "You lose!";
  }
  else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You win!" : "You lose!";
  }
}
