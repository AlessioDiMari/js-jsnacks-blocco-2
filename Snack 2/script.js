/*
Genera un numero casuale tra 1 e 100 e 
poi chiedi all'utente di indovinare il numero. 
Il programma poi deve far comparire un messaggio "il numero è troppo alto" 
oppure "il numero è troppo basso" nel momento in cui 
il numero detto dall'utente non è perfettamente uguale 
al numero estratto in modo casuale.
Quando l'utente trova il numero, fateglielo sapere!
*/

// Salvo il button
const insertButton = document.getElementById("inserisci");

// Salvo l'esito della sfida
let result = document.getElementById("esito");

// Faccio la funzione al "click" del button 
insertButton.addEventListener("click",

    function(){

        // Faccio generare un numero casuale al computer
        const computerGuess = Math.floor(Math.random() * 100) + 1;

        // Utilizzo due cicli "do while"
        // uno per verificare che l'utente scriva un numero
        // e un altro per verificare se ha indovinato il numero del computer

        // Dichiaro la variabile del tentativo dell'utente

        let userGuess;

        do{
            // Verifico se l'utente scriva un numero e 
            // in caso lo avverto con un alert
            userGuess = Number(prompt("Prova ad indovinare"));

            if (isNaN(userGuess)){
                alert("Inserisci un numero!")
            }
                    
        } while (isNaN(userGuess));



    }

);

