const User  = require("./06classjs.js");

const Rahul = new User("Rahul", "rahul@gmail.com");
const Rahul2 = new User("Rahul2", "rahul2@gmail.com");

console.log(Rahul.getInfo());
console.log(Rahul2.getInfo());

Rahul.enrollCourse("React JS");
Rahul2.enrollCourse("React JS");
Rahul.enrollCourse("Node JS");

console.log(Rahul.getCourseList());
console.log(Rahul2.getCourseList());


let courses = Rahul.getCourseList();

courses.forEach(c => console.log(c));