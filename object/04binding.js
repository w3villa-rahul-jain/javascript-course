const rahul = {
    firstName: "Rahul",
    lastName: "Jain",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        his role  is ${this.role}
        
        `);
    },
}

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "subAdmin",
    courseCount: 4
};

// rahul.getInfo.bind(dj)();
var djInfo = rahul.getInfo.bind(dj);
djInfo();