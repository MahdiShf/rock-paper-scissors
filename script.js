// for keeping track of scores, round, and game state
let playerScore = 0;
let computerScore = 0;
let round = 0;
let gameActive = true;
// This function will randomly return either Rock, Paper or Scissors
const computerSelection = function () {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};
// get input from the player
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
// compare the choices and determine the round winner
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
  // for checking game state and display the final result
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
// UI variables
const pChoice = document.querySelector(".p-choice");
const cChoice = document.querySelector(".c-choice");
const pScore = document.querySelector(".p-score");
const cScore = document.querySelector(".c-score");
const resetButton = document.querySelector(".reset-game");
// functions for updating UI elements:
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
//update result
function roundResult(resultContent) {
  const roundResult = document.querySelector(".round-result");
  roundResult.textContent = resultContent;
}
//stop tracking & game state
function stopGame() {
  gameActive = false;
  playerSelection.forEach((choice) => {
    choice.removeEventListener("click", handClick);
  });
}
// for showing reset button after finishing the game
function showReset() {
  resetButton.addEventListener("click", reset);
  resetButton.style.display = "block";
}
// reset the game state and UI elements
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
  // reattach event listeners to player choices
  playerSelection.forEach((choice) => {
    choice.removeEventListener("click", handClick);
  });
  playerSelection.forEach((choice) => {
    choice.addEventListener("click", handClick);
  });
}
