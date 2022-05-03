function countPrimes(n: number): number {
    const isPri = new Array(n).fill(1);
    let count = 0;
    for (let i = 2; i < n; i++ ){
        if (isPri[i] === 1) {
            count++;
            for (let j = i * i; j < n; j = j + i) {
                isPri[j] = 0;
            }
        }
    }
    return count;
};
