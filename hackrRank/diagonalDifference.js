var arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

// Complete the diagonalDifference function below.
//
function diagonalDifference(arr) {
  // the length of all arrays and the length of 1 array
  // has to be the same in order for this to work.
  let numOfArr = arr.length; // 3
  let arrLength = arr[0].length; // 3

  if (numOfArr === arrLength) {
    let fullArray = [];
    let iterator = 0;
    let reverseIterator = 0;
    for (var i = 0; i < numOfArr; i++) {
      for (var j = 0; j < arrLength; j++) {
        // push all arrays into one array
        fullArray.push(arr[i][j]);
      }
    }

    // iterator is always 1 number greater than arrLength
    iterator = arrLength + 1;
    // reverse iterator isalwyas 1 number less than arrLength
    reverseIterator = arrLength - 1;

    let tempLeft = [];
    let tempRight = [];
    let left = 0;
    let right = 0;

    // iterate from left to right and create an array of only
    // the diagonal numbers
    for (var x = 0; x < fullArray.length; x = x + iterator) {
      let tempArr = [];
      tempLeft.push(fullArray[x]);
    }

    // iterate from right to left and create an array of only
    // the diagonal numbers in reverse order, but use a different
    // starting point.
    for (var y = fullArray.length - arrLength; 0 < y; y = y - reverseIterator) {
      tempRight.push(fullArray[y]);
    }

    // add all diagonal numbers in an array for both left and right diagonal
    left = tempLeft.reduce((a, b) => a + b);
    right = tempRight.reduce((a, b) => a + b);

    // make it always subtract the small number from the big
    // number.
    if (left < right) {
      return right - left;
    } else {
      return left - right;
    }
  }
}

console.log(diagonalDifference(arr));
