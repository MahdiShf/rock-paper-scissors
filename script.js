let playerScore = 0;
let computerScore = 0;
let round = 0;
let gameActive = true;
// This function will randomly return either Rock, Paper or Scissors:
const computerSelection = function () {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};
// This method will get input from the player:
const playerSelection = document.querySelectorAll(".player-choices img");
playerSelection.forEach((choice) => {
  choice.addEventListener("click", handClick);
});
function handClick() {
  if (!gameActive) {
    return;
  }
  const playerSelection = this.alt;
  const computerChoice = computerSelection();
  singleRound(playerSelection, computerChoice);
}
function singleRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    showChoice(playerSelection, computerSelection);
    playerScore++;
    round++;
    updateScore();
    updateCounter();
    roundResult("You won this round!");
  } else if (
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Rock" && computerSelection === "Paper")
  ) {
    showChoice(playerSelection, computerSelection);
    computerScore++;
    round++;
    updateScore();
    updateCounter();
    roundResult("Computer won this round!");
  } else if (playerSelection === computerSelection) {
    showChoice(playerSelection, computerSelection);
    round++;
    updateScore();
    updateCounter();
    roundResult("Tie!");
  }
  if ((round === 5) & (playerScore > computerScore)) {
    stopGame();
    roundResult("You won the Game, Congratulations!");
    showReset();
  } else if ((round === 5) & (playerScore < computerScore)) {
    stopGame();
    roundResult("Sorry,You lost the Game!");
    showReset();
  } else if ((round === 5) & (playerScore === computerScore)) {
    stopGame();
    roundResult("Game is over, Tie!");
    showReset();
  }
}
const pChoice = document.querySelector(".p-choice");
const cChoice = document.querySelector(".c-choice");
const pScore = document.querySelector(".p-score");
const cScore = document.querySelector(".c-score");
const resetButton = document.querySelector(".reset-game");
function showChoice(playerChosen, computerChosen) {
  pChoice.textContent = `Your Choice: ${playerChosen}`;
  cChoice.textContent = `Computer Choice: ${computerChosen}`;
}
function updateScore() {
  pScore.textContent = `Score: ${playerScore}`;
  cScore.textContent = `Score: ${computerScore}`;
}
function updateCounter() {
  const roundCounter = document.querySelector(".round-counter");
  roundCounter.textContent = `Round: ${round}`;
}
function roundResult(resultContent) {
  const roundResult = document.querySelector(".round-result");
  roundResult.textContent = resultContent;
}
function stopGame() {
  gameActive = false;
  playerSelection.forEach((choice) => {
    choice.removeEventListener("click", handClick);
  });
}
function showReset() {
  resetButton.addEventListener("click", reset);
  resetButton.style.display = "block";
}
function reset() {
  pChoice.textContent = "";
  cChoice.textContent = "";
  playerScore = 0;
  computerScore = 0;
  round = 0;
  gameActive = true;
  updateScore();
  updateCounter();
  roundResult("Welcome!");
  resetButton.style.display = "none";
  playerSelection.forEach((choice) => {
    choice.removeEventListener("click", handClick);
  });
  playerSelection.forEach((choice) => {
    choice.addEventListener("click", handClick);
  });
}
