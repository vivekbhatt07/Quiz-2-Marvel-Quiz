var chalk = require("chalk");
var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name : ");
var welcomeMessage = "Welcome ! " + userName;
console.log(welcomeMessage);
console.log("--------------------------------------------")

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("You entered : " + userAnswer);
  if(userAnswer === answer){
    console.log("Right ! ");
    score = score + 1;
  }else{
    console.log("Wrong ! ")
  }
  console.log("You scored : " + score);
  console.log("--------------------------------------------")
}

questionOne = {
  question : "What is the name of Thor’s hammer ? ",
  answer : "Mjolnir"
}

questionTwo = {
  question : "What is Captain America’s shield made of ? ",
  answer : "Vibranium"
}

questionThree = {
  question : "What is the alien race Loki sends to invade Earth in The Avengers ? ",
  answer : "Chitauri"
}

questionFour = {
  question : "Who does the Mad Titan sacrifice to acquire the Soul Stone ? ",
  answer : "Gamora"
}

questionFive = {
  question : "Who is killed by Loki in the Avengers ? ",
  answer : "Agent Coulson"
}

questionSix = {
  question : "Who is Black Panther’s sister ? ",
  answer : "Shuri"
}

questionSeven = {
  question : "How many Infinity Stones are there ? ",
  answer : 6
}

questionEight = {
  question : "Which film did The Aether first appear in ? ",
  answer : "Thor 2"
}

questionNine = {
  question : "In which film’s post-credit scene did Thanos first appear ? ",
  answer : "Avenger"
}

questionTen = {
  question : "Which of the infinity stones is hidden on Vormir ? ",
  answer : "Soul stone "
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
