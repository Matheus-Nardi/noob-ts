"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "matheus",
    email: "matheus@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "matheus", isPaid: true });
function createCourse(name, hours, teacher) {
    return { name: name, hours: hours, teacher: teacher };
}
var course01 = createCourse("ts for noobs", 4, { name: "Mohaedmed Ala" });
var course02 = createCourse("strong java", 16, { name: "Jean Jaque Rosseau" });
console.log(course01.name);
console.log(course01.teacher.name);
console.log(course02);
function Student(name, resgitration) {
    this.name = name;
    this.resgitration = resgitration;
}
var student01 = new Student("John Travolta", "00001");
console.log(student01);
function createUserType(user) {
    return user;
}
function userDetails(user) {
    console.log("Hello ".concat(user.name));
    console.log("Your email is ".concat(user.email));
    console.log("You are ".concat(user.isActive ? "active" : "desactive"));
}
var myUser = createUserType({ name: "Matheus", email: "matheusnardi@gmail.com", isActive: true });
userDetails(myUser);
var product = {
    _id: 12345,
    name: "Monitor AOC",
    description: "monitor gamer 144hz 23'4",
    price: 956.99
};
product.price = 858.10;
