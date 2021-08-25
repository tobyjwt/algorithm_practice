/**
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = [];
    for (let i = 0; i <= rowIndex; i++) {
        const tempResult = [];
        tempResult[0] = 1;
        tempResult[i] = 1;
        for (let j = 1; j < i; j++) {
            tempResult[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(tempResult);
    }
    return result[rowIndex];
};

console.log(getRow(4));
