import { CardOrder, Order } from "../types"
import { mockUser, reset, addGiftCard } from "./cardShop"

describe('Successfully add a gift card', () => {
    beforeEach(() => {
        reset()
        mockUser()
    })
    it('Add a gift card', () => {
        const card: CardOrder = {
            card: {
                tipo: "cartaceo",
                taglio: 10
            },
            quantita: 3
        }
        const order = addGiftCard(card)
        expect(order).toMatchObject<Order>({
            user:  { cf: "GYTCUB98I66P720R", nome: "Manuel", cognome: "ocdnd", email: "cuwbsyuc@ucdsb.ud" },
            lista: [card]
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
        const order = addGiftCard(card2)
        expect(order).toMatchObject<Order>({
            user:  { cf: "GYTCUB98I66P720R", nome: "Manuel", cognome: "ocdnd", email: "cuwbsyuc@ucdsb.ud" },
            lista: [card1, card2]
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
        const order = addGiftCard(card3)
        expect(order).toMatchObject<Order>({
            user:  { cf: "GYTCUB98I66P720R", nome: "Manuel", cognome: "ocdnd", email: "cuwbsyuc@ucdsb.ud" },
            lista: [{card: {tipo: "cartaceo", taglio: 10}, quantita: 6}]
        })
    })
})

describe('Add with no mock', () => {
    beforeEach(() => {
        reset()
    })
    it('Add no data', () => {
        const order = addGiftCard({
            card: {
                tipo: "cartaceo",
                taglio: 10
            },
            quantita: 0
        })
        expect(order).toBeNull();
    })
})