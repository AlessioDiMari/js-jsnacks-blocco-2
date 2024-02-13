// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.


// Chiedo all'utente di inserire un numero

const userChoice = Number(prompt("Inserisci un numero"));

// Creo un if

if ( userChoice % 2 == 0 ) {
    document.getElementById("result").innerHTML = "Il numero che hai inserito, " + userChoice + " , è pari."
} else {
    document.getElementById("result").innerHTML = "Il numero che hai inserito non è pari quindi :" + (userChoice + 1);
}