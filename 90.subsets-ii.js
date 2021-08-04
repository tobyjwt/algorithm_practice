/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    const map = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const n = result.length;
        for (let j = 0; j < n; j++) {
            const item = result[j].concat(nums[i]);
            if (!map[item]) {
                map[item] = true;
                result.push(item)
            }
        }
        if (!map[nums[i]]) {
            map[nums[i]] = true;
            result.push([nums[i]]);
        }
    }
    result.unshift([]);
    return result;
};

console.log(subsetsWithDup([1, 2, 2]))
console.log(subsetsWithDup([4,4,4,1,4]))
