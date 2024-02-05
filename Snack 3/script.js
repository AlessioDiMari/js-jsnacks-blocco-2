/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi
fino a quando ne avrà tanti quanti l’altro.
*/

// Salvo i fue bottoni
const createBtn = document.getElementById("crea");

const insertBtn = document.getElementById("inserisci");



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

    

}

)

