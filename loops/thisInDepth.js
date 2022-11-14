console.log(this);

console.log("This");

var user = {
    firstName: "Rahul",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 9 ", this);
    }

}

user.getCourseCount();