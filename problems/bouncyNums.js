function isBouncy(n) {
    temp = n.toString();
    let digits = [];
    for (let i = 0;i < temp.length;i++){
        let digit = parseInt(temp[i]);
        digits.push(digit);
    }
    let increase = false;
    let decrease = false;
    let i = 1;
    while (i < digits.length){
        if (digits[i] < digits[i-1]){
            decrease = true;
        } else if (digits[i] > digits[i-1]){
            increase = true;
        }
        if (increase == true && decrease == true){
            return true;
        }
        i++;
    }
    return false;
}

function proportion(){
    let required = 99.0;
    let bouncy = 0;
    let count = 0;
    while (true){
        count++;
        if (isBouncy(count)){
            bouncy += 1;
        }
        let ratio = (bouncy/count)*100;
        console.log(ratio);
        if (ratio == required) {
            return count;
        }
    }
}

console.log(proportion());