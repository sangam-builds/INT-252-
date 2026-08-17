// function multipluction(a,b){
//     return a*b
// }

// let product = (a,b)=>{
//     return a*b
// }

// let fruits= ["mongo","apple","banana","pineapple"]
// fruits.forEach(function(fruits){

//     console.log(fruits);
// })


let marks=[50,60,70,80,90]
let newmarks= marks.map(mark=>{
    return mark+5;
})
console.log(newmarks);

let fruits= ["mongo","apple","banana","pineapple"]
let newfruits= fruits.map(fruit=>{
    return fruit+"abc";
})
console.log(newfruits);