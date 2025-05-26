// Get user to input a number using prompt ( Enter a number ). Check if the numberis a multiple od 5 or Not.

let num = prompt("Enter a number:");

if (num % 5 === 0) {
  console.log(num, "is a multiple of 5");
} else {
  console.log(num, "is Not a multiplenof 5");
}
