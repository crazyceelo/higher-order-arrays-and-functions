// make a palindrome
// and check to see if original
// stirng matches the reverse order
// to verify it is a palindrome
// and return true/false

test1 = "dad";
test2 = "cat";

function palindrome(str) {
  let newstr = str
    .split("")
    .reverse()
    .join("");

  if (newstr === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(test1));
console.log(palindrome(test2));
