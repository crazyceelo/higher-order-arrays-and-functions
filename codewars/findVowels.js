// find the index of the vowels in a word.

const test = "super";

function vowelIndices(word) {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var ans = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) >= 0) {
      ans.push(i + 1);
    }
  }
}

console.log(vowelIndices(test));

// function vowelIndices(word) {
//   var arr = [];
//   for(var i = 0; i < word.length; i++) {
//     if(/[aeioyu]/i.test(word[i])) {
//       arr.push(i+1);
//     }
//   }
//   return arr;
// }

// function vowelIndices(word,a=[]){
//   return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
// }

// const vowelIndices = word => {
//   return word.split('').map((x, i) => {
//     return x.match(/[aeiouy]/i) ? i + 1: x
//   }).filter(x => x === +x);
// }

// function vowelIndices(word) {
//   return [...word].reduce(function(a, c, i) {
//     return /[aeiouy]/i.test(c) ? a.concat([i+1]): a
//   }, []);
// }

// function vowelIndices(word){
//   const vowels = ['a', 'i','e', 'o', 'u', 'y']
//   let indexes = []
//   const lowerWord = word.toLowerCase()
//   let index = 0

//   for(let i = 0; i < lowerWord.length; i++){
//     index ++
//     for(let j = 0; j < vowels.length; j ++){
//       if(lowerWord[i] === vowels[j]){
//         indexes.push(index)
//       }
//     }
//   }

//   return indexes
// }
