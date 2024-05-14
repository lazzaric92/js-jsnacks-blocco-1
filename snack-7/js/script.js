//todo: Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const userNumber = Number.parseInt(prompt('Type a number'), 10);
const arrayOne = [];
let randomNumber;
for (let i = 0; i < userNumber; i++){
    let arrayTwo = [];
    for( let k = 0; k < 10; k++){
        randomNumber = Math.floor(Math.random() * 100) + 1;
        arrayTwo.push(randomNumber);
    }
    let newArray = arrayOne.concat(arrayTwo);
    console.log(newArray);
}
