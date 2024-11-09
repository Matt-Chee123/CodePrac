function isPrime(n) {
    if (n == 2){
        return true;
    }
    if (n % 2 == 0 || n == 0 || n == 1){
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n);i+=2){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
function nthPrime(target) {
    let count = 0;
    let i = 1;
    while (count < target) {
        i++
        console.log(i)
        if (isPrime(i)){
            count += 1
        }
    }
    return i;
}

console.log(nthPrime(10001));