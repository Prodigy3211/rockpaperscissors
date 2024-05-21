console.log("hello world");

const playerChoice = prompt ("Choose rock, paper, or scissors");
const rock = 0;
const paper = 1;
const scissors = 2;
const x = [rock,paper,scissors];

function getRandomInt(max){
return Math.floor(Math.random() * max);
    
}

// function getComputerChoice(){
//     Math.random(x);
//     return x;
// }

console.log("Your number is "+getRandomInt(3));