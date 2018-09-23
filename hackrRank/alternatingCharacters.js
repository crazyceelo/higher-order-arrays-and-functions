// this actually  removes duplicates
var oldString = "Aaabbcccccccd*def%gGGhhhijkklmnoP\\122";
var filtered = oldString.replace(/[^\w\s]|(.)(?=\1)/gi, "");

console.log(filtered);

var count = 0;

// -----------
// this one actually counts hoe many
// duplicates there are

var otherString = "Aaabbcccccccd*def%gGGhhhijkklmnoP\\122";

var count = 0;
otherString.split("").reduce((previous, current) => {
  if (previous === current) {
    count++;
  }
  return current;
}, "");

console.log(count);
