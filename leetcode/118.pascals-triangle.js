/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const tempResult = [];
        tempResult[0] = 1;
        tempResult[i] = 1;
        for (let j = 1; j < i; j++) {
            tempResult[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(tempResult);
    }
    return result;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
