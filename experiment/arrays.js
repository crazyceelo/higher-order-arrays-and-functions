// "use strict";

/**
 * repeats the string by the number entered.
 * @param {number} str - any string that needs to be repeated.
 * @param {string} num - number of times the string repeats.
 */
function repeatLog(str, num) {
  return str.repeat(num);
}

console.log(repeatLog("test", 3));

/**
 * checks if a number is
 * an integer
 * @param {number} num - positive, negative, decimal, calculation. Any number
 */
function isInt(num) {
  return num % 1 === 0;
}

console.log(isInt(-1));

/**
 * demonstration of an inner
 * function, and outer function
 * @param {number} a - initial number in the expression
 * that is calculated.
 */
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

console.log(multiply(3)(2));

/**
 * You can use bind to pass
 * a specific object to a
 * function that uses
 * a "this" reference
 */
function fullName() {
  return `hi, this is ${this.first} ${this.last}`;
}

const person = {
  first: "first",
  last: "last"
};

console.log(fullName.bind(person)("asdf", "asdf"));

/**
 * used at the top of a program or at the top of a function. helps write safer
 * javascript code. throws an
 * error if a variable is created by mistake
 * @param {number} val - any number in order to test the
 * use strict literal for javascript.
 * In this case, x is undefined
 */
function strict(val) {
  // "use strict";
  return (x = val + 10);
}

console.log(strict(2));

/**
 *
 * @param {number} num - used to compare and return a bool
 * using an implicit type
 * conversion before equals
 */
function implicit(num) {
  "use strict";
  return "1" == num;
}

console.log(implicit(1));

/**
 *
 * @param {number} num  - used to compare and return a bool using an explicit type equals
 */
function explicit(num) {
  "use strict";
  return "1" === num;
}

console.log(explicit(1));

/**
 * Javascript is not class based. it is prototype based. You can add a method to the global Array object with Object.prototype. Now every array that is created will have the average method.
 */
Array.prototype.average = function() {
  // calculate sum
  var sum = this.reduce((prev, current) => prev + current);

  // return sum divided by number of elements in the array with 'this'
  return sum / this.length;
};

var arr = [1, 2, 3, 4, 5];
var avg = arr.average();
console.log(avg);

/**
 * a callback function is
 * a function passed to
 * another function as an
 * argument (parameter)
 * and is executed after
 * some operation has
 * been compelted. Here is
 * an example of a callback
 * function that logs AFTER
 * some operation has been
 * completed
 * @param {array} arr - initial array
 * @param {function} callback - function that modifies array
 */
function modifyArray(arr, callback) {
  // do something to arra here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr1 = [1, 2, 3, 4, 5];
modifyArray(arr1, function() {
  console.log("array modified ", arr1);
});

/**
 * priv is a private variable
 * cannot access outsive of
 * scope.
 */
// function func() {
//   var priv = "secret code";
// }

/**
 * private variable can be
 * accessed outside of scope
 * with an innerfunction. then
 * setting that function to
 * a variable.
 */
function privateVar() {
  var priv = "secret code";
  return function() {
    return priv;
  };
}

var getPriv = privateVar();
console.log(getPriv());
