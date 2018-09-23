// O(1) = constant time complexity
function stupidFunction(array) {
  total = 0; // O(1)
  return total; // O(1)
}

// O(n) = linear time complexity
// how much time does it take to execute
// each of these lines?
function findSum(array) {
  let total = 0; // O(1)

  for (let i = 0; i < array.length; i++) {
    // O(1)
    total += array[i]; // this makes it O(N)
  }

  return total; // O(1)
}

var twoDimentionalArray = [[1, 2, 3], [5, 5, 4], [6, 3, 4]];

// O(n) squared = quadratic time complexity
function find2dSum(array) {
  total = 0;
}
