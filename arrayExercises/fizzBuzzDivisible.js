var test = 50;
var test2 = 55;
var test3 = 100;
var test4 = 15;

function fizzBuzz(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log("Value of i is " + i);
    }
  }
}

fizzBuzz(test4);
