"use strict";

var num1 = 5;
var num2 = 10;

function findSum(n) {
  let result = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i;
    }
  }

  return result;
}

console.log(findSum(num2));
