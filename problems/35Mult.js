let total = 0;

function isMult(n) {
    if (n % 3 == 0  || n % 5 == 0) return true;
}

for (let i = 3; i < 1000; i++){
    if (isMult(i)){
        total += i;
    }
}

console.log(total);