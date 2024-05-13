//todo: Crea un array vuoto.Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

const numberList = [];
let userNumber;

for (let i = 0; i < 6; i++){
    userNumber = Number.parseInt(prompt('Type a number') ,10);
    if (userNumber % 2 == 1){
        numberList.push(userNumber);
    }
}

console.log(numberList);