function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3); 
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice () {
    const humanChoice = window.prompt("Select your option").toLowerCase();
    if (humanChoice === 'rock') {
        return "Rock";
    } else if (humanChoice === 'paper'){
        return "Paper";
    } else if (humanChoice === 'scissors') {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
      ) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
      } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
      }
}

playRound (humanChoice, computerChoice);



