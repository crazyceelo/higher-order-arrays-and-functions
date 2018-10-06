// find the one number that appears and odd number amount of times

var arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

function findOdd(a) {
  var len = a.length; // 17
  var sortedArr = a.sort(); // [ -1, -1, -2, -2, 1, 1, 2, 2, 20, 20, 3, 3, 4, 4, 5, 5, 5 ]

  var count = {};

  // for each element in the sortedArr.
  sortedArr.forEach(i => {
    count[i] = (count[i] || 0) + 1;
  });

  // for every key in count
  for (var key in count) {
    // checks if key has its own property
    if (count.hasOwnProperty(key)) {
      // if any key is not divisible by 2
      if (count[key] % 2 !== 0) {
        return Number(key);
      }
    }
  }
}

console.log(findOdd(arr)); // 5
