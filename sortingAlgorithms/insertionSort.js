var arr = [4, 3, 1, 2];
var swapCount = 0;

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      swapCount++;
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  // return array;
  return swapCount;
}

console.log(insertionSort(arr));
