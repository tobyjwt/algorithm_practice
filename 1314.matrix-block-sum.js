/**
 * 给你一个 m x n 的矩阵 mat 和一个整数 k ，请你返回一个矩阵 answer ，其中每个 answer[i][j] 是所有满足下述条件的元素 mat[r][c] 的和：

 i - k <= r <= i + k,
 j - k <= c <= j + k 且
 (r, c) 在矩阵内。

 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    const res = [];

    if (!mat || mat.length === 0 || mat[0].length === 0) {
        return 0;
    }
    const h = mat.length;
    const w = mat[0].length;
    const dp = [];
    for (let i = 0; i <= h; i++) {
        const temp = new Array(w + 1);
        temp.fill(0);
        dp.push(temp);
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j] + mat[i][j] - dp[i][j];
        }
    }

    const getSum = function(row1, col1, row2, col2) {
        return dp[row2 + 1][col2 + 1] - dp[row2 + 1][col1] - dp[row1][col2 + 1] + dp[row1][col1];
    };

    for (let i = 0; i < mat.length; i++) {
        const tempSum = [];
        for (let j = 0; j < mat[0].length; j++) {
            const r1 = Math.max(0, i - k);
            const r2 = Math.min(mat.length - 1, i + k);
            const c1 = Math.max(0, j - k);
            const c2 = Math.min(mat[0].length - 1, j + k);
            tempSum.push(getSum(r1, c1, r2, c2));
        }
        res.push(tempSum);
    }
    return res;
};


console.log(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 1)); // [[12,21,16],[27,45,33],[24,39,28]]
// console.log([[1,2,3],[4,5,6],[7,8,9]], 2); // [[45,45,45],[45,45,45],[45,45,45]]
