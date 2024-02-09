# Introduzione

Di seguito le specifiche funzionali:

- Occorre sviluppare la business logic per un progetto che prevede l'inserimento/richiesta di un ordine di una giftcard.
- Ogni ordine prevede obbligatoriamente come prima cosa l'inserimento di un codice fiscale, nome, cognome e email.
- Successivamente è possibile richiedere più tipologie di giftcard, ognuna con un prezzo diverso. E' inoltre possibile richiedere un numero di giftcard maggiore di 1 per ogni taglio di prezzo.
- Per richeidere la giftcard occorre imputare i seguenti dati: tipologia (digitale/cartacea), taglio (10/20/50/100), quantità.
- Non deve essere possibile richiedere nello stesso ordine più volte lo stesso taglio e tipologia di giftcard. In alternativa occorre aggiornare la quantità.

# Funzioni da sviluppare

## Funzione newOrder

Questa funziona dovrà preoccuparsi di creare un nuovo ordine passandogli i dati anagrafici dell'intestatario. La funzione dovrà restituire un oggetto con i dati dell'ordine.

Parametri di input:

- Oggetto con i dati anagrafici dell'intestatario

Output:

- Oggetto con i dati dell'ordine

## Funzione addGiftcard

Questa funzione dovrà preoccuparsi di aggiungere una giftcard all'ordine. La funzione dovrà restituire l'oggetto ordine aggiornato.

Parametri di input:

- Oggetto con i dati della giftcart

Output:

- Oggetto con i dati dell'ordine aggiornato

## Funzione getAmount

Questa funzione dovrà restituire l'importo totale delle giftcard acquistate (imponibile), la relativa IVA al 22% e il totale da pagare (imponibile + IVA).

Parametri di input:

- Nessuno

Output:

- Oggetto con i totali

## Task

Fare un fork di questo repository

### Funzione newOrder

- [x] Creare i test per la funzione newOrder se possibile per happy path, special cases, edge cases e eccezioni.
- [x] Eseguire i test che falliscono
- [x] Effettuare la commit e la relativa push
- [x] Implementare la funzione newOrder
- [x] Eseguire i test che passano
- [x] Effettuare la commit e la relativa push

### Funzione addGiftcard

- [x] Creare i test per la funzione addGiftcard se possibile per happy path, special cases, edge cases e eccezioni.
- [x] Eseguire i test che falliscono
- [x] Effettuare la commit e la relativa push
- [x] Implementare la funzione addGiftcard
- [x] Eseguire i test che passano
- [x] Effettuare la commit e la relativa push

### Funzione getAmount

- [x] Creare i test per la funzione getAmount se possibile per happy path, special cases, edge cases e eccezioni.
- [x] Eseguire i test che falliscono
- [x] Effettuare la commit e la relativa push
- [x] Implementare la funzione getAmount
- [x] Eseguire i test che passano
- [x] Effettuare la commit e la relativa push

**IMPORTANTE: se durante lo sviluppo emerge l'esigenza di creare altre funzioni per rendere il codice più modulare e leggibile occorre definire, sviluppare ed eseguire i relativi unit test.**
