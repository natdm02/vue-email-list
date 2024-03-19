VUE EMAIL LIST
===
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
- Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
## SVOLGIMENTO:
1. Creo app vue 
2. Con il metodo generaMail svuoto prima l'array mail e quindi fa 10 richieste GET utilizzando un ciclo for. Quando ogni richiesta ha successo, l'indirizzo email ottenuto viene aggiunto all'array mail.
3. In HTML, utilizzato la direttiva v-for per iterare attraverso gli indirizzi email nell'array mail e visualizzarli come elementi di lista li>.
