// this is a bubble sort with swapCount;
var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

let swapCount = 0;

// helper
function swap(array, i, j) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  let test = array.join("");
  return test;
}

console.log(bubbleSort(arr));

function bubbleSort2(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  let join = array.join(" ");
  return join;
}

console.log(bubbleSort2(arr));

function bubbleSort3(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

console.log(bubbleSort3(arr));

function bubbleSort4(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array.join(" ");
}

console.log(bubbleSort4(arr));
