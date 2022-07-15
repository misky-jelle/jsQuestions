// class Student{
//     constructor(name,age,gender,hobby){
//         this.name=name
//         this.age=age
//         this.gender=gender
//         this.hobby=hobby
// }
// }
// let studentMisky=new Student("Misky","22","Female","coding");
// let studentMuna=new Student("Muna","20","female","shopping")
// console.log(studentMisky);
// console.log(studentMuna)
// // try using arrays inorder not to repeat yourself incase you have more than 10 people???????
// Student.prototype.nationality="Kenyan"
// console.log(studentMisky.nationality);
// Student.prototype.nationality=function(nationality){
//     return `i am ${nationality}`
// }

// console.log(studentMuna.nationality("Ugandan"));

// Function Constractor

function Student(name,age,gender){
    this.age=age
    this.name=name
    this.gender=gender
}
let student=new Student("jane","22","Male")
console.log(student);