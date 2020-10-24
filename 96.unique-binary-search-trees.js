// 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
//
// 示例:
//
//     输入: 3
// 输出: 5
// 解释:
//     给定 n = 3, 一共有 5 种不同结构的二叉搜索树:
//
//     1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let resultMap = {};
    function getNum(start, end) {
        if (start > end) {
            return 1;
        }
        if (resultMap[`${start}-${end}`] !== undefined) {
            return resultMap[`${start}-${end}`];
        } else {
            let count = 0;
            for (let i = start; i <= end; i++) {
                count += getNum(start, i - 1) * getNum(i + 1, end);
            }
            resultMap[`${start}-${end}`] = count;
            return count;
        }
    }
    if (n === 0) {
        return 0;
    }
    return getNum(1, n);
};

console.log(numTrees(19))
