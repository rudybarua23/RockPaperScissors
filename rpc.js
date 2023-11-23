var PlayerScore = 0;
var CompScore = 0;
var resultsDiv = document.getElementById('results');

document.getElementById('rock').addEventListener("click",function () {playRound('rock'); });
document.getElementById('paper').addEventListener("click",function () {playRound('paper'); });
document.getElementById('scissors').addEventListener("click",function () {playRound('scissors'); });


function getComputerChoice() {
  var game = ['rock','paper','scissors'];
  var number = Math.floor(Math.random() * game.length);
  var a = game[number];
  return a;
}

function round1(playerSelection,computerselection) {
  if (playerSelection === computerselection) {
    return "It's a tie! Both chose ${playerSelection}";
  }
  if ((playerSelection === 'rock' && computerselection === 'scissors') ||
    (playerSelection === 'paper' && computerselection === 'rock') ||
    (playerSelection === 'scissors' && computerselection === 'paper') ) {
        PlayerScore++;
        return `You win! ${playerSelection} beats ${computerselection}`;
    } else{
        CompScore++;
        return `You lose! ${computerselection} beats ${playerSelection}`;
    }
}

function playRound(playerChoice) {
    var computerChoice = getComputerChoice();
    var result = round1(playerChoice,computerChoice);
    updateResults(result);
    if (PlayerScore === 5 || CompScore === 5) {
        announceWinner();
        resetGame();
    }
}

function updateResults(result) {
    resultsDiv.innerHTML = `${result}<br>Player Score: ${PlayerScore}<br>Computer Score: ${CompScore}`;
}

function announceWinner() {
    if (PlayerScore > CompScore) {
        resultsDiv.innerHTML += '<br>Congratulations, you win the game!';
    } else {
        resultsDiv.innerHTML += '<br>Sorry, you lost the game.';
    }
}

function resetGame() {
    PlayerScore = 0;
    CompScore = 0;
}



