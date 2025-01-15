// Segue a lógica de uma interface em java, um contrato obrigatório, quem implementar terá que aplicar propriedades e métodos

interface User {
    readonly _id: number,
    email: string,
    googleId?: string
    // login: () => string; Uma forma de fazer
    login(): void
    getCoupon(code: string): number
}

const user: User = {
    _id: 1,
    email: "m@m.com",
    login: () => {
        return "Login..."
    },

    getCoupon: (name: "OFF10") => {
        return 10;
    }
}