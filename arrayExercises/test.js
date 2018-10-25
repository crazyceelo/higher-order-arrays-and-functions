// palindrome
let word = "dad";
let word2 = "stuff";

//
let arr = [];

function palindrome(x) {
  // x is original string
  let original = x;
  // console.log(original);

  let arr = x.split(""); // stuff => [s,t,u,f,f]

  let newWord = arr.reverse(); // [f,f,u,t,s]
  let test = newWord.join(""); // [f,f,u,t,s] => ffuts
  // console.log(test);

  if (original === test) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(word));
console.log(palindrome(word2));

// launch setup

describe('palindrome test cases'){
  it('should return a palindrome true', (done) => {
    expect(pandrome(word).to.equal(true));
    done();
  })
  
  it('should return a palindrome false', (done) => {
    expect(pandrome(word2).to.equal(false));
    done();
  })
}


// close


