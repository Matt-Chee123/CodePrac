function longestChain(cap) {
    let longestSequence = 1;
    let bestStart = 0;
    let map = new Map();
    map.set(1,1)
    for (let i = 1; i < cap;i++) {
        console.log(i)
        let current = i;
        let finished = false;
        let currentSequence = 1;
        while(current != 1 && !map.has(current)) {
            currentSequence += 1
            if (current % 2 == 0){
                current = current/2;
            } else {
                current = (3*current + 1);
            }
        }
        currentSequence += map.get(current) || 1;
        map.set(i,currentSequence);
        if (currentSequence > longestSequence){
            longestSequence = currentSequence
            bestStart = i;
        }
    }
    return bestStart;
}

console.log(longestChain(1000000));