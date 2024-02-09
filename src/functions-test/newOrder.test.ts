import { Order } from "../types"
import { newOrder } from "./newOrder"

describe('Order with credentials', () => {
    it('Pass a user with (CF, name, surname, email)', () => {
        const user = {
            cf: "GGYPWD98I32A755P",
            nome: "Manuel",
            cognome: "Parra Rodriguez",
            email: "manuel.manuel@example.it"
        }
        const order = newOrder(user)
        expect(order).toMatchObject<Order>({
            ordine: []
        })
    })
})

describe('Order with wrong or missing credentials', () => {
    it('Pass a user with (CF)', () => {
        const user = {
            cf: "GGYPWD98I32A755P",
            nome: "",
            cognome: "",
            email: ""
        }
        const order = newOrder(user)
        expect(order).toBe(null)
    })

    it('Pass a user with (nome, cognome, email)', () => {
        const user = {
            cf: "",
            nome: "Manuel",
            cognome: "Parra",
            email: "manuel.manuel@example.it"
        }
        const order = newOrder(user)
        expect(order).toBe(null)
    })
    it('Pass with wrong CF', () => {
        const user = {
            cf: "GGYPWD98A755P",
            nome: "Manuel",
            cognome: "Parra Rodriguez",
            email: "manuel.manuel@example.it",
        }
        const order = newOrder(user)
        expect(order).toBeNull()
    })
    it('Pass with wrong email', () => {
        const user = {
            cf: "GGYPWD98I32A755P",
            nome: "Manuel",
            cognome: "Parra Rodriguez",
            email: "manuel.manuel@example",
        }
        const order = newOrder(user)
        expect(order).toBeNull()
    })
})