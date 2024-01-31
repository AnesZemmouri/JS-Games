const prompt = require("prompt-sync")(); 

const target = Math.round(Math.random()*100);

let guesses = 0;
while(true){
    guesses++;
 const guess = Number(prompt("Guess the number between 0~100: "));

 if(guess>target){
    console.log("your guess is too high")
 }
 else{
    if(guess<target){
        console.log("your guess is too low")
    }else{
        console.log("you guessed it")
        break
    }
 }
}
console.log("you guessed in",guesses,"tries!")