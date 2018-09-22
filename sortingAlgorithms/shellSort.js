// array to sort
var arr = [4, 3, 1, 2];
var swapCount = 0;

// gaps
var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellSort(array) {
  for (var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for (var i = gap; i < array.length; i++) {
      var temp = array[i];
      for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        swapCount++;
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  // return array;
  return swapCount;
}

console.log(shellSort(arr));
