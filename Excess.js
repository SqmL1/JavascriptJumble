if (typeof numEven === 'number' && typeof numOdd === 'number' ){
    let sum = numEven + numOdd
    console.log(sum);


} else {
    console.log("Not the same type")
};

let randomNumEven = Math.floor(Math.random()*arrEven.length);
let randomNumOdd = Math.floor(Math.random()*arrOdd.length);
let numOdd = arrOdd[randomNumOdd];
let numEven = arrEven[randomNumEven];