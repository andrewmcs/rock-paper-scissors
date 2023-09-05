console.log('hello rock paper scissors!');


let player_score = 0;
let computer_score = 0;

// User plays against computer. 
// Play for 5 rounds 
// for each round:
// Get the user selection - use prompt
// Get the computer selection - getComputerChoice();
// playRound(playerSelection, computerSelection)
// Announce the round winner.
// Update the score



// from w3schools: This JavaScript function always returns a random number between min and max (both included).
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// randomly return ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRndInteger(0, 2)];
}

function getPlayerChoice() {
    return prompt("Please Enter either Rock, Paper or Scissors");
}

for (let i = 1; i <= 10; i++) {
    console.log(getComputerChoice());
}



function playRound() {
    let playerSelection = getPlayerChoice().toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
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

    alert(result);
}

// get element when window loads.
window.onload = function () {
    const start_button = document.getElementById("start-button");
    start_button.addEventListener('click', function () {
        player_score=0;
        computer_score=0;
        for (let i = 1; i <= 5; i++) {
            playRound();
            alert(`Player score: ${player_score}, Computer score: ${computer_score}`);
        }
        alert(`Final: Player score: ${player_score}, Computer score: ${computer_score}`);
        alert(`Winner is ${player_score > computer_score ? 'Player' : 'Computer'}`);
    }, false);
}