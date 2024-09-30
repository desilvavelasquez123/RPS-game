alert("Hello, visitor! Welcome to my Rock-Paper-Scissors game page! You will play 5 rounds against your device. Please select 'OK' to close this windows and start the game! Good luck!");

let humanScore = 0,
computerScore = 0,
draw = 0;

function playGame() {

const rock = "rock",
paper = "paper",
scissors = "scissors";

    function playRound() {

        let computerChoice = () => {

            randomNumber = Math.floor(Math.random() * 100);
            if (randomNumber <= 33.33) {
                return rock;
            } else if (randomNumber <= 66.66) {
                return paper;
            } else {
                return scissors;}
    }
    
        let computerMove = computerChoice();
    
        function humanChoice() {
            let choice = prompt("Please type either rock, paper, or scissors").trim().toLowerCase();
            if (choice === rock || choice === paper || choice === scissors) {
                return choice;
            } else {
                alert("Choose one of the actual choices, don't goof around! :D");
                return humanChoice();
            }
        }
    
        let humanMove = humanChoice();

    if ((computerMove === rock && humanMove === rock) || (computerMove === paper && humanMove === paper) || (computerMove === scissors && humanMove === scissors)) {
    alert(`It's a draw! You both chose ${humanMove}!`);
    return draw ++;
    } else if ((computerMove === rock && humanMove === scissors) || (computerMove === paper && humanMove === rock) || (computerMove === scissors && humanMove === paper)) {
        alert(`You lose! You chose ${humanMove}, the computer got ${computerMove}`);
        return computerScore ++;
    } else {
        alert(`You win! You chose ${humanMove}, the computer went for ${computerMove}. Bravo!`)
        return humanScore ++;
    }
}

playRound();
console.log(humanScore,computerScore,draw);
}

playGame();
playGame();
playGame();
playGame();
playGame();

alert(`Final score: You: ${humanScore} Computer/Device: ${computerScore} Draw: ${draw} Please reload this page to restart the game!`);