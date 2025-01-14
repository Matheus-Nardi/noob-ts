let score: number | string = 33;   //Quando há dúvida no tipo de dado

score = "12";


type User = {
    id: number;
    name: string;
}
type Admin = {
    id: number;
    username: string;
}

let matheus: User | Admin = {
    id: 12,
    name: "Matheus"
}

matheus = { username: "matheusADM", id: 12 };

//permite passar 3 ou "3"
function getById(id: number | string) {
    console.log(`USER ID FROM DB: ${matheus.id}`);

}

const data: number[] | string[] = [1, 2, 3, 4]; // Por mais que tenha os 2 tipos, sera um array apenas de um 

const data2: (number | string)[] = [1, 2, "3", 4]; // Dessa maneira podem ser ambos os tipos


let position: "middle" | "window" | "asile"

// position = "front" Erro pois não correponde a nenhum dos valores esperados
position = "middle";