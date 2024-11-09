let runningTotal = 2;

function isPrime(n) {
    if (n == 1 || n == 0) {
        return false;
    }
    for (let i = 3; i <= Math.floor(Math.sqrt(n)) ; i+=2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 3; i <= 2000000; i+=2) {
    console.log(i);
    if (isPrime(i)) {
        runningTotal += i;
    }
}

console.log(runningTotal);