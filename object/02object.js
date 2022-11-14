var user = {
    firstName: "Rahul",
    lastname: "Jain",
    role: "Admin",
    loginCount: 32,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    }
};

var courseList = true;

console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("React");
user.buyCourse("Node");

console.log(user.getCourseCount());