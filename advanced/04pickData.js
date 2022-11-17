const user = ["Rahul", 4, "Admin"];

var [name, ...role] = user;

// var role = user[2];
// console.log(role);

// console.log(name);
// console.log(role);
// console.log(name[1]);


const myUser = {
    name: "Rahul",
    courseCount: 5,
    role: "Admin",
};

console.log(myUser.name)

const {name1, courseCount, role1} = myUser;

console.log(courseCount);