let playerScore = 0;
let computerScore = 0;
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = computerPlay();
