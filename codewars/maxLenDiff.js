"use strict";

// Maximum Length Difference
/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#Example:

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(s1, s2) --> 13
*/

// if (a1.length === 0 || a2.length === 0) return -1
// let l1 = a1.map(str => str.length)
// let l2 = a2.map(str => str.length)
// return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))

let s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz"
];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

let empty = []; // this makes it return a -1

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map(str => str.length); // [ 4, 6, 3, 7, 6, 10, 8, 11, 8, 6 ]
  let l2 = a2.map(str => str.length); // [ 16, 10, 12 ]
  return Math.max(
    Math.max(...l1) - Math.min(...l2),
    Math.max(...l2) - Math.min(...l1)
  );
}

console.log(mxdiflg(s1, s2));

// my style
function mxdiflg2(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  let a1Arr = [];
  let a2Arr = [];

  for (let i = 0; i < a1.length; i++) {
    a1Arr.push(a1[i].length);
  }

  for (let j = 0; j < a1.length; j++) {
    a2Arr.push(a1[j].length);
  }

  let a1Min = Math.min(...a1Arr);
  let a1Max = Math.max(...a1Arr);

  let a2Min = Math.min(...a2Min);
  let a2Max = Math.mas(...a2Max);

  // return both calculations
  return Math.max(a2Max - a1Min, a1Max - a2Min);
}
