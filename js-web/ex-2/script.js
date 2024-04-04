const prompt = require('prompt-sync')();

let score = prompt("Enter a score: ");
score = parseInt(score);

if (!isNaN(score)) {
  if (score >= 80 && score < 100) {
    console.log("the score is A ");
  } else if (score >= 70 && score < 80) {
    console.log("the score is B ");
  } else if (score >= 60 && score < 70) {
    console.log("the score is C ");
  } else if (score >= 50 && score < 60) {
    console.log("the score is D ");
  } else {
    console.log("the score is F ");
  }
} else {
  console.log("Please enter a valid score.");
}
