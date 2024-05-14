//todo: Crea con js tre tag div con tre id diversi. Un div avrà il testo colorato di rosso, uno di verde e l'altro di giallo. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari, in verde i numeri pari, in giallo i multipli di 5.

// <-- creo i div
const mainEl = document.querySelector('main');
mainEl.innerHTML = '<div id=\'div-red\'></div> <div id=\'div-green\'></div> <div id=\'div-yellow\'></div>';

const numbersArray = [2, 5, 34, 25, 64, 61, 3, 22, 45, 80, 13];