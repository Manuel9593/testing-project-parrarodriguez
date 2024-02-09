import { CardOrder, Order } from "../types"
import { mockUser, reset } from "./cardShop"

describe('Successfully add a gift card', () => {
    beforeEach(() => {
        reset()
    })
    it('Add a gift card', () => {
        const card: CardOrder = {
            card: {
                tipo: "cartaceo",
                taglio: 10
            },
            quantita: 3
        }
        const order: Order = addGiftCard(user)
        expect(order).toMatchObject<Order>({
            lista: []
        })
    })

    it('Add two gift cards', () => {
        const card1: CardOrder = {
            card: {
                tipo: "cartaceo",
                taglio: 10
            },
            quantita: 3
        }
        const card2: CardOrder = {
            card: {
                tipo: "digitale",
                taglio: 100
            },
            quantita: 1
        }
        addGiftCard(card1)
        const order: Order = addGiftCard(card2)
        expect(order).toMatchObject<Order>({
            lista: []
        })
    })
    it('Add multiple gift cards of the same type', () => {
        const card1: CardOrder = {
            card: {
                tipo: "cartaceo",
                taglio: 10
            },
            quantita: 3
        }
        const card2: CardOrder = {
            card: {
                tipo: "cartaceo",
                taglio: 10
            },
            quantita: 2
        }
        
        const card3: CardOrder = {
            card: {
                tipo: "cartaceo",
                taglio: 10
            },
            quantita: 1
        }
        addGiftCard(card1)
        addGiftCard(card2)
        const order: Order = addGiftCard(card3)
        expect(order).toMatchObject<Order>({
            lista: []
        })
    })
})

describe('Add no or inexistent cards', () => {
    beforeEach(() => {
        reset()
        mockUser()
    })
    it('Add no data', () => {
        expect(() =>{
            addGiftCard({})
        }).toThrow(Error);
    })

    it('Add wrong data', () => {
        expect(() =>{
            addGiftCard({ foo: "bar", example: 2})
        }).toThrow(Error);
    })

    it('Add inexistent card', () => {
        expect(() =>{
            addGiftCard({ card: {tipo: "bar", taglio: 2 }, quantita: 5 })
        }).toThrow(Error);
    })
})