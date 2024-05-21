console.log("hello world");

const rock = 0;
const paper = 1;
const scissors = 2;
const x = [rock,paper,scissors];

function getComputerChoice(){
    function getRandomInt(max){
    return Math.floor(Math.random() * max);
    }
    return getRandomInt(3);
   
}

console.log(getComputerChoice());

function incrementScore(){
    if (getComputerChoice() === rock) {
        console.log ("okay");
    }
    // console.log ("Rock");
}

console.log(incrementScore());
// const playerChoice = prompt ("Choose rock, paper, or scissors");
// console.log("Your number is "+getRandomInt(3));