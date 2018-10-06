var x = "cdcdcdcdeeeef"; // yes
var y = "cdefghmnopqrstuvw"; // no
var z = "aaabbbb"; // yes

function gameOfThronesAnagramPalindrome(s) {
  var chars = s.split(""); //[ 'a', 'a', 'a', 'b', 'b', 'b', 'b' ]
  var counter = {}; // why? to do key interpolation
  var result = 0; // to see if divisible by 2

  for (var i = 0; i < chars.length; i++) {
    // the if statements uses key interpolation
    if (counter[chars[i]]) {
      counter[chars[i]] += 1;
      // undefined
    } else {
      counter[chars[i]] = 1;
      // logs numbers
    }
  }

  // at this point the counter object is
  // { a: 3, b: 4 }

  for (var i in counter) {
    var data = counter[i]; // values 3,4
    if (data % 2) {
      result += 1;
    }
  }

  if (result > 2) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(gameOfThronesAnagramPalindrome(y));
