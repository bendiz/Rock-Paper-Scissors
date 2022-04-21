function computerPlay() {
    let value = Math.floor(Math.random() * (3 - 1 + 1) + 1); // Get random number between 1-3 to assign to Rock, paper or Scissors //
    switch (value) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors;";
    }

function playRound(playerSelection, computerSelection) {
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
}

            // JS //
// 1. Figure out how to return input from input prompt into a new variable called "playerSelection" //
// 2. Figure out how to get computerPlay into a new variable called "computerSelection" //
// 3. TEST GAME //
// 4. Figure out how to return text from function "playRound" to the popup window.//
// 5. Make text input case insensitive.

            // HTML / CSS //
// 1. Edit cursor on "X" to hand click symbol. //
// 2. Make it so when you click outside of popup, the popup window also closes. //
// 3. Create top navbar.
//        - About
//        - Contact
// 4. Create footer with copyright claim + date - Make sticky.
// 5. Blue Background.
// 6. Top item = History of RPS
// 7. Middle = How to Play.
// 8. Bottom = Contact.


document.getElementById("button").addEventListener("click", function(){ // Add click event to "Start game" button - in order to force a popup and grey out index page //
    document.querySelector(".bg-popup").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", function() { // Add click event to "X" button - in order to hide the grey overlay + the popup window //
    document.querySelector(".bg-popup").style.display = "none";
}