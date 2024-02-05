/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi
fino a quando ne avrà tanti quanti l’altro.
*/

// Salvo i fue bottoni
const createBtn = document.getElementById("crea");

const verifyBtn = document.getElementById("verifica");



// Creo due array di lunghezza casuale tra 1 e 10 
// al "click" del bottone crea

createBtn.addEventListener("click",

function(){
    // Creo gli array vuoti
    const firstArray = [];
    const secondArray = [];

    // Dichiaro delle lunghezze tra 1 e 10 casuali
    const firstLenght = Math.floor(Math.random() * 10) + 1;
    const secondLenght = Math.floor(Math.random() * 10) + 1;

    // Faccio riempire all'utente gli array con dei for

    // Primo array
    for ( i = 0; i < firstLenght; i++){
        let elementFirst = prompt("Inserisci un elemento per il primo array");
        firstArray.push(elementFirst);
    }

    // Secondo array
    for ( i = 0; i < secondLenght; i++){
        let elementSecond = prompt("Inserisci un elemento per il secondo array");
        secondArray.push(elementSecond);
    }

    // Al "click" del button "verifica", verifico la differenza di lunchezze 
    // dei due array e faccio inserire all'utente gli elementi mancanti
    //  all'array più piccolo utilizzando un while

    while ( firstLenght !== secondLenght ){

        if ( firstLenght < secondLenght ){
            let elementFirst = prompt("Inserisci un elemento per il primo array");
            firstArray.push(elementFirst);
        } else {
            let elementSecond = prompt("Inserisci un elemento per il secondo array");
            secondArray.push(elementSecond);
        }

    }

    // Dichiaro in pagina che gli array sono uguali

}

)

