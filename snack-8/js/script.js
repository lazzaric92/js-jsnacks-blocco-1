//todo: Crea con js tre tag div con tre id diversi. Un div avrà il testo colorato di rosso, uno di verde e l'altro di giallo. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari, in verde i numeri pari, in giallo i multipli di 5.

// <-- creo i div
const mainEl = document.querySelector('main');
mainEl.innerHTML = '<div id=\'div-red\'></div> <div id=\'div-green\'></div> <div id=\'div-yellow\'></div>';

const numbersArray = [2, 5, 34, 25, 64, 61, 3, 22, 45, 80, 13];

for (let i = 0; i < numbersArray.length; i++){
    const yellowDiv = document.getElementById('div-yellow');
    const redDiv = document.getElementById('div-red');
    const greenDiv = document.getElementById('div-green');

    if (numbersArray[i] % 5 === 0){
        yellowDiv.append(numbersArray[i] + ', ');
    } else if (numbersArray[i] % 2 === 1){
        redDiv.append(numbersArray[i] + ', ');
    } else {
        greenDiv.append(numbersArray[i] + ', ');
    }
}