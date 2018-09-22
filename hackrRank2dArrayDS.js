// initial array
var arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

let totals = [];

for (let i = 0; i < 4; i++) {
  // deconstructs array
  const [a0, a1, a2] = arr;

  // this would be arr[0], but the
  // deconstruction is in a loop, so tmp0
  // will get reassigned 4 times.
  // I see. after the shfit() occurs to the
  // left, it makes a new array.
  let tmp0 = Object.assign([], a0);
  let tmp1 = Object.assign([], a1);
  let tmp2 = Object.assign([], a2);

  // same loop as before but with only
  // a single array rather than an array
  // of arrays
  for (var y = 0; y < 4; y++) {
    // deconstructs index 0,1,2
    let [e, r, t] = tmp0;

    // loop shifts to right one
    // and calculates the next three
    const top = e + r + t;

    // deconstruct middle. You don't need the h, but the h is there to start somewhere
    // user will use the j though becuase
    // it is the center of the hour glass
    let [h, j] = tmp1;

    // deconstruct the third row
    let [o, p, l] = tmp2;
    const bottom = o + p + l;

    // add top, middle, and bottom
    // in a loop for 4 times.
    totals.push(top + j + bottom);

    // removes the first element from an array. This loops 4 times
    // this changes length of array
    tmp0.shift();
    tmp1.shift();
    tmp2.shift();
  }
  arr.shift();
}
const max = Math.max(...totals);
console.log(max); // debut output
return max; // output
