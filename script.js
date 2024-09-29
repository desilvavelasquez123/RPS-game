console.log("Hello World!");

let humanScore = 0,
computerScore = 0,
draw = 0;


function playGame() {

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let computerChoice = null;
let humanChoice = null;

    function getComputerChoice(choice) {
        computerChoice = Math.floor(Math.random() * 100);
        if (computerChoice <= 33.33) {
            computerChoice = rock;
            return computerChoice;
        } else if (computerChoice <= 66.66) {
            computerChoice = paper;
            return computerChoice;
        } else {
            computerChoice = scissors;}
            return computerChoice;
    }

    getComputerChoice(computerChoice);

    function getHumanChoice(choice) {
        humanChoice = (prompt("Please type either rock, paper, or scissors")).toLowerCase();
        if (humanChoice === ("rock")) {
            humanChoice = rock;
            return humanChoice;
        }
        else if (humanChoice === ("paper")) {
            humanChoice = paper;
            return humanChoice;
        }
        else if (humanChoice === ("scissors")) {
            humanChoice = scissors
            return humanChoice;
        } else {
            alert("Choose one of the actual choices, don't goof around! :D")
            return getHumanChoice(humanChoice);
        }
    }

    getHumanChoice(humanChoice);

function playRound(choiceComputer,choiceHuman) {
    if ((computerChoice === rock && humanChoice === rock) || (computerChoice === paper && humanChoice === paper) || (computerChoice === scissors && humanChoice === scissors)) {
    alert(`It's a draw! You both chose ${humanChoice}!`);
    return draw ++;
    } else if ((computerChoice === rock && humanChoice === scissors) || (computerChoice === paper && humanChoice === rock) || (computerChoice === scissors && humanChoice === paper)) {
        alert(`You lose! You chose ${humanChoice}, the computer got ${computerChoice}`);
        return computerScore ++;
    } else {
        alert(`You win! You chose ${humanChoice}, the computer went for ${computerChoice}. Bravo!`)
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

alert(`Final score is: You: ${humanScore} Computer: ${computerScore} Draw: ${draw}`);