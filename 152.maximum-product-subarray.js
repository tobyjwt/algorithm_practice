/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = [nums[0]];
    let min = [nums[0]];
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        max[i] = Math.max(nums[i] * max[i - 1], nums[i] * min[i - 1], nums[i]);
        min[i] = Math.min(nums[i] * max[i - 1], nums[i] * min[i - 1], nums[i]);
    }
    return Math.max(...max);
};

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
