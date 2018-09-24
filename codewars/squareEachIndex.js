var array = [1, 2, 3, 4, 5, 6];

function squareSum(numbers) {
  let arr = [];
  let newArr = arr;

  for (let i = 0; i < numbers.length; i++) {
    let test = Math.pow(numbers[i], 2);
    arr.push(test);
  }

  return newArr.reduce((a, b) => a + b, 0);
}

console.log(squareSum(array));
