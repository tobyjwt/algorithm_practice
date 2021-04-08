/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length;
    const dp = new Array(n);
    let max = nums[0];
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(2);
        let lastMax = nums[i - 1] ? dp[i - 1][0] : 1;
        let lastMin = nums[i - 1] ? dp[i - 1][1] : 1;
        dp[i][0] = Math.max(nums[i] * lastMax, nums[i] * lastMin, nums[i]);
        dp[i][1] = Math.min(nums[i] * lastMax, nums[i] * lastMin, nums[i]);
        max = Math.max(max, dp[i][0]);
    }
    return max;
};

console.log(maxProduct([2,-5,-2,-4,3]))
