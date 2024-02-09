export type User = {
    cf: string
    nome: string
    cognome: string
    email: string
}
export type Card = {
    tipo: "cartaceo" | "digitale"
    taglio: 10 | 20 | 50 | 100
}
export type CardOrder = {
    card: Card
    quantita: number
}
export type Order = {
    user?: User
    lista: CardOrder[]
}