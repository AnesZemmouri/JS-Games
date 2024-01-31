const prompt = require("prompt-sync")(); 

let wins = 0;
let losses = 0;
let ties = 0;

while(true){
const playerChoice = prompt("Enter rock,paper,scissors (or q to quit): ");
if(playerChoice.toLowerCase() === "q"){
    break
}

if(playerChoice !== "rock" && playerChoice !=="paper" && playerChoice !=="scissors"){
    console.log("please enter a valid Choice!")
    continue;

}

const choices = ["rock","paper","scissors"];
const randomIndex = Math.round( Math.random()*2);
const computerChoice = choices[randomIndex];


 console.log("the computer chose: ",computerChoice)

 if(computerChoice === playerChoice){
    console.log("draw!")
    ties++;
 } else {if((playerChoice === "paper" && computerChoice === "rock") || 
         (playerChoice === "rock" && computerChoice === "scissors") ||
         (playerChoice === "scissors" && computerChoice === "paper"))
         {
             console.log("won!");
               wins++;
         }
        else{
            console.log("lost!")
            losses++;
        }
    }

}
console.log("wins:",wins," ties:",ties," losses:",losses)