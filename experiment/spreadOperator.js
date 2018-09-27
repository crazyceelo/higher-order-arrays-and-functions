"use strict";

function addNumbers(a, b, c) {
  return a + b + c;
}

let arr = [1, 2, 3, 4, 3, 1, 2, 3, 12];

console.log(Math.max(...arr)); // 1+2+2 = 6

let meats = ["bacon", "ham", "beef"];
let fruits = ["apple", "melon", "banana", "kiwi", "pineapple", "dragonfruit"];
let vegetables = ["celery", "onion"];

let allFoods = [...meats, ...fruits, ...vegetables];

console.log(allFoods);
