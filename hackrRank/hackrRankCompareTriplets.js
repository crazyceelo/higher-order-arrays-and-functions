var a = [5, 6, 7];
var b = [3, 6, 10];

function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;

  // if length of a and b are euqual

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (a[i] < b[i]) {
      bobPoints++;
    }
  }
  return alicePoints.toString() + " " + bobPoints.toString();
}

console.log(compareTriplets(a, b));
