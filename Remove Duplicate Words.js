function RemoveDuplicateWords(txt) {
  let txtToArray = txt.split(" ");
  let uniqueWords = [];

  for (let i = 0; i < txtToArray.length; i++) {
    if (!uniqueWords.includes(txtToArray[i])) {
      uniqueWords.push(txtToArray[i]);
    }
  }

  return uniqueWords.join(" ");
}

console.log(RemoveDuplicateWords("hi ahmed hi hi mo mo hi ahmed")); // hi ahmed mo
