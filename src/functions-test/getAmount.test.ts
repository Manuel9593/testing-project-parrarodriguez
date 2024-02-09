import { Total } from "../types"
import { mockOrderList, mockUser, reset, getAmount } from "./cardShop"

describe('Get total from multiple-element list', () => {
    beforeEach(() => {
        reset()
        mockUser();
    })
    it('List of one elements', () => {
        mockOrderList(3)
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 330, iva: 72.6, totale: 402.6})
    })
    it('List of three elements', () => {
        mockOrderList(2)
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 80, iva: 17.6, totale: 97.6})
    })
    it('List of one elements with quantity 4', () => {
        mockOrderList(1)
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 240, iva: 52.8, totale: 292.8})
    })
})

describe('Get empty cart', () => {
    beforeEach(() => {
        reset()
        mockUser();
    })
    it('Empty list', () => {
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 0, iva: 0, totale: 0})
    })
})
describe('Get without user', () => {
    beforeEach(() => {
        reset()
    })
    it('Empty list', () => {
        const amount = getAmount()
        expect(amount).toMatchObject<Total>({subtotale: 0, iva: 0, totale: 0})
    })
})