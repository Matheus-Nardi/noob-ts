"use strict";
// class User {
//     public name: string;
//     public email: string;
//     private city?: string;
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get getName() {
        return this.name;
    }
    get getEmail() {
        return this.email;
    }
    set setName(name) {
        this.name = name;
    }
    set setEmail(email) {
        this.email = email;
    }
}
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const user = saveUser(inputName.value, inputEmail.value);
    updateUserInfo(user);
});
function updateUserInfo(user) {
    const userInfoDiv = document.querySelector(".user-info");
    if (userInfoDiv) {
        userInfoDiv.innerHTML = `
            <p>Name: ${user.getName}</p>
            <p>Email: ${user.getEmail}</p>
        `;
    }
}
function saveUser(name, email) {
    return new User(name, email);
}
console.log(saveUser(inputName.value, inputEmail.value));
