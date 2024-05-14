//todo: Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numbersArray = [3, 5, 1, 2, 4, 8, 34, 13, 22];
let sum = 0;
for (let i= 0; i< numbersArray.length; i++){
    if (i % 2 === 1){
        let k = numbersArray.at(i);
        sum += k;
        console.log(k, sum);
    }
}