var arr = [4, 3, 1, 2];

function quickSortBasic(array) {
  if (array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quickSortBasic(lesser).concat(pivot, quickSortBasic(greater));
}

console.log(quickSortBasic(arr));
