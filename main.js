console.log("hello world");

// const x = [rock,paper,scissors];
let playerScore = 0;
let computerScore = 0;
// let y = prompt("Choose your weapon (Rock, Paper, or Scissors): ").toLowerCase();

//verifying the user's input so that it works in the later function.
function getPlayerChoice(){
let y = prompt("Choose your weapon (Rock, Paper, or Scissors): ").toLowerCase();
        if (y === "rock"){
            console.log ("You chose "+y);
        } else if (y === "scissors"){
            console.log ("You chose scissors!");
        } else if (y === "paper"){
            console.log("You chose "+y);
        } else {
            console.log("ERROR Please choose rock, paper, or scissors");
        }
        return y;

};

//let computer choose a number at random
function getComputerChoice(){
    function getRandomInt(max){
    return Math.floor(Math.random() * max);
    }
    //Convert Int into Strings
    //Print to console which weapon the computer chooses
    let myWeapon = getRandomInt(3);
    if(myWeapon === 0){
        console.log("Computer Chooses Rock!");
        return "rock";
    } else if (myWeapon === 1){
        console.log("Computer Chooses Paper!")
        return "paper";
    } else if (myWeapon === 2){
        console.log("Computer Chooses Scissors!")
        return "scissors";
    }
    return myWeapon;
   
};

// assign the above functions to variables
let playerChoice = getPlayerChoice();

let computerChoice = getComputerChoice();
//compare variables to see who wins and increment score.
function playRound(){
        if (playerChoice === computerChoice){
            console.log("It's a Tie game!");
        } else if (playerChoice === "scissors" && computerChoice === "rock") {
            console.log("The rock smashes your scissors! You Lose!");
            computerScore++;
        } else if (playerChoice === "rock" && computerChoice === "paper"){
            console.log("The paper covers your rock! You Lose!");
            computerScore++;
        } else if (playerChoice === "paper" && computerChoice ==="scissors") {
            console.log(" The Scissors cut your paper! You Lose!");
            computerScore++;
        } else {
            console.log("You frickin did it! You win!")
            playerScore++;
        }
    } // Need to return something useful for the parameters.
//     playRound();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
//     getPlayerChoice();
//     getComputerChoice();
    function fullGame(){
    playRound();
    console.log (playerScore);
    console.log (computerScore);
    //Update player choice and computer choice values.
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    playRound();
    console.log(playerScore);
    console.log(computerScore);
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    playRound();
    console.log(playerScore);
    console.log(computerScore);
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    playRound();
    console.log(playerScore);
    console.log(computerScore);
    }

fullGame();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
//     getPlayerChoice();
//     getComputerChoice();
//     playRound();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
//     getPlayerChoice();
//     getComputerChoice();
//     playRound();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
//     getPlayerChoice();
//     getComputerChoice();
//     playRound();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
// function fullGame(){
//     for (var i= 0; i < 5; i++){
//         console.log(playerChoice);
//         console.log(computerChoice);
//         playRound();
//         alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
//     }
// };


// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
// playRound();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
// playRound();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);
// playRound();
// alert("Player Score is: "+playerScore+ "\nComputer Score is: "+computerScore);

function declareWinner(){
    if (playerScore > computerScore){
        alert("You Win!");
    } else if (playerScore === computerScore) {
        alert ("It's a tie!");
    } else {
        alert ("You lost!");
    }
}

declareWinner();


