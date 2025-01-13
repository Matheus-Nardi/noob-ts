//Crie uma função que recebe uma data, um horário e um evento, e retorna um objeto representando o compromisso.
function createEvent(date: string, time: string, event: string): { date: string, time: string, event: string } {
    return { date, time, event };
}
const myEvent = createEvent("23/10/2025", "14:00", "Palestra do professor Clóvis de Barros")
console.log(myEvent);

// Crie funções para adicionar itens, calcular o total e aplicar descontos no carrinho de compras.
const products: { name: string; price: number }[] = [
    { name: "Monitor AOC", price: 900.00 },
    { name: "Teclado Logitech", price: 200.00 },
    { name: "Mouse Razer", price: 150.00 },
];

function addItem(name: string, price: number): void {
    products.push({ name, price });
}

function totalPrice(): number {
    if (products.length == 0)
        return 0.0;
    let sum: number = 0.0;
    products.forEach((product) => sum = sum + product.price);
    for (const product of products) {
        sum = sum + product.price;
    }
    return sum;
}

console.log(products);
console.log(`TOTAL ${totalPrice()}`);
console.log("---------------------");

console.log("Adicionando um produto");
addItem("RXT4090", 10000);
console.log(products);
console.log(`TOTAL ${totalPrice()}`);



export { }