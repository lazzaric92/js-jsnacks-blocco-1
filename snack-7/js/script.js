//todo: Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

let userNumber = Number.parseInt(prompt('Type a number'), 10);
if (userNumber > 20 || userNumber < 1 || Number.isNaN(userNumber)){
    userNumber = 10;
}

for (let i = 0; i < userNumber; i++){
    const numbersArray = [];
    for( let k = 0; k < 10; k++){
        numbersArray.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(numbersArray);
}
