// "use strict";

let stringOfNumbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";

function highAndLow(numbers) {
  let arr = numbers.split(" ");

  let arrMax = Math.max(...arr);
  let arrMin = Math.min(...arr);

  return `${arrMax} ${arrMin}`;
}

console.log(highAndLow(stringOfNumbers));

// -----

function highAndLow2(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

console.log(highAndLow2(stringOfNumbers));

// ----
function highAndLow3(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow3(stringOfNumbers));
