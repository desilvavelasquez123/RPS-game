"use strict";

// greetings

alert('Hello, visitor! Welcome to my Rock-Paper-Scissors game page!\nYou will play 5 rounds against your device.\nPlease select "OK" to close this windows and start the game!\nGood luck! :)');

// global variables for scoring

let humanScore = 0,
    computerScore = 0,
    draw = 0;

// main function/game

function playGame() {

    // choice variables

    const rock = "rock",
        paper = "paper",
        scissors = "scissors";

    // round function

    function playRound() {

        // computer chooses first

        let getComputerChoice = () => {

            let randomNumber = Math.floor(Math.random() * 3);
            return randomNumber === 0 ? rock
            : randomNumber === 1 ? paper
            : scissors;
            }

        const computerMove = getComputerChoice();

        // human choice via prompt()

        function getHumanChoice() {
            let choice = prompt('Please type either "rock, paper, or scissors".').trim().toLowerCase();
            if (choice === rock || choice === paper || choice === scissors) {
                return choice;
            } else {
                alert("Choose one of the actual choices, don't goof around! :D");
                return getHumanChoice();
            }
        }

        const humanMove = getHumanChoice();

        // scoring algorithm

        if ((computerMove === rock && humanMove === rock)
            || (computerMove === paper && humanMove === paper)
            || (computerMove === scissors && humanMove === scissors)) {
            alert(`It's a draw! You both chose ${humanMove}!`);
            draw++;
        } else if ((computerMove === rock && humanMove === scissors)
            || (computerMove === paper && humanMove === rock)
            || (computerMove === scissors && humanMove === paper)) {
            alert(`You lose! You chose ${humanMove}, the computer got ${computerMove}`);
            computerScore++;
        } else {
            alert(`You win! You chose ${humanMove}, the computer went for ${computerMove}. Bravo!`)
            humanScore++;
        }
    }
    playRound();
    console.log(humanScore, computerScore, draw);
}

// for-loop alternative


playGame();
playGame();
playGame();
playGame();
playGame();

alert(`Final score: You: ${humanScore} Computer/Device: ${computerScore} Draw: ${draw}\nPlease reload this page to restart the game!`);