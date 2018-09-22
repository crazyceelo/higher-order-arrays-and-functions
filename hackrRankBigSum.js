var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(array) {
  let sum = array.reduce((a, b) => a + b);
  return sum;
}

console.log(aVeryBigSum(arr));
