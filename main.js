console.log("hello world");

const rock = 0;
const paper = 1;
const scissors = 2;
const x = [rock,paper,scissors];
let playerScore = 0;
let compterScore = 0;

function playerChoice(){
    let y = prompt("Choose your weapon: ");
        if (y === "rock"){
            console.log ("You chose "+y);
        } else if (y === "scissors"){
            console.log ("You chose scissors!");
        } else if (y === "paper"){
            console.log("You chose "+y);
        } else {
            console.log("ERROR Please choose rock paper or scissors");
        }

}

// function getComputerChoice(){
//     function getRandomInt(max){
//     return Math.floor(Math.random() * max);
//     }
//     return getRandomInt(3);
   
// }

// // console.log(getComputerChoice());

// // function incrementScore(){
// //     if (getComputerChoice() === rock) {
        
//     }
//     // console.log ("Rock");
// }

playerChoice();
// console.log(incrementScore());
// const playerChoice = prompt ("Choose rock, paper, or scissors");
// console.log("Your number is "+getRandomInt(3));