let num = 600851475143;
let factor = 2;
let largestNumFactor = 1;

while (num > 1) {
    if (num % factor == 0) {
        largestNumFactor = factor;
        num /= factor;
    } else {
        factor++;
    }
}

console.log(largestNumFactor);


