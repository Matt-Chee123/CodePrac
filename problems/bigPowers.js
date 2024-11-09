function sumOfParts(power){
    let value = BigInt(2) ** BigInt(power);
    let split = value.toString().split('');
    let numSplit = split.map(Number);
    let total = 0;
    for (i = 0; i <= numSplit.length -1; i++){
        total += numSplit[i];
    }
    return total;
}

console.log(sumOfParts(1000))