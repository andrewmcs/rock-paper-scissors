let player_score = 0;
let computer_score = 0;

// from w3schools: This JavaScript function always returns a random number between min and max (both included).
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get start button when window loads.
window.onload = function () {

  function setScores(player_score, computer_score) {
    let playerScore = document.getElementById("player-score-value");
    let computerScore = document.getElementById("computer-score-value");

    playerScore.textContent = player_score;
    computerScore.textContent = computer_score;
  }

  function clearGameNews() {
    // clear any game information
    let currentScore = document.getElementById('game-news');
    while (currentScore.firstChild) {
      currentScore.removeChild(currentScore.firstChild);
    }
  }
  
  // randomly return ‘Rock’, ‘Paper’ or ‘Scissors’.
  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRndInteger(0, 2)];
  }


  function displayResult(choices_made, result) {
    let currentScore = document.getElementById('game-news');
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(`${choices_made}; ${result}`));
    currentScore.appendChild(li);
  }

  function playRound(playerSelection) {

    // let playerSelection = getPlayerChoice().toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    let choices_made = `Player chooses ${playerSelection}, Computer chooses ${computerSelection}`;

    let result = '';
    if (playerSelection == 'rock') {
      if (computerSelection == 'rock') {
        result = 'Draw';
      }
      if (computerSelection == 'paper') {
        result = 'Computer Wins';
        computer_score++;
      }
      if (computerSelection == 'scissors') {
        result = 'Player Wins';
        player_score++;
      }
    }
    else if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        result = 'Player Wins';
        player_score++;
      }
      if (computerSelection == 'paper') {
        result = 'Draw'
      }
      if (computerSelection == 'scissors') {
        result = 'Computer Wins';
        computer_score++;
      }
    }
    else if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        result = 'Computer Wins';
        computer_score++;
      }
      if (computerSelection == 'paper') {
        result = 'Player Wins';
        player_score++;
      }
      if (computerSelection == 'scissors') {
        result = 'Draw'
      }
    }
    else {
      result = 'Input not valid';
    }

    displayResult(choices_made, result);
    setScores(player_score, computer_score);

  }
  function playGame(playerSelection) {
    if(player_score==5 || computer_score==5) {
      clearGameNews();
      // zero scores when a new game starts (user clicks start).
      player_score = 0;
      computer_score = 0;
    }
    
    playRound(playerSelection);
    // alert(`Final: Player score: ${player_score}, Computer score: ${computer_score}`);
    let winner = '';
    if (player_score > computer_score) {
      winner = 'Player';
    }
    else if (player_score == computer_score) {
      winner = 'No-one';
    } else {
      winner = 'Computer';
    }
    alert(`${winner} Wins the Round!`);
    if(player_score==5){
      alert("Player reaches 5 points, You Win!");
    }
    if(computer_score==5){
      alert("Computer reaches 5 points, You Lose!\nChoose an option to start a new game.");
    }
  }

  const choiceButtons = document.getElementsByTagName("button");

  for (const choiceButton of choiceButtons) {
    //let playerChoice = choiceButton.dataset.choice;
    choiceButton.addEventListener('click', (e) => playGame(e.target.dataset.choice), false);
  }

}