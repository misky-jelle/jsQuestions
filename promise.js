let childPass=true
let promise= new Promise(function(resolve,reject){
    if (childPass){
        resolve("You passed")
}
   else{
reject("You failed")
}}).then((passed)=> console.log(passed)) 
.catch((error)=> console.log(error))
.finally(()=> console.log("You can be whoever you want to be")) 
console.log(promise);
// or
// }});
// promise.then().catch().finally()
// console.log(promise);


// Async function
async function man(){
    let boy=await promise
    console.log(boy);
    console.log("Promises are fun");
}
man();
let person={
    name:"Hellen",
    age:34,
    class:"Hopper Lab"
}
let {name, ...people}=person;
console.log(name);
console.log(people);
// still brings undefined