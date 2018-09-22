var selection = [4, 3, 1, 2];
var count = 0;

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
        count++;
        min = j;
      }
    }
    if (i !== min) {
      swap(array, i, min);
    }
  }
  return count;
}

console.log(selectionSort(selection));
