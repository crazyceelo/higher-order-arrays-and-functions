// Method 1: 
// use built in functions in node.js and JS.
let array1 = [2,5,6,10]
let array2 = [1,4,5, 15]
let array3 = array1.concat(array2)
array3.sort((a,b) => a-b)
console.log(array3)  // [ 1, 2,  4, 5, 5, 6, 10, 15 ]





// Method 2: 
// swap positions on the index if the number to the left is bigger than the one on the right. 
// continue until all numbers to the left are no longer bigger than the ones on the right.
// numbers should now be sorted.
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function testSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

console.log(testSort(array3)); // [ 1, 2,  4, 5, 5, 6, 10, 15 ]


