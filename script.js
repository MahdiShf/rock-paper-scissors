let playerScore = 0;
let computerScore = 0;
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