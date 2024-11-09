for (let i = 100; i <1000; i++)  {
    for (let j = 100; j < 1000; j++) {
        let potential = i * j;
        num1 = potential.toString();
        num2 = potential.toString().split('').reverse().join('');
        if ((num1 == num2) & potential > largest) {
            largest = potential;
        }
    }
}

console.log(largest);