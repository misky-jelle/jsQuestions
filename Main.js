// Destructuring
// let num=[2,5,8,9]
// let [a,b,c,d]=num
// console.log({a});
// console.log({b});
// console.log({c});
// console.log({d});

// let m=[2,3,4,5]
// let[i,j,...others]=m;
// console.log(others);

// let person={
//     name:"Hellen",
//     age:34,
//     class:"Hopper Lab"
// }
// let {name, ...people}=person;
// console.log(name);
// console.log(people);



//day 2 100 days of code

setTimeout(function(){
    console.log("Hopper Lab");

},5000)
let person={
    name:"Hellen",
    age:34,
    class:"Hopper Lab"
}
let {name, ...people}=person;
console.log(name);
console.log(people);
