const prompt = require("prompt-sync")();
console.log("Welcome to the computer hardware quiz game!")

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("What is the brain of a computer? ");
const correct_answer1 = "CPU";

if(answer1.toUpperCase() === correct_answer1){
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("ops try again....");
}

const answer2 = prompt("Who was the fathet of computer? ");
const correct_answer2 = "charles";

if(answer2.toLowerCase() === correct_answer2){
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("ops try again....");
}

const answer3 = prompt("In what state are real numbers? ");
const correct_answer3 = "decimal";

if(answer3.toLowerCase() === correct_answer3){
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("ops try again....");
}

const percent = Math.round((correctAnswers / totalQuestions)*100);

console.log("You got", correctAnswers, "correct answers");
console.log("You got", percent.toString() + "%")
