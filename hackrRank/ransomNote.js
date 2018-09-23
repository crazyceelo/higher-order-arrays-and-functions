// checking and comparing unequal arrays

var magazine = ["give", "me", "one", "grand", "today", "night"];
var note = ["give", "one", "grand", "today"];

function checkMagazine(magazine, note) {
  var match = "No";

  for (var i = 0; i < magazine.length; i++) {
    for (var j = 0; j < note.length; j++) {
      if (magazine[i] == note[i]) {
        match = "No";
      } else {
        match = "Yes";
      }
    }
  }
  console.log(match);
}

checkMagazine(magazine, note);
