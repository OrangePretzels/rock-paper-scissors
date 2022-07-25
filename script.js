let playerScore = 0;
let computerScore = 0;
console.log("game 1")
function getComputerChoice(){
    let answer = Math.floor(Math.random()*3+1)
    if (answer === 1){
        return "rock"
    }
    else if (answer === 2){
        return "paper"
    } else {
        return "scissors"
    }
}

const playerSelection = prompt("Choose Rock Paper Scissors").toLowerCase();

const computerSelection = getComputerChoice();

console.log(playerSelection, computerSelection)

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "it's a draw"
    } else if(playerSelection === "rock" && computerSelection === "scissors" ){
        return "player wins rock beats scissors"
    } else if(playerSelection === "scissors" && computerSelection === "paper" ){
        return "player wins scissors beats paper"
    } else if(playerSelection === "paper" && computerSelection === "rock" ){
        return "player wins paper beats rock"
    } else if (computerSelection === "rock" && playerSelection === "scissors" ){
        return "computer wins rock beats scissors"
    } else if (computerSelection === "scissors" && playerSelection === "paper" ){
        return "computer wins scissors beats paper"
    } else if (computerSelection === "paper" && playerSelection === "rock" ){
        return "computer wins paper beats rock"
    }
    return "invalid value try again"
}
console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i = 2; i < 6; i++) {
        let testone = prompt("Choose Rock Paper Scissors").toLowerCase();
        let testtwo = getComputerChoice();
        console.log("game " + i)
        console.log(testone, testtwo)
        console.log(playRound(testone, testtwo));
     }
}
game()