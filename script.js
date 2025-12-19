"use strict"; // in Strict JavaScript, all variables have to be explicitly declared

// greetings
alert('Hello, visitor! Welcome to my Rock-Paper-Scissors game page!\nYou will play 5 rounds against your device.\n\nPlease select "OK" to close this window and start the game!\n\nTo start a round, please select a button on the screen!\n\nGood luck! :)');

let roundsPlayed = 0;

window.addEventListener("load", function() {

    document.body.setAttribute("style", "display: flex; flex-direction: row wrap; justify-content: center; align-items: center; height: 500px; gap: 20px;");
  
    const buttonOne = document.createElement("button"),
          buttonTwo = document.createElement("button"),
          buttonThree = document.createElement("button");

    buttonOne.setAttribute("id", "rock");
    buttonTwo.setAttribute("id", "paper");
    buttonThree.setAttribute("id", "scissors");

    buttonOne.textContent = "Rock";
    buttonTwo.textContent = "Paper";
    buttonThree.textContent = "Scissors";

    document.body.append(buttonOne, buttonTwo, buttonThree);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", playGame);
    });
});

// global variables for scoring
let humanScore = 0,
    computerScore = 0,
    draw = 0;

function playGame(event) {
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

        // human choice via button select
        function getHumanChoice(event) {
            let choice = event.target.id;  // Get the ID of the clicked button (rock, paper, or scissors)
            let roundNumber = 1 + roundsPlayed;
            alert(`Round ${roundNumber}`);
            return choice;
        }

        const humanMove = getHumanChoice(event);

        // scoring algorithm
        if (computerMove === humanMove) {
            alert(`It's a draw! You both chose ${humanMove}!`);
            draw++;
        } else if (
            (computerMove === "rock" && humanMove === "scissors") ||
            (computerMove === "paper" && humanMove === "rock") ||
            (computerMove === "scissors" && humanMove === "paper")
        ) {
            alert(`You lose! You chose ${humanMove}, the computer chose ${computerMove}.`);
            computerScore++;
        } else {
            alert(`You win! You chose ${humanMove}, the computer chose ${computerMove}. Bravo!`);
            humanScore++;
        }
    }
    // Play a single round
    playRound();
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}, Draw: ${draw}`);
    roundsPlayed++;
    // Check if it's the 5th round, if so show the final score and reload the page immediately
    if (roundsPlayed === 5) {  // This is the 5th round (roundsPlayed is 0-indexed)
        // Show final score alert
        alert(`Final score: You: ${humanScore} Computer/Device: ${computerScore} Draw: ${draw}\nThe page will reload to restart the game - press OK to continue!`);
        location.reload(); // Reload the page immediately
        return; // Exit the function to prevent further execution
    }
}