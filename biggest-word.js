let lest = ["your","paragraph","or","words"]
let check = lest.reduce((acc,current)=>{
    return acc.length > current.length ? acc : current;
})
console.log(check);
//hi world 
