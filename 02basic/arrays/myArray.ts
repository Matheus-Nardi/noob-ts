const superHeros: string[] = [];
const heroAge: Array<number> = [];

superHeros.push("spiderman");
heroAge.push(22);

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

const users: Array<User> = [];

users.push({ name: "matheus", email: "m@m.com", isActive: false }, { name: "leon", email: "l@l.com", isActive: true })

users.forEach(user => {
    console.log(user.name);
    console.log(user.email);
    console.log(user.isActive);
    console.log("-----------");

});

//Matrizes
const colors: number[][] = [
    [255, 255, 255]
]

console.table(colors);

export { }