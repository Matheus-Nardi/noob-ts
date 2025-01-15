// const user: string[] = ["matheus", "joão"];
const tuser: [string, number] = ["matheus", 12];


let rgb: [number, number, number] = [255, 123, 117];


type User = [number, string]


const user01: User = [111, "example@google.com"];

user01[1] = "newEmail@google.com";

function getUserInfo(): User {
    return [1, "pedro"];
}

const user02 = getUserInfo();
console.log(user02);

export { }