function countDivs(n) {
    let count = 0;
    for (let i = 1;i <= Math.sqrt(n);i++) {
        if (n % i == 0){
            count++;
            if (i !== n/i){
                count++;
            }
        }
    }
    return count;
}

function triangNum(limit){
    let n = 1;
    let triangNum = 0;

    while (true) {
        triangNum = (n * (n + 1)) / 2;
        const divCount = countDivs(triangNum);

        if (divCount > limit){
            return triangNum;
        }
        n += 1;
    }

}

console.log(triangNum(500));