/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix: number[][]): void {
    const n = matrix.length;
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j < n) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[n - j - 1][n - i - 1];
                matrix[n - j - 1][n - i - 1] = temp;
            } else {
                break;
            }
        }
    }

    for (let i = 0; i < Math.trunc(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
};