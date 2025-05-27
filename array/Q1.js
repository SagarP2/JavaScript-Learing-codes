// for a given array with marks of student -> [85,97,53,65,72,50]. find the average of the entire class.

let marks = [85, 97, 53, 65, 72, 50];
let sum = 0;
for (let val of marks) {
  sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of class =${avg}`);
