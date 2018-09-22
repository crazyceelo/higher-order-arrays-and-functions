var arr = [4, 3, 1, 2];
var swapCount = 0;

// helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swapCount++;
      swap(array, i, min);
    }
  }
  // return array;
  return swapCount;
}

console.log(selectionSort(arr));
