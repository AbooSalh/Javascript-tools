function theMissingLetter(txt) {
  const allWords = "abcdefghijklmnopqrstuvwxyz";
  let start = allWords.indexOf(txt[0]);
  let notMatched = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] !== allWords[start + i]) {
      notMatched += allWords[start + i];
    }
  }
  if (notMatched.length > 0) {
    return (
      "the missing letter " +
      (notMatched.length == 1 ? "is " : "are ") +
      notMatched.split("").join(",")
    );
  }
  return "no missing letter";
}
// test
console.log(theMissingLetter("abc")); // no missing letter
console.log(theMissingLetter("defgi")); // the missing letter is h
console.log(theMissingLetter("abcgi")); // the missing letter are d,e
