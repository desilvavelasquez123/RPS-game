"use strict";

// greetings
alert('Hello, visitor! Welcome to my Rock-Paper-Scissors game page!\nYou will play 5 rounds against your device.\nPlease select "OK" to close this window and start the game!\nGood luck! :)');

// global variables for scoring
let humanScore = 0,
    computerScore = 0,
    draw = 0;

// main function/game
function playGame() {

    // choices as an array
    const choices = ["rock", "paper", "scissors"];

    // round function
    function playRound() {

        // computer chooses randomly from the choices array
        const getComputerChoice = () => {
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        const computerMove = getComputerChoice();

        // human choice via prompt
        function getHumanChoice() {
            let choice = prompt('Please type either "rock", "paper", or "scissors".').trim().toLowerCase();
            if (choices.includes(choice)) {
                return choice;
            } else {
                alert("Choose one of the actual choices, don't goof around! :D");
                return getHumanChoice();
            }
        }

        const humanMove = getHumanChoice();

        // scoring algorithm
        if (computerMove === humanMove) {
            alert(`It's a draw! You both chose ${humanMove}!`);
            draw++;
        } else if (
            (computerMove === "rock" && humanMove === "scissors") ||
            (computerMove === "paper" && humanMove === "rock") ||
            (computerMove === "scissors" && humanMove === "paper")
        ) {
            alert(`You lose! You chose ${humanMove}, the computer chose ${computerMove}`);
            computerScore++;
        } else {
            alert(`You win! You chose ${humanMove}, the computer chose ${computerMove}. Bravo!`);
            humanScore++;
        }
    }
    
    // Play a single round
    playRound();
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}, Draw: ${draw}`);
}

// Play 5 rounds using a loop
for (let i = 0; i < 5; i++) {
    playGame();
}

// Final score
alert(`Final score: You: ${humanScore} Computer/Device: ${computerScore} Draw: ${draw}\nPlease reload this page to restart the game!`);