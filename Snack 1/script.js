/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array
fino a quando la somma degli elementi è minore di 50
*/

// Salvo il button
const insertButton = document.getElementById("inserisci");

// Salvo il risultato della somma
let result = document.getElementById("risultato")

// Creo una funzione che svverrà al "click" del button
insertButton.addEventListener("click",


function(){
    
    // Tramite ciclo while inserisco numeri in input

    // Dichiato un array vuoto
    const numbers = [];


    // Dichiaro la variabile della somma che sarà anche
    // la variabile contatore del while
    let sumNumbers = 0;

    while( sumNumbers < 50 ){

        // Dichiaro il numero da far inserire con un prompt

        let number = Number(prompt("Inserisci un numero"));

        // Verifico se la variabile inserita sia un numero
        if (!isNaN(number)){
            // Inserisco la variabile nell'array
            numbers.push(number);

            // Aggiungo alla somma il valore della variabile
            sumNumbers += number;

        } else {
            // Se la variabile inserita non è un numero lo comunico all'utente
            alert("Il valore inserito non è un numero")
        }

    }

    // Stampo la somma risultante
    result.innerHTML = `La somma é ${sumNumbers}`;
}


)