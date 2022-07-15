let person={
    name:"John",
    age:20,
    gender:"Female",
    favourites:(activity)=>`I love ${activity}`, //use backtics(`` in the button before 1)
    hobby:function(activity){
        return `My name is ${this.name} and I love ${activity}`
}
    }
console.log(person.age);
let student=Object.create(person);
student["name"]="Mary"
student["age"]=29
student.gender="male"
console.log(student.name);
// console.log(student.age);
console.log(student.gender);
// how to add a property inside an object
person.country="Malaysia"
person["nationality"]="Malaysian"
console.log(person);
console.log(person.hobby("coding"));
console.log(person.favourites("drawing"));