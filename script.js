function computerPlay(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    let value = Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

computerPlay()
    if (value === 1) {
    return ("Rock")

}   else if (value === 2) {
    return ("Paper")

}   else if (value === 3) {
    return ("Scissors")
}

// Two parameters (playerSelection, computerSelection) //
// Return "You win! Paper beats Scissors" OR "You Lose! Paper beats Rock" //
// playerSelection case-insensitive //

// Create input option type = text //

// Rock = 1
// Paper = 2
// Scissors = 3

// Rock beats Scissors //
// Paper beats Rock //
// Scissors beats Paper //

// if (playerSelection == "Rock" && computerSelection == "Scissors") {
//   return "You Win! Rock beats Scissors"; }
// }else if (playerSelection === "Rock" && computerSelection === "Paper") {
//      return "You Lose! Paper beats Rock"; }
//}else if (playerSelection === "Rock" && computerSelection === "Rock") {
//      return "Tie!"; }
// }else if (playerSelection === "Paper" && computerSelection === "Rock") {
 //        return "You Win! Paper beats Rock";}
 // }else if (playerSelection === "Paper" && computerSelection === "Scissors") {
 //        return "You Lose! Scissors beats Paper";}
 //}else if (playerSelection === "Paper" && computerSelection === "Paper") {
//      return "Tie!"; }
// }else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//          return "You Win! Scissors beats Paper";}
// }else if (playerSelection === "Scissors" && computerSelection === "Rock") {
//          return "You Lose! Rock beats Scissors";}
 //}else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
//      return "Tie!"; }