let string = "your string here";
let list = string.split(" ");
let random = Math.floor/* or Math.trunc*/(Math.random() * list.length);
console.log(list[random]);
