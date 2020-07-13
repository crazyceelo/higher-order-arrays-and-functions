// this is a bubble sort with swapCount;
var arr = [4, 3, 1, 2];

let swapCount = 0;

// helper
function swap(array, i, j) {
  swapCount++;
  let temp = array[i];
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



//helper
function swap2(array, i, j){
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubbleSort2(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
      if(array[j-1] > array[j]){
        swap(array, j-1, j)
      }
    }
  }
  let test = array.join("")
  return test
}


console.log(bubbleSort2(arr))
