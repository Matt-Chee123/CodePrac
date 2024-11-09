function facSum(val) {
    let total = BigInt(1);
    for (let i = val; i > 0; i--){
        total *= BigInt(i);
    }

    let list = total.toString().split('');
    let sum = list.map(Number).reduce((acc,curr) => acc + curr,0);
    return sum;
}

console.log(facSum(100));