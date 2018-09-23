// low how many deleted letters it took to make this anagram.

var str1 = "showman";
var str2 = "woman";

function anagramDeltedCount(a, b) {
  // initiate an empty object
  let freqs = {};

  // split both strings their own array
  let splitA = a.split(""); // [ 'c', 'd', 'e' ]
  let splitB = b.split(""); // [ 'a', 'b', 'c' ]

  // puts each element of an array into an object.
  // 0 for matching
  // 1 for non-matching in first array
  // -1 in non-matching in second array
  splitA.forEach(char => (freqs[char] = (freqs[char] || 0) + 1));
  splitB.forEach(char => (freqs[char] = (freqs[char] || 0) - 1));
  /*
     { c: 0, d: 1, e: 1, a: -1, b: -1 }
     
   */

  // places each key into an array
  let newArr = Object.keys(freqs); // [ 'c', 'd', 'e', 'a', 'b' ]

  // adding up the number of removed keys that have +1 and -1
  // all matching are 0,
  // all maching(0) + absolute value of +1 -1 = total.
  return newArr.reduce((zero, ones) => zero + Math.abs(freqs[ones]), 0);
}

console.log(anagramDeltedCount(str1, str2));
