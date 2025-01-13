"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Crie uma função que recebe uma data, um horário e um evento, e retorna um objeto representando o compromisso.
function createEvent(date, time, event) {
    return { date: date, time: time, event: event };
}
var myEvent = createEvent("23/10/2025", "14:00", "Palestra do professor Clóvis de Barros");
console.log(myEvent);
// Crie funções para adicionar itens, calcular o total e aplicar descontos no carrinho de compras.
var products = [
    { name: "Monitor AOC", price: 900.00 },
    { name: "Teclado Logitech", price: 200.00 },
    { name: "Mouse Razer", price: 150.00 },
];
function addItem(name, price) {
    products.push({ name: name, price: price });
}
function totalPrice() {
    if (products.length == 0)
        return 0.0;
    var sum = 0.0;
    products.forEach(function (product) { return sum = sum + product.price; });
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        sum = sum + product.price;
    }
    return sum;
}
var isOver18 = function (age) { return age > 18; };
console.log(isOver18(23));
console.log(products);
console.log("TOTAL ".concat(totalPrice()));
console.log("---------------------");
console.log("Adicionando um produto");
addItem("RXT4090", 10000);
console.log(products);
console.log("TOTAL ".concat(totalPrice()));
