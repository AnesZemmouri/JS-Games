const prompt = require("prompt-sync")(); 

console.log("Welcome to CS quizz");
let correctAnswers=0;
const TQ=3;

const answer1 = prompt("Whats the brain of the computer?");
const correctAnswer1 = "CPU"
if(answer1.toUpperCase() === correctAnswer1) {
    console.log("you're right :)")
    correctAnswers=correctAnswers+1
}
else(
    console.log("NOP")
)

const answer2 = prompt("Whats better 3060 or 3080?");
const correctAnswer2 = "3080"
if(answer2.toUpperCase() === correctAnswer2) {
    console.log("you're right :)")
    correctAnswers=correctAnswers+1

}
else(
    console.log("NOP")
)
const answer3 = prompt("Whats the recommended RAM in 2023?");
const correctAnswer3 = "16GB"
if(answer3.toUpperCase() === correctAnswer3) {
    console.log("you're right :)")
    correctAnswers=correctAnswers+1

}
else(
    console.log("NOP")
)
console.log("you got ",correctAnswers, "correct answers :)")
const percent=Math.round((correctAnswers /TQ) * 100)
console.log("your score is : ",percent,"%")


