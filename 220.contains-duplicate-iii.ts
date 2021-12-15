/**
 * 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

   如果存在则返回 true，不存在返回 false。
 */
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0)); // true
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2)); // true
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3)); // false