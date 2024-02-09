import { Order, Total } from "../types"
import { mockOrderList, mockUser, newOrder, reset } from "./cardShop"

describe('Get total from multiple-element list', () => {
    afterEach(() => {
        reset()
        mockUser();
    })
    it('List of one elements', () => {
        mockOrderList(3)
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 0, iva: 0, totale: 0})
    })
    it('List of three elements', () => {
        mockOrderList(2)
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 0, iva: 0, totale: 0})
    })
    it('List of one elements with quantity 4', () => {
        mockOrderList(1)
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 0, iva: 0, totale: 0})
    })
})

describe('Get empty cart', () => {
    afterEach(() => {
        reset()
        mockUser();
    })
    it('Empty list', () => {
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 0, iva: 0, totale: 0})
    })
})
describe('Get without user', () => {
    afterEach(() => {
        reset()
    })
    it('Empty list', () => {
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 0, iva: 0, totale: 0})
    })
})