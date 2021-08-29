/**
 * 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

 子数组 是数组中的一个连续序列。

 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    if (n < 3) {
        return 0;
    }
    const count = [0, 0, 0];
    for (let i = 3; i <= n; i++) {
        count[i] = count[i - 1] + i - 2;
    }

    let gap = nums[1] - nums[0];
    let start = 0;
    let result = 0;
    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] !== gap) {
            if (i - start >= 3) {
                result += count[i - start];
                console.log(i, start);
            }
            start = i - 1;
            gap = nums[i] - nums[i - 1];
        }
    }
    if (n - start >= 3) {
        result += count[n - start];
    }
    return result;
};

// console.log(numberOfArithmeticSlices([1,2,3,4])); // 3
// console.log(numberOfArithmeticSlices([1])); // 0
console.log(numberOfArithmeticSlices([1,2,3,8,9,10])); // 2
