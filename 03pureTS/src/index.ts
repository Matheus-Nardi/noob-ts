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
    constructor(
        private name: string,
        private email: string) {
    }

    public get getName(): string {
        return this.name;
    }
    public get getEmail(): string {
        return this.email;
    }

    public set setName(name: string) {
        this.name = name;
    }
    public set setEmail(email: string) {
        this.email = email;
    }

}

const inputName = document.getElementById("name") as HTMLInputElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;

const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", () => {
    const user = saveUser(inputName.value, inputEmail.value);
    updateUserInfo(user);
});


function updateUserInfo(user: User): void {
    const userInfoDiv = document.querySelector(".user-info");
    if (userInfoDiv) {
        userInfoDiv.innerHTML = `
            <p>Name: ${user.getName}</p>
            <p>Email: ${user.getEmail}</p>
        `;
    }
}


function saveUser(name: string, email: string): User {
    return new User(name, email);
}


console.log(saveUser(inputName.value, inputEmail.value));
