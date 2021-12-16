/**
 * 给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 */
function containsDuplicate(nums: number[]): boolean {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        console.log(map, map.has(nums[i]));
        if(map.has(nums[i])) {
            return false;
        }
        map.set(nums[i], true);
    }
    console.log(map);
    return true;
};

console.log(containsDuplicate([1,2,3,1])); // true