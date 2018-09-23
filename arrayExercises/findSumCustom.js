var arr = [5, 3];

function findSum(array) {
  let total = 0;
  array.forEach(element => {
    total = element + total;
  });
  return total;
}

console.log(findSum(arr));

function findSum2(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}

console.log(findSum2(arr));

function findSum3(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

console.log(findSum3(arr));

function findSum4(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(findSum4(arr));

function findSum5(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

console.log(findSum5(arr));
function findSum6(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(findSum6(arr));

function findSum7(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

console.log(findSum7(arr));

console.log(arr.reduce((a, b) => a + b));

function findSum8(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

console.log(findSum8(arr));
