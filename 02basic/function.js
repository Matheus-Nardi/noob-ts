"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
function singUpUser(name, email, age) {
    var user = { name: name, email: email, age: age };
    user.name = name;
    user.email = email;
    user.age = age;
    console.log("Usuário cadastrado");
    console.log(user);
}
var res = addTwo(5);
singUpUser("matheus", "email@email.com", 18);
console.log(res);
console.log(getUpper("banana"));
