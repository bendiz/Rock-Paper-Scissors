function computerPlay() {
  let value = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  // console.log(value);
  switch (value) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
let computerPlayValue = computerPlay();

  function playerSelection() {
    let playerSelection = prompt("What do you choose? Rock, paper or scissors?")
      .toLowerCase()
      .trim();
      return playerSelection;
  }

  let playerSelectionValue = playerSelection();

  function playRound(playerSelectionValue, computerPlayValue) {

    if (playerSelectionValue == "rock" && computerPlayValue == "scissors") {
      console.log("You Win! Rock beats Scissors");
    } else if (playerSelectionValue == "rock" && computerPlayValue == "paper") {
      console.log("You Lose! Paper beats Rock");
    } else if (playerSelectionValue == "rock" && computerPlayValue == "rock") {
      console.log("Tie!");
    } else if (playerSelectionValue == "paper" && computerPlayValue == "rock") {
      console.log("You Win! Paper beats Rock");
    } else if (playerSelectionValue == "paper" && computerPlayValue == "scissors") {
      console.log("You Lose! Scissors beats Paper");
    } else if (playerSelectionValue == "paper" && computerPlayValue == "paper") {
      console.log ("Tie!");
    } else if (playerSelectionValue == "scissors" && computerPlayValue == "paper") {
      console.log("You Win! Scissors beats Paper");
    } else if (playerSelectionValue == "scissors" && computerPlayValue == "rock") {
      console.log("You Lose! Rock beats Scissors");
    } else if (playerSelectionValue == "scissors" && computerPlayValue == "scissors") {
      console.log("Tie!");
    }
  }

  function game() {
    for (let i = 0; i < 5; i++) playRound(playerSelectionValue, computerPlayValue);
  }
  game();