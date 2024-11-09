function properDivisors(n){
    let sum = 0;
    for (let i = 1; i <= n/2;i++){
        if (n % i == 0){
            sum += i;
        }
    }
    return sum;
}

function amicableNums(cap){
    let list = [];
    let sum = 0;
    for (let i = 0; i < cap; i++) {
        if (!list.includes(i)){
            let res1 = properDivisors(i);
            let res2 = properDivisors(res1);
            if (i == properDivisors(res1) && res1 != res2){
                sum += (res1 + res2);
                list.push(res1);
                list.push(res2);
            }
        }
    }
    return sum;
}

console.log(amicableNums(10000));