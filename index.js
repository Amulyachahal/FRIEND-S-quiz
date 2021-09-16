let readLineSync = require("readline-sync");
let counter = 0;
let quiz = (question, answer) => {
  let userAnswer = readLineSync.question(question);
  if (userAnswer === answer) {
    counter++;
    console.log("Correct!");
  } else {
    console.log("oops *.*");
  }
  console.log("Score : ", counter);
  console.log("------------------");
};

let questionAnswers = [
  {
    question: "Where do i live ? ",
    answer: "pune",
  },
  {
    question: "What is the name of my pet dog ? ",
    answer: "blade",
  },
  {
    question: "Which is my favorite pet animal after dogs ? ",
    answer: "cat",
  },
];

questionAnswers.forEach((value) => {
  quiz(value.question, value.answer);
});
