let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generating a random INTERGER between 0-9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

//function to check who is closer to the target number
function compareGuesses(humanGuess, comGuess, target) {
  let humanDiff = Math.abs(humanGuess - target);
  let comDiff = Math.abs(comGuess - target);

  if (humanDiff >= comDiff) {
    return true;
  } else {
    return false;
  }
}

//increasing the score of human or computer based on winning
function updateScore(winner) {
    if (winner === 'human'){
        humanScore ++;
    } else if (winner === 'computer'){
        computerScore ++;
    }
}

//increasing round number per round
function advanceRound () {
    currentRoundNumber ++;
}

