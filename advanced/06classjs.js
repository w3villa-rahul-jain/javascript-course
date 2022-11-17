class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  //   create private variable
  #courseList = [];

  //   getter and setters
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
// used for method static means not inherit by any other class
//   static login() {
//     return "You are logged in";
//   }
   login() {
    return "You are logged in";
  }
}

class subAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "i am subAdmin";
  }
  login(){
      return "login only admin"
  }
}

// module.exports = User;

const rock = new User("Rock", "rock.gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular");
console.log(rock.getCourseList());
console.log(rock.courseList);

const tom = new subAdmin("tom", "tom.gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(rock.login());

console.log(tom.getInfo());
