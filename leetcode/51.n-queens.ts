function solveNQueens(n: number): string[][] {
    if (n < 1) {
        return [];
    }
    const colMap = new Map();
    const pieMap = new Map();
    const laMap = new Map();

    const result: string[][] = [];
    DFS(0, []);
    return result;
    
    function DFS(i: number, singleResult: string[]) {
        if (i === n) {
            result.push(singleResult);
            return;
        }
        for (let j = 0; j < n; j++) {
            if (!colMap.get(j) && !pieMap.get(i + j) && !laMap.get(i - j)) {
                colMap.set(j, true);
                pieMap.set(i + j, true);
                laMap.set(i - j, true);
                singleResult.push(generate(j, n));
                DFS(i + 1, singleResult.slice(0));
                colMap.delete(j);
                pieMap.delete(i + j);
                laMap.delete(i - j);
                singleResult.pop();
            }
        }
    }

    function generate(j: number, n: number): string {
        let str = '';
        for (let i = 0; i < n; i++) {
            str += i === j ? 'Q' : '.';
        }
        return str;
    }
};

console.log(solveNQueens(4)); // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // [["Q"]]