function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

console.log("\nLet's play Rock, Paper, Scissors!")
// const playerSelection = prompt("Please enter your choice: (Rock, Paper or Scissors)");
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  console.log(`\nYou chose ${playerSelection}`);
  console.log(`Computer chose ${computerSelection}`);

  if (playerSelection === computerSelection) {
    return "Draw!";
  }
  if (playerSelection === "rock" && computerSelection == "paper") {
    return "You lose!";
  }
  if (playerSelection === "rock" && computerSelection == "scissors") {
    return "You win!";
  }
  if (playerSelection === "paper" && computerSelection == "rock") {
    return "You win!";
  }
  if (playerSelection === "paper" && computerSelection == "scissors") {
    return "You lose!";
  }
  if (playerSelection === "scissors" && computerSelection == "paper") {
    return "You win!";
  }
  if (playerSelection === "scissors" && computerSelection == "rock") {
    return "You lose!";
  }
  return "An error occurred"
}

function game() {
  let cpuScore = 0;
  let playerScore = 0;
  let maxScore = 3;
  while (cpuScore < maxScore && playerScore < maxScore) {
    let cpuMove = getComputerChoice();
    let playerMove = getComputerChoice();
    let roundResult = playRound(playerMove, cpuMove);
    console.log(roundResult);
    if (roundResult === "You win!") {
      playerScore++;
    }
    if (roundResult === "You lose!") {
      cpuScore++;
    }
    console.log(`PLayer score: ${playerScore}`);
    console.log(`Computer score: ${cpuScore}`);
    if (playerScore === maxScore) {
      console.log("YOU WIN THE GAME!");
    }
    if (cpuScore === maxScore) {
      console.log("THE COMPUTER WON THE GAME!");
    }
  }
}

console.log(game());
