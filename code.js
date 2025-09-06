function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3); 
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = window.prompt("Select your option: rock, paper, or scissors").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    console.log("Invalid choice, defaulting to rock.");
    return "rock"; // fallback to avoid errors
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        return "human";
    } else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Round 1
    const result1 = playRound(getHumanChoice(), getComputerChoice());
    if (result1 === "human") humanScore++;
    else if (result1 === "computer") computerScore++;

    // Round 2
    const result2 = playRound(getHumanChoice(), getComputerChoice());
    if (result2 === "human") humanScore++;
    else if (result2 === "computer") computerScore++;

    // Round 3
    const result3 = playRound(getHumanChoice(), getComputerChoice());
    if (result3 === "human") humanScore++;
    else if (result3 === "computer") computerScore++;

    // Round 4
    const result4 = playRound(getHumanChoice(), getComputerChoice());
    if (result4 === "human") humanScore++;
    else if (result4 === "computer") computerScore++;

    // Round 5
    const result5 = playRound(getHumanChoice(), getComputerChoice());
    if (result5 === "human") humanScore++;
    else if (result5 === "computer") computerScore++;

    // Final score
    console.log(`Final Score → Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You've won the game!");
    } else if (humanScore < computerScore) {
        console.log("You've lost the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();
