// create a game where you start with any random game number. ask uset to keep gussing the game number untilthe user enter correct value.

let gameNum = 18;
let userNum = prompt("guess the game number ");

while (userNum != gameNum) {
  userNum = prompt("Your entered wrong number. guess again:");
}
console.log("congratulation, you entered the right number");
