function addTwo(num: number): number {
    return num + 2;
}

function getUpper(value: string) {
    return value.toUpperCase();
}

function singUpUser(name: string, email: string, age: number): void {
    let user = { name, email, age };
    user.name = name;
    user.email = email;
    user.age = age;
    console.log("Usuário cadastrado");
    console.log(user);


}

let res = addTwo(5);
singUpUser("matheus", "email@email.com", 18);
console.log(res);
console.log(getUpper("banana"));

function getValue(value: number): boolean | string {
    if (value > 5)
        return true;

    return "200 OK";
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor" , "spiderman" , "ironman"];

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string): void {
    console.log(errmsg);
}

export { }