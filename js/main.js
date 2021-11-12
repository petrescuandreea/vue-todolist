/*

TRACCIA: 
- stampare in pagina un item per ogni elemento contenuto in un array di oggetti -> formato:
{ text: 'Fare la spesa', done: true }, 
{ text: 'Fare il bucato', done: false }
- nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

*/


// 1. stampo la lista iniziale 
// 2. aggiungo una "x" ad ogni item per far si che al click questo possa essere eliminato 
// 3. creo un input per dare la possibilità all'utente di inserire un nuovo item 


var app = new Vue(
    {
        el: '#myapp',
        data: {
            tasks: [
                {text: 'fare la spesa' , done: 'false'},
                {text: 'allenarsi' , done: 'done'},
                {text: 'cucinare' , done: 'false'},
                {text: 'leggere' , done: 'done'},
            ]

        }

    
});