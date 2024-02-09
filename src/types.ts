export type User = {
    cf: string
    nome: string
    cognome: string
    email: string
}
export type Card = {
    type: "cartaceo" | "digitale"
    taglio: 10 | 20 | 50 | 100
}
export type Order = {
    ordine: {card: Card,quantita: number}[]
}