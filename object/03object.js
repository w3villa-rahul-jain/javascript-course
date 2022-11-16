var user = {
    name: "Rahul jain",
    getUserName: function(){
        console.log(`user name is ${this.name}`);
    },
};

var rahul = Object.create(user);
console.log(rahul);

rahul.getUserName();


var sam = Object.create(user, {
    name: {value: "sammy"},
    courseCount: { value: 3}
})

sam.getUserName();