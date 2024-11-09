//prdct/highest factor


function smallMultiple(limit) {
    let result = 1;
    function lcm(a,b) {
        return a*b/ hf(a,b);
    }
    function hf(a,b) {
        while (b != 0){
            [a,b] = [b,a % b];
        }
        return a;
    }
    for (let i = 1; i <= limit; i++){
        result = lcm(result,i);
    }
    return result;
}
console.log(smallMultiple(20));