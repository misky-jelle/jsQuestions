// function person(){
//     console.log("Hi Misky")
// }
// person()

// function family(){
//     var a=20;
//     function son(){
//         console.log(a+10)
//     }
//     son()
// }
// family()

// let greetings=["Hello","Hi"]
// console.log({greetings});

// let b=new Array(2,4,5,9);
// b.unshift(34);
// b.shift();
// b.pop()
// b.push()
// console.log({b});


let c=new Array(3,5,8,99,35);
let x=c.map(c => c*2)
console.log(x);
c[1]=35
console.log(c[0]);

let oddNumbers=c.filter(item => item%2 !==0)
console.log({oddNumbers});

// let fruits=["AppLe","MaNgo","ORANGe"];
// let newFruits=fruits.map(item=>item.toLocaleLowerCase())
// console.log(newFruits);
// let fruit=["AppLe","MaNgo","ORANGe"];
// let newFruit=fruit.map(item=>(
//     if (item!==item.toLocaleLowerCase()){
// return item.toLocaleUpperCase()
//     }
// )
// console.log(newFruit);

