function maximalRectangle(matrix: string[][]): number {
    const m = matrix.length;
    const n = matrix[0]?.length || 0;
    if (!m || !n) {
        return 0;
    }
    const dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = (j === 0 ? 0 : dp[i][j - 1]) + 1;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                let width = dp[i][j];
                let result:number;
                for (let k = i; k >= 0; k--) {
                    width = Math.min(width, dp[k][j]);
                    result = width * (i - k + 1);
                    if (result > max) {
                        max = result;
                    }
                }
            }
        }
    }
    return max;
};

console.log(maximalRectangle([])); // 0
console.log(maximalRectangle([["0","0","0"],["0","0","0"],["1","1","1"]])); // 3
console.log(maximalRectangle([["0","1"],["0","1"]])); // 2
console.log(maximalRectangle([['1', '1']])); // 2
console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])); // 6
console.log(maximalRectangle([["1","0","0","0","1"],["1","1","0","1","1"],["1","1","1","1","1"]])); // 5