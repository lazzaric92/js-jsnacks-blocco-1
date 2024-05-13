//todo: L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const numberA = Number.parseInt(prompt('Inserisci un numero'), 10);
const numberB = Number.parseInt(prompt('Inserisci un altro numero'), 10);

if (numberA >= numberB){
    console.log(numberA);
} else {
    console.log(numberB);
}