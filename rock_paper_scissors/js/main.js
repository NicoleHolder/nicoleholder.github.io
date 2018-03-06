// // Create a variable humanScore. Give it a value of the number 0.
// // Create a variable computerScore. Give it a value of the number 0.
var humanScore = 0;
var computerScore = 0;
// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!
// Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
var humanPlay;
var computerPlay;
function play(humanPlay, computerPlay) {
  // For example: "You played rock. The bot played scissors."
  console.log('You played ' + humanPlay + '. The bot played ' + computerPlay + '.');
  // If the human play is equal to the computer play
  // Log "You tied. :|" to the console.
  if (humanPlay === computerPlay) {
    console.log('You tied. :/ You have ' + humanScore + ' point(s) and the bot has '
    + computerScore + ' point(s).');
  }
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
  // Log "You win! :)" to the console
  else if (humanPlay === "paper" && computerPlay === "rock" ||
  humanPlay === "rock" && computerPlay === "scissors" ||
  humanPlay === "scissors" && computerPlay === "paper") {
    // Add one to the humanScore variable (be sure to use += )
    humanScore += 1;
    console.log('You Win! :) You have ' + humanScore + ' point(s) and the bot has '
    + computerScore + ' points.');
  }
  else {
    // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )
    computerScore += 1;
    console.log('You Lose! :( The bot has ' + computerScore + ' point(s) and you have '
    +humanScore + ' point(s).');
  }
}
// Log "You have {humanScore} points" to the console
// For example: "You have 0 points"
// Log "The bot has {computerScore} points" to the console.
// For example: "The bot has 3 points"
// END OF FUNCTION (Place the closing curly brace here!)
// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.
play("paper", "rock");
play("paper", "rock");
play("paper", "paper");
play("rock", "paper");
play("scissors", "rock");
play("paper", "scissors");

// BONUS:
// Create a "best of 3" version
// Once humanScore or computerScore equals three announce YOU'RE THE WINNER!
function play(humanPlay, computerPlay) {
  // For example: "You played rock. The bot played scissors."
  console.log('You played ' + humanPlay + '. The bot played ' + computerPlay + '.');
  // If the human play is equal to the computer play
  // Log "You tied. :|" to the console.
  if (humanScore > 1) {
    console.log('YOU ARE THE WINNER!');
  }
  else if (computerScore > 1) {
    console.log('TOO BAD...YOU ARE THE LOSER');
  }
  else if (humanPlay === computerPlay && humanScore <= 1 && computerScore <= 1) {
    console.log('You tied. :/ ' + humanscore + computerScore);
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
  // Log "You win! :)" to the console
}
  else if (humanPlay === "paper" && computerPlay === "rock" ||
  humanPlay === "rock" && computerPlay === "scissors" ||
  humanPlay === "scissors" && computerPlay === "paper" && humanScore < 1 &&
  computerScore < 1) {
    // Add one to the humanScore variable (be sure to use += )
    humanScore += 1;
    console.log('One more! ' + humanScore + computerScore);
  }
}
play("rock", "rock");
play("paper", "rock");
play("paper", "rock");
play("paper", "rock");
play("rock", "paper");


// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
