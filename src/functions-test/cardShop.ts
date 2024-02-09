import { CardOrder, Order, User } from "../types";
import isEqual from "lodash.isequal";

const cf_regexp = /^([A-Z]{6})(\d{2})([A-Z])(\d{2})([A-Z])(\d{3})([A-Z])$/i
const email_regexp = /^([a-z.-]+)@(([a-z-]+)([.]([a-z-]+))+)$/

const ordine: Order = { lista: [] }

export const validateWithReturn = (text: string, regex: RegExp) : string => {
    return regex.test(text) ? text : ""
}

export const reset = () : void => {
    ordine.user = undefined
    ordine.lista.length = 0
}

export const mockUser = (): void => {
    ordine.user = { cf: "GYTCUB98I66P720R", nome: "Manuel", cognome: "ocdnd", email: "cuwbsyuc@ucdsb.ud" }
}

export const newOrder = (user: User): Order | null => {
    user.cf = validateWithReturn((user.cf as string).trim(), cf_regexp)
    user.email = validateWithReturn((user.email as string).trim(), email_regexp)
    user.nome = (user.nome as string).trim()
    user.cognome = (user.cognome as string).trim()
    if (user.cf !== "" && user.nome !== "" && user.cognome !== "" && user.email !== ""){
        ordine.user = user
        return ordine
    }
    return null
}

export const addGiftCard = (cardOrder: CardOrder): Order | null => {
    if (ordine.user) {
        const checkCardIndex : number = ordine.lista.findIndex((value) => isEqual(value.card, cardOrder.card))
        checkCardIndex >= 0 ? (ordine.lista[checkCardIndex].quantita += cardOrder.quantita) : ordine.lista.push(cardOrder)
        console.debug(checkCardIndex)
        return ordine
    }
    return null
}