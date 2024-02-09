import { Order } from "../types"
import { expectTypeOf } from 'expect-type'

describe('Order with credentials', () => {
    it('Pass a user with (CF, name, surname, email)', () => {
        const user = {
            cf: "GGYPWD98I32A755P",
            nome: "Manuel",
            cognome: "Parra Rodriguez",
            email: "manuel.manuel@example.it",
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
        }
        const order = newOrder(user)
        console.debug("Order", order)
        expectTypeOf(order).toMatchTypeOf<Order>(null)
    })

    it('Pass a user with (nome, cognome, email)', () => {
        const user = {
            cf: "GGYPWD98I32A755P",
        }
        const order = newOrder(user)
        console.debug("Order", order)
        expectTypeOf(order).toMatchTypeOf<Order>(null)
    })
    it('Pass with wrong CF', () => {
        const user = {
            cf: "GGYPWD98A755P",
            nome: "Manuel",
            cognome: "Parra Rodriguez",
            email: "manuel.manuel@example.it",
        }
        const order = newOrder(user)
        expect(order).toMatchObject<Order>({
            ordine: []
        })
    })
    it('Pass with wrong email', () => {
        const user = {
            cf: "GGYPWD98A755P",
            nome: "Manuel",
            cognome: "Parra Rodriguez",
            email: "manuel.manuel@example",
        }
        const order = newOrder(user)
        expect(order).toMatchObject<Order>({
            ordine: []
        })
    })
})