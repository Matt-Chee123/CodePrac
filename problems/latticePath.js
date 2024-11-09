function lattice(n) {
    const paths = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));
    for (let i = 0; i <= n; i++){
        paths[i][0] = 1;
    }
    for (let j = 0; j <= n; j++){
        paths[0][j] = 1;
    }

    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n;j++){
            paths[i][j] = paths[i-1][j] + paths[i][j-1];
        }
    }
    return paths;
}

console.log(lattice(20))