import { Order, User } from "../types";

const ordine = {}

export const newOrder = ({cf, nome, cognome, email}: User): Order | null => {
    cf = cf as string
    nome = nome as string
    cognome = cognome as string
    email = email as string
    cf = cf.match(`/([a-z]{6})(\d{2})([a-z])(\d{2})([a-z])(\d{3})([a-z])/ig`) ? cf : "";
    email = email.match(`/([a-z.-]+)@(([a-z-]+)([.]([a-z-]+))+)/ig`) ? cf : "";
    if(cf.length !== 0 || nome.length !== 0 || cognome.length !== 0 || email.length !== 0)
        return {
            ordine: []
        }
    return null 
}