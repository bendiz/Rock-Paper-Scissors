function computerPlay() {
  let value = Math.floor(Math.random() * (3 - 1) + 1); // Get random number between 1-3 to assign to Rock, paper or Scissors //
  switch (value) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors;";
  }

  function playerSelection() {
    let playerSelection = prompt("What do you choose? Rock, paper or scissors?")
      .toLowerCase()
      .trim();
    console.log(playerSelection);
  }
}
playerSelection();

//   //function playRound(computerPlay) {
//     if (playerSelection == "rock" && computerPlay == "Scissors") {
//       console.log("You Win! Rock beats Scissors");
//     } else if (playerSelection === "rock" && computerPlay === "Paper") {
//       return "You Lose! Paper beats Rock";
//     } else if (playerSelection === "rock" && computerPlay === "Rock") {
//       return "Tie!";
//     } else if (playerSelection === "paper" && computerPlay === "Rock") {
//       return "You Win! Paper beats Rock";
//     } else if (playerSelection === "paper" && computerPlay === "Scissors") {
//       return "You Lose! Scissors beats Paper";
//     } else if (playerSelection === "paper" && computerPlay === "Paper") {
//       return "Tie!";
//     } else if (playerSelection === "scissors" && computerPlay === "Paper") {
//       return "You Win! Scissors beats Paper";
//     } else if (playerSelection === "scissors" && computerPlay === "Rock") {
//       return "You Lose! Rock beats Scissors";
//     } else if (playerSelection === "scissors" && computerPlay === "Scissors") {
//       return "Tie!";
//     }
//   }

//   function game() {
//     for (let i = 0; i < 5; i++) playRound(i);
//   }
//
