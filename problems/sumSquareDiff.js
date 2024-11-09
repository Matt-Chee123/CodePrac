let sumSquareTot = 0;
let squareSumTot = 0;

for (let i = 1; i <= 100; i++){
    sumSquareTot = sumSquareTot + (i ** 2);
    squareSumTot += i;
}

squareSumTot = squareSumTot ** 2;

console.log(squareSumTot-sumSquareTot);