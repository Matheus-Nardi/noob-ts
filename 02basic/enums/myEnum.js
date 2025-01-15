var AISILE = 0;
var MIDDEL = 1;
var WINDOW = 2;
var SeatChoise;
(function (SeatChoise) {
    SeatChoise[SeatChoise["AISILE"] = 0] = "AISILE";
    SeatChoise[SeatChoise["MIDDLE"] = 1] = "MIDDLE";
    SeatChoise[SeatChoise["WINDOW"] = 2] = "WINDOW";
})(SeatChoise || (SeatChoise = {}));
var matheusSeat = SeatChoise.WINDOW;
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["CREATED"] = 201] = "CREATED";
    HttpCode[HttpCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpCode[HttpCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpCode || (HttpCode = {}));
var responseCode = HttpCode.NOT_FOUND;
//padrão de nomenclatura ENomeDoEnumerador
// Crie um enum chamado Color com valores como Red, Green e Blue. Escreva uma função mapColorToHex que retorna o código hexadecimal correspondente para cada cor.
var Color;
(function (Color) {
    Color["RED"] = "#FF0000";
    Color["GREEN"] = "#008000";
    Color["BLUE"] = "#0000ff";
})(Color || (Color = {}));
function mapColorToHex(color) {
    return color;
}
console.log(mapColorToHex(Color.RED));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["PENDING"] = 0] = "PENDING";
    TaskStatus[TaskStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    TaskStatus[TaskStatus["COMPLETED"] = 2] = "COMPLETED";
})(TaskStatus || (TaskStatus = {}));
var myTasks = [{ _id: 1, title: "Lavar a casa", status: TaskStatus.PENDING }, { _id: 2, title: "Email para o chefe", status: TaskStatus.COMPLETED }, { _id: 3, title: "Ler 15 páginas", status: TaskStatus.IN_PROGRESS }, { _id: 4, title: "Rezar", status: TaskStatus.COMPLETED }];
function filterTasksByStatus(status) {
    return myTasks.filter((function (taskStatus) { return taskStatus.status === status; }));
}
console.log(filterTasksByStatus(TaskStatus.COMPLETED));
