/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    if (n < 3) {
        return 0
    }
    const leftMax = [height[0]];
    const rightMax = [];
    rightMax[n - 1] = height[n - 1];
    for (let i = 1; i < n; i++) {
        leftMax.push(Math.max(height[i], leftMax[i - 1]));
    }
    for (let i = n - 2; i > -1; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }
    let result = 0;
    for (let i = 1; i < n - 1; i++) {
        result += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return result;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9
