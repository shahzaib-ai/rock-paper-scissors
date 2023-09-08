

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randChoice = Math.floor(Math.random() * 3);

    return choices[randChoice];

}


function playRound(PlayerSelection, ComputerSelection) {

    const gameRules = {
        ROCK : "SCISSORS",
        PAPER : "ROCK",
        SCISSORS : "PAPER"

    }

    const validSelections = ["ROCK", "PAPER", "SCISSORS"];

    if (!validSelections.includes(PlayerSelection.toUpperCase())) {

        // return "Invalid Selection";
        return 0
    }
   

    if( gameRules[ComputerSelection.toUpperCase()]  === PlayerSelection.toUpperCase() ) {

        // return `You Lose! ${ComputerSelection} beats ${PlayerSelection}`
        return 10

    } else if (ComputerSelection.toUpperCase() === PlayerSelection.toUpperCase()) {

        // return `We have a Draw!`
        return 20

    } else {
        
        // return `You Win!`
        return 30

    }



}

function game() {

    let playerWins = 0; 
    let computerWins = 0;

    
    for (let i = 0; i < 5; i++) {

        playerChoice = prompt("Choose your Weapon: ")
        
        const result = playRound(playerChoice,getComputerChoice())

        if (result === 0) {
            console.log(`Invalid Input.`) 
        } 

        if (result === 10) {
            computerWins++
            console.log(`You Lose this round!`) 
        }

        if(result === 20) {
            console.log(`This round is a Draw!`) 
        }

        if(result == 30) {
            playerWins++
            console.log(`You won this round!`) 

        }
    }

    if (playerWins > computerWins) {
        console.log("You won the Battle!")
    } else if (computerWins > playerWins) {
        console.log("Some battles can't be won!")
    } else {
        console.log("There are no winners in a war, only casualties.")
    }

    
}


game()
