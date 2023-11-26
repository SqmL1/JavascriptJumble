let arrOdd = ["three",7,"seventeen",9];
let arrEven = ["two",8,'twelve',14];
function randomNumber(arr){
    let randomArr = Math.floor(Math.random()*arr.length);
    return arr[randomArr];
}
function addIfSameType(numOdd, numEven){
    let numEven, numOdd;
    do{
        randomNumEven = Math.floor(Math.random()*arrEven.length);
        randomNumOdd = Math.floor(Math.random()*arrOdd.length);
    } while (typeof numOdd !== 'number' ||  typeof numEven !== 'number' );

        let sum = numEven + numOdd
        console.log(sum);
}
addIfSameType(numEven, numOdd);
