const AISILE = 0;
const MIDDEL = 1;
const WINDOW = 2;

enum SeatChoise {
    AISILE, MIDDLE, WINDOW
}


const matheusSeat = SeatChoise.WINDOW;


enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

let responseCode = HttpCode.NOT_FOUND;


//padrão de nomenclatura ENomeDoEnumerador


// Crie um enum chamado Color com valores como Red, Green e Blue. Escreva uma função mapColorToHex que retorna o código hexadecimal correspondente para cada cor.

enum Color {
    RED = "#FF0000",
    GREEN = "#008000",
    BLUE = "#0000ff"
}

function mapColorToHex(color: Color): string {
    return color;
}

console.log(mapColorToHex(Color.RED));

// Crie um enum chamado TaskStatus com os valores Pending, InProgress, e Completed. Crie também uma interface chamada Task com as propriedades:

// id (número)
// title (string)
// status (TaskStatus)
// Implemente uma função chamada filterTasksByStatus que recebe uma lista de tarefas e um status, e retorna apenas as tarefas com o status correspondente.
enum TaskStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED
}

type Task = {
    readonly _id: number;
    title: string;
    status: TaskStatus;
}

const myTasks: Task[] = [{ _id: 1, title: "Lavar a casa", status: TaskStatus.PENDING }, { _id: 2, title: "Email para o chefe", status: TaskStatus.COMPLETED }, { _id: 3, title: "Ler 15 páginas", status: TaskStatus.IN_PROGRESS }, { _id: 4, title: "Rezar", status: TaskStatus.COMPLETED }]


function filterTasksByStatus(status: TaskStatus): Task[] {
    return myTasks.filter((taskStatus => taskStatus.status === status));
}


console.log(filterTasksByStatus(TaskStatus.COMPLETED));




