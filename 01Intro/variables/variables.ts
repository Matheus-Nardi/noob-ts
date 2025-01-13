//string
let greetings: string = "Hello Matheus";

console.log(greetings.toLowerCase());

//number
let myNumber: number = 26;
let userID: number = 12334;

//boolean
let isLoogedIn: boolean = false;

//any  - Não é recomendado usar com frequencia. Perde a lógica de tipagem do ts

let hero: string;

function getHero(){
    return "hulk";
}

hero = getHero();
export{}