var str = "test";
var num = 1;
var bool = true;
var arr = [];
var obj = {};

function isString(str) {
  if (Object.prototype.toString.call(str) === "[object String]") {
    return true;
  } else {
    return false;
  }
}

console.log(isString(str));
