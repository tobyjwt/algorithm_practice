/**
 * 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。

 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。

 返回一对观光景点能取得的最高分。

 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    // O(n)
    let max = values[0], res = 0;
    const n = values.length;
    for (let i = 1; i < n; i++) {
        res = Math.max(max + values[i] - i, res);
        max = Math.max(max, values[i] + i);
    }
    return res;
    // O(n^2)
    // const n = values.length;
    // for (let i = 0; i < n - 1; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         max = Math.max(values[j] + values[i] + i - j, max)
    //     }
    // }
    // return max;
};

console.log(maxScoreSightseeingPair([8,1,5,2,6])); // 11
