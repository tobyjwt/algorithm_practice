/**
 * 给你一个整数数组 nums，请你求出乘积为正数的最长子数组的长度。

 一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。

 请你返回乘积为正数的最长子数组长度。

 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    const n = nums.length;
    if (!n) {
        return n;
    }
    const positive = [0];
    const negative = [0];
    if (nums[0] > 0) {
        positive[0] = 1;
    }
    if (nums[0] < 0) {
        negative[0] = 1;
    }
    for (let i = 1; i < n; i++) {
        if (nums[i] === 0) {
            positive[i] = 0;
            negative[i] = 0;
        } else if (nums[i] > 0) {
            positive[i] = positive[i - 1] + 1;
            if (negative[i - 1]) {
                negative[i] = negative[i - 1] + 1;
            } else {
                negative[i] = 0;
            }
        } else {
            if (negative[i - 1]) {
                positive[i] = negative[i - 1] + 1;
            } else {
                positive[i] = 0;
            }
            negative[i] = positive[i - 1] + 1;
        }
    }
    return Math.max(...positive);
};

console.log(getMaxLen([1,-2,-3,4])); // 4
console.log(getMaxLen([0,1,-2,-3,-4])); // 3
console.log(getMaxLen([-1,-2,-3,0,1])); // 2
console.log(getMaxLen([-1,2])); // 1
