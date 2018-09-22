// this is a bubble sort with swapCount;
var arr = [4, 3, 1, 2];

let swapCount = 0;

var swapped;
do {
  swapped = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
      swapCount++;
      swap(arr, i, i + 1);
      swapped = true;
    }
  }
} while (swapped);

// console.log(arr);
// return swapCount;

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
