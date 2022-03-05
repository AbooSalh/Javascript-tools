let sentence = "your paragraph  or words"
let lest = sentence.trim().split(" ")
let check = lest.reduce((acc,current)=>{
    return acc.length > current.length ? acc : current;
})
console.log(check);
//hi world 
