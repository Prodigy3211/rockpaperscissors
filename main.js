console.log("hello world");

// const x = [rock,paper,scissors];
let playerScore = 0;
let compterScore = 0;

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

function getComputerChoice(){
    function getRandomInt(max){
    return Math.floor(Math.random() * max);
    }
    //Convert Int into Strings
    let myWeapon = getRandomInt(3);
    if(myWeapon === 0){
        return "rock";
    } else if (myWeapon === 1){
        return "paper";
    } else if (myWeapon === 2){
        return "scissors";
    }
   
};

// console.log(getRandomInt());

// const result = function roundBattle(a,b){
//         if (a === b){
//             console.log ("It's a Tie game!");
//         } else {
//             console.log ("Error!");
//         }
// }


function playRound(playerChoice,computerChoice){
    if (playerChoice === computerChoice){
        console.log("It's a Tie game!");
    } else {
        console.log("This better be working!");
    }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(getPlayerChoice());
console.log(getComputerChoice());
playRound();
// // console.log(getComputerChoice());

// // function incrementScore(){
// //     if (getComputerChoice() === rock) {
        
//     }
//     // console.log ("Rock");
// }


// console.log (result(playerChoice(),getComputerChoice()));
// console.log(incrementScore());
// const playerChoice = prompt ("Choose rock, paper, or scissors");
// console.log("Your number is "+getRandomInt(3));