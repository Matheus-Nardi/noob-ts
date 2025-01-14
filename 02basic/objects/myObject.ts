const User = {
    name: "matheus",
    email: "matheus@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) {

}

createUser({ name: "matheus", isPaid: true });

function createCourse(name: string, hours: number, teacher: { name: string }): { name: string, hours: number, teacher: { name: string } } {
    return { name, hours, teacher };
}

const course01 = createCourse("ts for noobs", 4, { name: "Mohaedmed Ala" });
const course02 = createCourse("strong java", 16, { name: "Jean Jaque Rosseau" });

console.log(course01.name);
console.log(course01.teacher.name);
console.log(course02);

function Student(name: string, resgitration: string): void {
    this.name = name;
    this.resgitration = resgitration;
}

const student01 = new Student("John Travolta", "00001");
console.log(student01);

//Alias
type User = {
    name: string;
    email: string;
    isActive: boolean;

}

function createUserType(user: User): User {
    return user;
}
function userDetails(user: User) {
    console.log(`Hello ${user.name}`);
    console.log(`Your email is ${user.email}`);
    console.log(`You are ${user.isActive ? "active" : "desactive"}`);
}

const myUser = createUserType({ name: "Matheus", email: "matheusnardi@gmail.com", isActive: true })
userDetails(myUser);

type Product = {
    readonly _id: number     //Apenas para leitura _ convenção do MongoDB
    name: string;
    description: string;
    price: number;
    wheight?: number;       // ? indica um atributo opcional
}

let product: Product = {
    _id: 12345,
    name: "Monitor AOC",
    description: "monitor gamer 144hz 23'4",
    price: 956.99
}

product.price = 858.10;
// product._id = 1222; Não é possível modificar porque é apenas para leitura

type cardDate = {
    cardDate: string;
}

type cardNumber = {
    cardNumber: string;
}

// União de types
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let creditCard: cardDetails = {
    cardNumber: "1234",
    cardDate: "10/25",
    cvv: 123
}

console.log(creditCard);


export { }