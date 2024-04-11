let myNum = 30;
let userNum = prompt("guess A number:");
while (userNum != myNum) {
  userNum = prompt("  wrong number, guess A number:");
}

console.log("congrats your guessed the right number!");
