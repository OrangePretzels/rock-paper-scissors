let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "it's a draw"
    } else if(playerSelection === "rock" && computerSelection === "scissors" ){
        return "player wins rock beats scissors" + playerScore++
    } else if(playerSelection === "scissors" && computerSelection === "paper" ){
        return "player wins scissors beats paper" + playerScore++
    } else if(playerSelection === "paper" && computerSelection === "rock" ){
        return "player wins paper beats rock" + playerScore++
    } else if (computerSelection === "rock" && playerSelection === "scissors" ){
        return "computer wins rock beats scissors" + computerScore++
    } else if (computerSelection === "scissors" && playerSelection === "paper" ){
        return "computer wins scissors beats paper" + computerScore++
    } else if (computerSelection === "paper" && playerSelection === "rock" ){
        return "computer wins paper beats rock" + computerScore++
    }
    return "invalid value try again"
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Choose Rock Paper Scissors").toLowerCase();
        let computerInput = getComputerChoice();
        console.log(playerInput, computerInput)
        console.log(playRound(playerInput, computerInput));
    }
}
game()

function result(){
if (playerScore === computerScore){
    return "the series is tied at " + playerScore + " " + computerScore
} else if (playerScore > computerScore){
    return "you win the series " + playerScore + " " + computerScore
} else if (computerScore > playerScore){
    return "the computer wins the series " + computerScore + " " + playerScore
}
}
console.log(result())