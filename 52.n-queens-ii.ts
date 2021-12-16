function totalNQueens(n: number): number {
    let sum = 0;
    const colMap = new Map();
    const pieMap = new Map();
    const laMap = new Map();
    DFS(0);

    function DFS(i: number): void {
        if (i === n) {
            sum++;
            return;
        }
        for (let j = 0; j < n; j++) {
            if (!colMap.get(j) && !pieMap.get(i + j) && !laMap.get(i - j)) {
                colMap.set(j, true);
                pieMap.set(i + j, true);
                laMap.set(i - j, true);
                DFS(i + 1);
                colMap.delete(j);
                pieMap.delete(i + j);
                laMap.delete(i - j);
            }
        }
    }

    return sum;
};

console.log(totalNQueens(4)); // 2
console.log(totalNQueens(1)); // 1