let playerScore = 0;
let computerScore = 0;
function playGame() {
    for (
        let i = 0;
        i < 5;
        i++ 
      ){
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = computerPlay();
const humanPlay = prompt(
`What is your choice? 
Rock / Paper / Scissors`
)
function capFirstLetter(string){
    if (humanPlay !== null) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}
const playerSelection = capFirstLetter(humanPlay);
function singleRound(playerSelection, computerSelection) {
    if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Scissors" && computerSelection === "Paper") ||
      (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
      ++playerScore;
      alert(`You won this round,
  Computer played ${computerSelection}.
  ${playerSelection} beats ${computerSelection}!
  You: ${playerScore} Computer: ${computerScore}`);
    } else if (
      (playerSelection === "Scissors" && computerSelection === "Rock") ||
      (playerSelection === "Paper" && computerSelection === "Scissors") ||
      (playerSelection === "Rock" && computerSelection === "Paper")
    ) {
      ++computerScore;
      alert(`You lost this round,
    Computer played ${computerSelection}.
    ${computerSelection} beats ${playerSelection}!
    You: ${playerScore} Computer: ${computerScore}`);
    } else if (
      (playerSelection === "Rock" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Paper")
    ) {
      alert(`You both picked the same option, try again!
      You: ${playerScore} Computer: ${computerScore}`);
    } else if (humanPlay == null || humanPlay == "") {
      alert(`Canceled!`);
    } else {
      alert("Wrong word.");
    }
  }
  singleRound(playerSelection, computerSelection);
 }
 if ((i = 5 && playerScore > computerScore)) {
    alert(`You won the game!
    You: ${playerScore} Computer: ${computerScore}`);
  } else if ((i = 5 && playerScore < computerScore)) {
    alert(`Game over, Computer has defeated you!
    You: ${playerScore} Computer: ${computerScore}`);
  } else if ((i = 5 && playerScore === computerScore)) {
    alert(`Game over,Tie!
    You: ${playerScore} Computer: ${computerScore}`);
  }
}
playGame();