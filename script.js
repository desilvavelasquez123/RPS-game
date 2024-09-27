console.log("Hello World!");

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanChoice = null;
let computerChoice = null;
let newHumanChoice = null;
 
function getComputerChoice(computerChoice) {
    computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 33) {
        computerChoice = rock;
        return computerChoice;
    } else if (computerChoice <= 66) {
        computerChoice = paper;
        return computerChoice;
    } else {
        computerChoice = scissors;}
        return computerChoice;
}
getComputerChoice(computerChoice);

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Please type either rock, paper, or scissors with lowercase letters");
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

computerChoice = getComputerChoice(true);
humanChoice = getHumanChoice(true);

console.log(computerChoice,humanChoice);