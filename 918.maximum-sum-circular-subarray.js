/**
 * 给定一个由整数数组 A 表示的环形数组 C，求 C 的非空子数组的最大可能和。

 在此处，环形数组意味着数组的末端将会与开头相连呈环状。（形式上，当0 <= i < A.length 时 C[i] = A[i]，且当 i >= 0 时 C[i+A.length] = C[i]）

 此外，子数组最多只能包含固定缓冲区 A 中的每个元素一次。（形式上，对于子数组 C[i], C[i+1], ..., C[j]，不存在 i <= k1, k2 <= j 其中 k1 % A.length = k2 % A.length）

 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    const n = nums.length;
    let max = nums[0];
    let result = nums[0];
    for (let i = 1; i < n; i++) {
        if (result < 0) {
            result = nums[i];
        } else {
            result += nums[i];
        }
        max = Math.max(max, result);
    }

    if (max < 0) {
        return max;
    }

    const sum = nums.reduce((pre, cur) => pre + cur, 0);
    let min = nums[0];
    let minResult = nums[0];
    for (let i = 1; i < n; i++) {
        if (minResult > 0) {
            minResult = nums[i];
        } else {
            minResult += nums[i];
        }
        min = Math.min(min, minResult);
    }
    max = Math.max(max, sum - min);
    if (min === sum && min < 0) {
        max = Math.max(...nums);
    }
    return max;
};

// console.log(maxSubarraySumCircular([1,-2,3,-2]))
// console.log(maxSubarraySumCircular([5,-3,5]))
console.log(maxSubarraySumCircular([-2,-3,-1]))
