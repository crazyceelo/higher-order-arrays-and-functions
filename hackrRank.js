/**
 * all indexes shift to the left 4 times in an array if d is 4
 * @param {array} a
 * @param {number} d
 */
function rotLeft(a, d) {
  // loop through 4 the number of
  // times it is defined as
  for (let i = 0; i < d; i++) {
    // define length of array
    let length = a.length; // 4

    // first index
    let first = a[0]; // 1

    for (let i = 1; i < length; i++) {
      a[i - 1] = a[i];
    }

    a[length - 1] = first;
  }
  console.log(a.join(" "));
}

// initialize
rotLeft([1, 2, 3, 4, 5], 4);
