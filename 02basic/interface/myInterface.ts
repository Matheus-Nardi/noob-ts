// Segue a lógica de uma interface em java, um contrato obrigatório, quem implementar terá que aplicar propriedades e métodos

interface User {
    readonly _id: number,
    email: string,
    googleId?: string
    // login: () => string; Uma forma de fazer
    login(): void
    getCoupon(code: string): number
}

//Reabertura da interface
interface User {
    githubtoken: string;
}


interface Admin extends User {
    permissions: string[];
}

const user: User = {
    _id: 1,
    email: "m@m.com",
    githubtoken: "github",
    login: () => {
        return "Login..."
    },

    getCoupon: (name: "OFF10") => {
        return 10;
    }
}

const admin: Admin = {
    permissions: ["CREATE", "UPDATE", "DELETE"],
    _id: 0,
    email: "",
    login: function (): void {
        throw new Error("Function not implemented.");
    },
    getCoupon: function (code: string): number {
        throw new Error("Function not implemented.");
    },
    githubtoken: "git"
}