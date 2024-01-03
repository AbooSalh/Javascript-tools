function removeChars(txt, ...chars) {
  let res = txt;
  for (let i = 0; i < chars.length; i++) {
    let forArr;
    chars.map((char) => {
      res = removeChar(res, char);
    });
  }
  return res;
}
function removeChar(txt, c) {
  const txtToArray = txt.split("");
  return txtToArray
    .filter((char) => {
      return char !== c.toLowerCase() && char !== c.toUpperCase();
    })
    .join("");
}
console.log(
  removeChars(
    "i d##$on't want th@o$s$e@#$@@ ch@ar$s @here@@@ an@y $#m@ore",
    "@",
    "#",
    "$"
  )
);
// i don't want this char here any more
