// figure out which numbers in the array are pos, neg, and zero
// and then get the count of the specific type and divide it by
// the full array length
var arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let length = arr.length;
  let posArr = [];
  let negArr = [];
  let zeroArr = [];

  for (let i = 0; i < length; i++) {
    // Math.sign checks to see if each
    // number in the array is pos, neg,
    // or zero and lists it like that.
    // e.g. 0,0,1,1,-1,-1. Then you can
    // push to array and count the array
    // length for each array with the
    // specific number type
    let test = Math.sign(arr[i]);
    if (test === 1) {
      posArr.push(test);
    } else if (test === -1) {
      negArr.push(test);
    } else {
      zeroArr.push(test);
    }
  }
  console.log(posArr.length / length);
  console.log(negArr.length / length);
  console.log(zeroArr.length / length);
}

plusMinus(arr);
