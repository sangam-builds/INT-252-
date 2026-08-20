let marks= [1,2,4,5,6]
let total= marks.reduce((add , mark)=>{
return add+mark
})
console.log(marks)

// array destructuring

let [a,,,b,c]=marks
console.log(a);
console.log(b);
console.log(c);

let student={
    name:"Sangam",
    age:20,
    course:"Btech"
}

let {name,age,course}=student
console.log(name,age,course)

// spread operator

// let studnets= ["abc","xyz","qwerty","sdfgh"]
// let newstudents=[...studnets,"tyuio"];
// console.log(newstudents);
// console.log(studnets);

function summ(... numbers){
    console.log(numbers)
}


summ(10,20,30,40)
