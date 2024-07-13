document.addEventListener('DOMContentLoaded', () => {

//declare starting scores
let playerScore = 0;
let computerScore = 0;

// function selectRock (){
//    let w = "rock";
   
//    if (w === "rock"){
//     console.log ("You Chose Rock!");
//    }
// };


// Button Event Listeners

const buttons = document.querySelectorAll("button");



//You need to figure out how to turn an arrow function into a variable?



buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const playerChoice = event.target.value;
        playGame(playerChoice);
    });
});

//get computer's choice function

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Play Game function

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const scoreCard = choiceComparison(playerChoice,computerChoice);
    scoreBoard(playerChoice, computerChoice, scoreCard);
}

//function to compare choices and give a score

function choiceComparison(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        return "Tie Game!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You fricking did it! You Win!";
    } else {
        return "You LOST! Dang..."
    }
}

function scoreBoard (playerChoice, computerChoice, scoreCard) {
    const resultDiv = document.getElementById('scoreCard');
    resultDiv.innerHTML = `
    <p> You chose: ${playerChoice}</p>
    <br>Computer chose: ${computerChoice}
    <br>${scoreCard}
    `;
}

});

// buttonScissors.addEventListener("click", () => {
//     let y = buttonRock.value;
//     document.getElementById('playerWeaponDisplay').innerHTML =
//     buttonScissors.value;
// });





// buttonPaper.addEventListener("click", () => {
//     document.getElementById('playerWeaponDisplay').innerHTML =
//     buttonPaper.value;
//     return buttonPaper.value;
// });


// function getPlayerChoice(){
//     if(buttonRock.addEventListener("click", playerChoosesRock()
//         // document.getElementById('playerWeaponDisplay').innerHTML =
//         // buttonRock.value;
// )){
            
//         console.log("ROCK ON!");
//     } else if (buttonScissors = "scissors"){
//         console.log("SCISSORSSSSSSS");
//     } else {
//         console.log("PAPPPPEEPPEPR");
//     }
// }

// function playerChoice(event){
//     playerChoice = event.target.value;
//     console.log(playerChoice);
//     playALittleRound();
// }



//  buttons.forEach(buttons => {
//     buttons.addEventListener("click", playerChoice => {
    
//     document.getElementById('playerWeaponDisplay').innerHTML =
//     buttons.value;
   
//     })
   
// }); 

// function getPlayerChoice(){
//     let y =  buttons.addEventListener("click", () =>  {
//         if (y == "rock"){
//             console.log ("You chose "+y);
//         } else if (y === "scissors"){
//             console.log ("You chose scissors!");
//         } else if (y === "paper"){
//             console.log("You chose "+y);
//         } else {
//             console.log("ERROR Please choose rock, paper, or scissors");
//         }
//         return y;
// });
// }

//let computer choose a number at random


 

// assign the above functions to variables
// let playerChoice = playerPlayerChoice;

// let computerChoice = getComputerChoice();
// //compare variables to see who wins and increment score.
// function playRound(){
//         if (playerChoice === computerChoice){
//             console.log("It's a Tie game!");
//         } else if (playerChoice === "scissors" && computerChoice === "rock") {
//             console.log("The rock smashes your scissors! You Lose!");
//             computerScore++;
//         } else if (playerChoice === "rock" && computerChoice === "paper"){
//             console.log("The paper covers your rock! You Lose!");
//             computerScore++;
//         } else if (playerChoice === "paper" && computerChoice ==="scissors") {
//             console.log(" The Scissors cut your paper! You Lose!");
//             computerScore++;
//         } else {
//             console.log("You frickin did it! You win!")
//             playerScore++;
//         }
//     }



    // buttonRock.addEventListener("click", getPlayerChoice());

    


// play a round using the code above

    // function fullGame(){
    //     playRound();
    //         console.log (playerScore);
    //         console.log (computerScore);
    //Update player choice and computer choice values.
    //             playerChoice = getPlayerChoice();
    //             computerChoice = getComputerChoice();
    //     playRound();
    //         console.log(playerScore);
    //         console.log(computerScore);
    //             playerChoice = getPlayerChoice();
    //             computerChoice = getComputerChoice();
    //     playRound();
    //         console.log(playerScore);
    //         console.log(computerScore);
    //             playerChoice = getPlayerChoice();
    //             computerChoice = getComputerChoice();
    //     playRound();
    //         console.log(playerScore);
    //         console.log(computerScore);
    // }

// fullGame();


// function declareWinner(){
//     if (playerScore > computerScore){
//         alert("You Win!");
//     } else if (playerScore === computerScore) {
//         alert ("It's a tie!");
//     } else {
//         alert ("You lost!");
//     }
// }

// declareWinner();