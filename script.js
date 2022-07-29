let playerScore = 0;
let computerScore = 0;
let tiesScore = 0;

let playerWins = document.querySelector('.player-wins-number')
playerWins.innerHTML = playerScore;

let gameTies = document.querySelector('.ties-number')
gameTies.innerHTML = tiesScore;

let computerWins = document.querySelector('.computer-wins-number')
computerWins.innerHTML = computerScore;

let rb = document.querySelector('.rock')
let pb = document.querySelector('.paper')
let sb = document.querySelector('.scissors')
let wb = document.querySelector('.winner-box')


function getComputerChoice(){
    let answer = Math.floor(Math.random()*3+1)
    if (answer === 1){
        document.querySelector('.computer-roll').textContent = "The computer selected Rock!";
        return "rock"
    }
    else if (answer === 2){
        document.querySelector('.computer-roll').textContent = "The computer selected Rock!";
        return "paper"
    } else if (answer === 3){
        document.querySelector('.computer-roll').textContent = "The computer selected Rock!";
        return "scissors"
    }
    return 'borked'
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        tiesScore++;
        gameTies.innerHTML = tiesScore;
    } else if(playerSelection === "rock" && computerSelection === "scissors" ){
        playerScore++;
        playerWins.innerHTML = playerScore;
        if(playerScore === 5){
            rb.disabled = true
            pb.disabled = true
            sb.disabled = true
            document.querySelector('.winner-box').textContent = "Player Wins"
        }
    } else if(playerSelection === "scissors" && computerSelection === "paper" ){
        playerScore++;
        playerWins.innerHTML = playerScore;
        if(playerScore === 5){
            rb.disabled = true
            pb.disabled = true
            sb.disabled = true
            document.querySelector('.winner-box').textContent = "Player Wins"
        }
    } else if(playerSelection === "paper" && computerSelection === "rock" ){
        playerScore++;
        playerWins.innerHTML = playerScore;
        if(playerScore === 5){
            rb.disabled = true
            pb.disabled = true
            sb.disabled = true
            document.querySelector('.winner-box').textContent = "Player Wins"
        }
    } else if (computerSelection === "rock" && playerSelection === "scissors" ){
        computerScore++;
        computerWins.innerHTML = computerScore;
        if(computerScore === 5){
            rb.disabled = true
            pb.disabled = true
            sb.disabled = true
            document.querySelector('.winner-box').textContent = "Computer Wins"
        }
    } else if (computerSelection === "scissors" && playerSelection === "paper" ){
        computerScore++;
        computerWins.innerHTML = computerScore;
        if(computerScore === 5){
            rb.disabled = true
            pb.disabled = true
            sb.disabled = true
            document.querySelector('.winner-box').textContent = "Computer Wins"
        }
    } else if (computerSelection === "paper" && playerSelection === "rock" ){
        computerScore++;
        computerWins.innerHTML = computerScore;
        if(computerScore === 5){
            rb.disabled = true
            pb.disabled = true
            sb.disabled = true
            document.querySelector('.winner-box').textContent = "Computer Wins"
        }
    }
}



let rockbtn = document.querySelector('.rock').addEventListener('click', function () {
    document.querySelector('.player-roll').textContent = "You've selected rock!";

    let playerSelection = 'rock'

    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    document.querySelector('.computer-roll').textContent = "The computer selected " + computerSelection + "!";

})

let paperbtn = document.querySelector('.paper').addEventListener('click', function () {
    document.querySelector('.player-roll').textContent = "You've selected paper!";

    let playerSelection = 'paper'

    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    document.querySelector('.computer-roll').textContent = "The computer selected " + computerSelection + "!";

})

let scissorsbtn = document.querySelector('.scissors').addEventListener('click', function () {
    document.querySelector('.player-roll').textContent = "You've selected scissors!";

    let playerSelection = 'scissors'

    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    document.querySelector('.computer-roll').textContent = "The computer selected " + computerSelection + "!"

})