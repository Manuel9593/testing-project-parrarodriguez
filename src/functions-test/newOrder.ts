import { Order, User } from "../types";

const cf_regexp = /^([A-Z]{6})(\d{2})([A-Z])(\d{2})([A-Z])(\d{3})([A-Z])$/i
const email_regexp = /^([a-z.-]+)@(([a-z-]+)([.]([a-z-]+))+)$/
export const newOrder = ({cf, nome, cognome, email}: User): Order | null => {
    cf = (cf as string).trim()
    nome = (nome as string).trim()
    cognome = (cognome as string).trim()
    email = (email as string).trim()
    cf = cf_regexp.test(cf) ? cf : ""
    email = email_regexp.test(email) ? email : ""
    if(cf.length !== 0 && nome.length !== 0 && cognome.length !== 0 && email.length !== 0)
        return {
            ordine: []
        }
    return null 
}