let total = 0;
function fibRecur(n,prev,total) {
    if (n > 4000000) {
        return total;
    } else if (n % 2 == 0) {
        total += n;
    }
    return fibRecur(n + prev, n, total);
}

console.log(fibRecur(2,1,total));